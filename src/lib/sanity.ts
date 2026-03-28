import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: import.meta.env.PROD,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  allProjects: `*[_type == "project"] | order(publishedAt desc) {
    _id, title, slug, description, techStack, image, liveUrl, githubUrl, featured, publishedAt
  }`,
  featuredProjects: `*[_type == "project" && featured == true] | order(publishedAt desc)[0...3] {
    _id, title, slug, description, techStack, image, liveUrl, githubUrl, publishedAt
  }`,
  allArticles: `*[_type == "article"] | order(publishedAt desc) {
    _id, title, slug, excerpt, category, tags, coverImage, publishedAt
  }`,
  latestArticles: `*[_type == "article"] | order(publishedAt desc)[0...3] {
    _id, title, slug, excerpt, category, tags, coverImage, publishedAt
  }`,
  articleBySlug: `*[_type == "article" && slug.current == $slug][0] {
    _id, title, slug, excerpt, body, category, tags, coverImage, publishedAt, seo,
    "related": *[_type == "article" && slug.current != $slug && category == ^.category] | order(publishedAt desc)[0...3] {
      _id, title, slug, excerpt, category, coverImage, publishedAt
    }
  }`,
  projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id, title, slug, description, body, techStack, image, liveUrl, githubUrl, publishedAt
  }`,
  articlesByCategory: `*[_type == "article" && category == $category] | order(publishedAt desc) {
    _id, title, slug, excerpt, category, tags, coverImage, publishedAt
  }`,
  author: `*[_type == "author"][0] {
    name, bio, image, social
  }`,
  allTestimonials: `*[_type == "testimonial"] | order(order asc) {
    _id, clientName, clientTitle, clientImage, quote, rating, projectType, upworkContract, country, featured
  }`,
  featuredTestimonials: `*[_type == "testimonial" && featured == true] | order(order asc) {
    _id, clientName, clientTitle, clientImage, quote, rating, projectType, country
  }`,
  siteSettings: `*[_type == "siteSettings"][0] {
    heroBadge, heroHeadline, heroHeadlineHighlight, heroSubtitle, heroCtaPrimary, heroCtaSecondary,
    aboutBio,
    skills,
    github, linkedin, googleScholar,
    email, location,
    testimonialsHeading, testimonialsSubheading,
    ctaHeading, ctaText, ctaButtonLabel,
    jobSuccess, rating, projectsDelivered, happyClients, upworkUrl
  }`,
  allPublications: `*[_type == "publication"] | order(year desc) {
    _id, title, authors, journal, year, doi, abstract, tags
  }`,
};
