import Link from 'next/link';

export default function PostCard({ blog: { _id, blog_title, blog_date, blog_category, blog_content } }) {
  return (
    <div className="my-10">
      {/* Link to the individual blog details page */}
      <Link className="text-xl underline font-semibold" href={`/${_id}`}>
        {blog_title}
      </Link>
      <p className="text-sm text-gray-500">{blog_date} | {blog_category}</p>
      <p className="mt-2 font-newsreader text-lg">
        {/* Display a preview of the blog content */}
        {blog_content.slice(0, 300)}{blog_content.length > 300 && "..."}
      </p>
    </div>
  );
}
