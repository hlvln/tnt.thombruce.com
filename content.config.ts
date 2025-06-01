import { defineCollection, defineContentConfig, z } from '@nuxt/content'

import { global } from '@thombruce/tnt/content.config'

export default defineContentConfig({
  collections: {
    // Pages: E.g. /index.md, /about.md
    pages: defineCollection({
      source: {
        include: '**/*',
        exclude: [
          '.*',
          '.*/**/*',
          '*blog/**/*',
          '*docs/**/*',
          '*testimonials/**/*',
        ]
      },
      type: 'page',
      schema: z.object({
        ...global,
      })
    }),
    // Blog: Blog posts
    blog: defineCollection({
      source: [
        {
          include: '*blog/**/*',
          exclude: [
            '*blog/**/.*',
            '*blog/**/.*/**/*',
          ]
        },
        { include: '*blog/**/.navigation.y?(a)ml', },
      ],
      type: 'page',
      schema: z.object({
        ...global,
        layout: z.string().default('article'),
        category: z.string().optional(),
      })
    }),
    // Docs: Documentation
    docs: defineCollection({
      source: [
        {
          include: '*docs/**/*',
          exclude: [
            '*docs/**/.*',
            '*docs/**/.*/**/*',
          ]
        },
        { include: '*docs/**/.navigation.y?(a)ml', },
      ],
      type: 'page',
      schema: z.object({
        ...global,
        layout: z.string().default('doc'),
        category: z.string().optional(),
      })
    }),
    testimonials: defineCollection({
      source: [
        {
          include: '*testimonials/**/*',
          exclude: [
            '*testimonials/**/.*',
            '*testimonials/**/.*/**/*',
          ]
        },
        { include: '*testimonials/**/.navigation.y?(a)ml', },
      ],
      type: 'page',
      schema: z.object({
        ...global,
        highlight: z.string(),
        ogComponent: z.string().default('TntTestimonial'),
      })
    }),
  }
})

// To define custom collections, see:
// https://content.nuxt.com/docs/collections/define

// NOTE: It is recommended that any and all content
// files you wish to be searchable are written in
// markdown. It is not yet possible to search .yml
// files or custom content types. We recommend
// creating canonical markdown files which link to
// "attached" content should you need to use custom
// types at all.
