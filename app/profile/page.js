// app/profile/page.js
'use client'; // Needed for client-side logic

// import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';

export default function Profile() {
  // const { isAuthenticated, login, logout } = useKindeAuth();

  // if (!isAuthenticated) {
  //   return (
  //     <div className="container mx-auto p-4 text-center">
  //       <h1 className="text-2xl font-bold">Please log in to access your profile</h1>
  //       <button
  //         onClick={login}
  //         className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
  //       >
  //         Login
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to your profile!</h1>
      <button
        // onClick={logout}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
