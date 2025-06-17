// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { sanity, urlFor } from '../../lib/sanity';
import { SanityDocument } from 'next-sanity';

const QUERY = `*[_type == "property" && slug.current == $slug][0]{
  _id, title, description, images, location, price, status, featured, slug, publishedAt
}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await sanity.fetch(`*[_type == "property" && defined(slug.current)][].slug.current`);
  const paths = slugs.map((slug: string) => ({ params: { slug } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const property = await sanity.fetch<SanityDocument>(QUERY, { slug: params?.slug });
  if (!property) return { notFound: true };
  return { props: { property }, revalidate: 30 };
};

export default function PropertyPage({ property }: { property: SanityDocument }) {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <img
        src={urlFor(property.images[0]?.asset._ref).url()}
        alt={property.title}
        className="w-full h-96 object-cover mb-6"
      />
      <p>{property.description}</p>
      {/* You can show more info like location, price, etc. */}
    </div>
  );
}
