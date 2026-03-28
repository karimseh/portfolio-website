import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientTitle',
      title: 'Client Title / Role',
      type: 'string',
      description: 'e.g. "CEO at StartupX" or "Product Manager"',
    }),
    defineField({
      name: 'clientImage',
      title: 'Client Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5).required(),
      initialValue: 5,
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      description: 'e.g. "Web Application", "Blockchain Development", "Full Stack"',
    }),
    defineField({
      name: 'upworkContract',
      title: 'Upwork Contract Value',
      type: 'string',
      description: 'e.g. "$5,000+" or "Long-term"',
    }),
    defineField({
      name: 'country',
      title: 'Client Country',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'projectType',
      media: 'clientImage',
    },
  },
});
