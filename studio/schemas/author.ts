import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'github', title: 'GitHub URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
