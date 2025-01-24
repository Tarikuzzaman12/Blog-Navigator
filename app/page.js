import Image from "next/image";
import './globals.css';

// export default function Home() {
//   return (
//     // <div className="bg-gray-100 min-h-screen">
//     //   {/* Navbar */}
//     //   <nav className="bg-white shadow-md p-4">
//     //     <h1 className="text-2xl font-bold text-center">Welcome to Blog Navigator</h1>
//     //   </nav>

//     //   {/* Hero Section */}
//     //   <header className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
//     //     <h2 className="text-4xl font-bold mb-4">Explore Amazing Blogs</h2>
//     //     <p className="text-lg">Find interesting stories, tutorials, and guides curated just for you.</p>
//     //   </header>

//     //   {/* Features Section */}
//     //   <section className="py-10 px-5">
//     //     <h3 className="text-2xl font-bold text-center mb-6">Features</h3>
//     //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//     //       <div className="bg-white p-6 shadow-md rounded-lg">
//     //         <h4 className="text-xl font-bold mb-2">Latest Blogs</h4>
//     //         <p>Stay updated with the latest posts from various categories.</p>
//     //       </div>
//     //       <div className="bg-white p-6 shadow-md rounded-lg">
//     //         <h4 className="text-xl font-bold mb-2">Search Blogs</h4>
//     //         <p>Quickly find the blogs you love with our powerful search feature.</p>
//     //       </div>
//     //       <div className="bg-white p-6 shadow-md rounded-lg">
//     //         <h4 className="text-xl font-bold mb-2">Bookmark Favorites</h4>
//     //         <p>Save blogs to read later or keep track of your favorites.</p>
//     //       </div>
//     //     </div>
//     //   </section>

//     //   {/* Footer */}
//     //   <footer className="bg-gray-800 text-white text-center py-4">
//     //     <p>© 2025 Blog Navigator. All Rights Reserved.</p>
//     //   </footer>
//     // </div>
//     <div>
      
//     </div>
//   );
// }
import Link from 'next/link';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store', // Avoid caching if dynamic content is required
  });
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Viewer</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
