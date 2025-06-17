import { createClient } from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url';

export const sanity = createClient({
  projectId: 'u6n1g2ya',
  dataset: 'production',
  apiVersion: '2025-04-23',
  useCdn: false,
  perspective: 'drafts'
})

// Image URL builder
const builder = ImageUrlBuilder(sanity);
export function urlFor(source: any) {
  return builder.image(source);
};