module.exports = {

"[project]/app/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}
async function Home() {
    const posts = await fetchPosts();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Blog Viewer"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/blog/${post.id}`,
                            className: "text-blue-600 hover:underline",
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, post.id, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/page.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/app/page.js [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_fcd1e3._.js.map