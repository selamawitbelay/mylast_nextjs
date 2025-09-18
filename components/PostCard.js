import Link from 'next/link';

export default function PostCard({ post }) {
  const img = post._embedded && post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : '';
  const excerpt = post.excerpt ? post.excerpt.rendered : '';
  return (
    <article className="bg-white p-4 rounded shadow-sm mb-4">
      {img && <img src={img} alt="" className="w-full h-48 object-cover rounded mb-3" />}
      <h2 className="text-xl font-semibold"><Link href={`/posts/${post.id}`}>{post.title.rendered}</Link></h2>
      <div className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </article>
  );
}
