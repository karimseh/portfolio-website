import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'about', title: 'About' },
    { name: 'skills', title: 'Skills' },
    { name: 'social', title: 'Social Links' },
    { name: 'contact', title: 'Contact' },
    { name: 'sections', title: 'Section Text' },
    { name: 'testimonialStats', title: 'Testimonial Stats' },
  ],
  fields: [
    // Hero
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      description: 'First line of the hero heading',
    }),
    defineField({
      name: 'heroHeadlineHighlight',
      title: 'Hero Headline Highlight',
      type: 'string',
      group: 'hero',
      description: 'Second line with gradient text',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaPrimary',
      title: 'Primary CTA Label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaSecondary',
      title: 'Secondary CTA Label',
      type: 'string',
      group: 'hero',
    }),

    // About
    defineField({
      name: 'aboutBio',
      title: 'About Bio',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'about',
    }),

    // Skills
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      group: 'skills',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'category', title: 'Category', type: 'string' }),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: { title: 'category', items: 'items' },
            prepare({ title, items }) {
              return { title, subtitle: items?.join(', ') };
            },
          },
        },
      ],
    }),

    // Social
    defineField({ name: 'github', title: 'GitHub URL', type: 'url', group: 'social' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url', group: 'social' }),
    defineField({ name: 'googleScholar', title: 'Google Scholar URL', type: 'url', group: 'social' }),

    // Contact
    defineField({ name: 'email', title: 'Email', type: 'string', group: 'contact' }),
    defineField({ name: 'location', title: 'Location', type: 'string', group: 'contact' }),

    // Section Text
    defineField({ name: 'testimonialsHeading', title: 'Testimonials Heading', type: 'string', group: 'sections', description: 'e.g. "Clients love working with me"' }),
    defineField({ name: 'testimonialsSubheading', title: 'Testimonials Subheading', type: 'string', group: 'sections' }),
    defineField({ name: 'ctaHeading', title: 'CTA Heading', type: 'string', group: 'sections', description: 'e.g. "Let\'s build something great together"' }),
    defineField({ name: 'ctaText', title: 'CTA Text', type: 'text', rows: 2, group: 'sections' }),
    defineField({ name: 'ctaButtonLabel', title: 'CTA Button Label', type: 'string', group: 'sections' }),

    // Testimonial Stats
    defineField({ name: 'jobSuccess', title: 'Job Success', type: 'string', group: 'testimonialStats', description: 'e.g. "100%"' }),
    defineField({ name: 'rating', title: 'Rating', type: 'string', group: 'testimonialStats', description: 'e.g. "5.0"' }),
    defineField({ name: 'projectsDelivered', title: 'Projects Delivered', type: 'string', group: 'testimonialStats', description: 'e.g. "20+"' }),
    defineField({ name: 'happyClients', title: 'Happy Clients', type: 'string', group: 'testimonialStats', description: 'e.g. "10+"' }),
    defineField({ name: 'upworkUrl', title: 'Upwork Profile URL', type: 'url', group: 'testimonialStats' }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
