import Link from 'next/link';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();
  const limitedPosts = posts.slice(0, 10); // Limit to 10 posts

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Viewer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {limitedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.body.slice(0, 60)}...</p>
            <Link href={`/blog/${post.id}`} passHref>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
