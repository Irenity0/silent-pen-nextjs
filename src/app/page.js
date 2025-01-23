import PostCard from "@/components/PostCards";


export default async function Home() {
  const response = await fetch("https://silent-pen-server.vercel.app/blogs", {
    cache: "no-store", 
  });

  const blogs = await response.json();

  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold my-6">Blogs</h1>
      <div className="my-6">
        {blogs.map((blog) => (
          <PostCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
