import { notFound } from "next/navigation";

export default async function BlogDetails({ params }) {
  const { id } = await params;

  // Fetch the blog details by its ID
  const response = await fetch(`https://silent-pen-server.vercel.app/blogs/${id}`, {
    cache: "no-store", // Ensure fresh data is fetched each time
  });

  if (!response.ok) {
    return notFound(); // Handle missing or error-prone data
  }

  const blog = await response.json();

  return (
    <section className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">{blog.blog_title}</h1>
      <p className="text-gray-500 mb-8">By Afra Anjum - {blog.blog_date} | {blog.blog_category}</p>
      <article className="prose lg:prose-xl">
        <p>{blog.blog_content}</p> {/* Displaying the full content */}
      </article>
    </section>
  );
}
