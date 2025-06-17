export default {
  name: 'property',
  title: 'property',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'status', title: 'Status', type: 'string', options: { list: ['Rent', 'Sale'] } },
    { name: 'featured', title: 'Featured', type: 'boolean' },
  ]
}
