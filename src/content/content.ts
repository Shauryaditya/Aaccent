// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';


//pricing page schema
const pricing_page = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    plans: z.array(z.object({
      title: z.string(),
      subtitle: z.string(),
      price: z.number(),
      recommended: z.boolean().optional(),
      type: z.string(),
      features: z.array(z.string()).optional(),
      button: z.object({
        label: z.string(),
        link: z.string().default("#"),
        enable: z.boolean().default(true)
      })
    })).optional(),
    call_to_action: z.object({
      title: z.string().optional(),
      content: z.string().optional(),
      image: z.string(),
      button: z.object({
        label: z.string(),
        link: z.string().default("#"),
        enable: z.boolean().default(true)
      }).optional()
    }).optional()
  })
})


const serviceCollection = defineCollection ({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    features: z.object({
      subjects: z.string(),
    }),
    classes: z.string(),

    publishDate: z.string().transform(str => new Date(str)),
  }),
})

const teamCollection = defineCollection({
    schema: z.object({
      draft: z.boolean(),
      name: z.string(),
      title: z.string(),
      ed: z.string(),
      avatar: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      publishDate: z.string().transform(str => new Date(str)),
    }),
  });
  

  // 3. Export a single `collections` object to register your collection(s)
  //    This key should match your collection directory name in "src/content"
  export const collections = {
    'services' : serviceCollection,
    'team': teamCollection,
    'pricing': pricing_page
  };