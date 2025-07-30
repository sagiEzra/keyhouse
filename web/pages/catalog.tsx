import Link from 'next/link'
import { type SanityDocument } from 'next-sanity'
import { sanity, urlFor } from '../lib/sanity'
import { useEffect } from 'react';

const POSTS_QUERY = `*[
  _type == "property"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, description, images, location, price, status, featured, slug, publishedAt}`;

// const POSTS_QUERY = `*[]`

const options = { next: { revalidate: 30 } };
export async function getStaticProps() {
    const properties = await sanity.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
    console.log(properties);
    console.log('images', properties[0].images[0]);
    return {
        props: {
            properties,
        },
        revalidate: 30, // Revalidate every 30 seconds
    }
}

export default function Catalog({ properties }: { properties: SanityDocument[] }) {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10" onClick={() => console.log(properties)}>
                    Catalog
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((post) => (
                        <Link legacyBehavior key={post._id} href={`/catalog/${post.slug.current}`}>
                            <a className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={urlFor(post.images[0]?.asset._ref).url()}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600">{post.description}</p>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}