"use client";
import Link from 'next/link';
// import { useKindeAuth } from '@kinde-oss/kinde-auth-js';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs"
export default function Navbar() {
  // const { isAuthenticated, login, logout } = useKindeAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Name on the Left */}
        <div>
          <Link  className="text-lg font-bold" href="/">
            <p>Blog Navigator</p>
          </Link>
        </div>

        {/* Links in the Middle */}
        <div className="flex space-x-4">
          <Link href="/">
            <p className="mr-4">Home</p>
          </Link>
          <Link href="/profile">
            <p>Profile</p>
          </Link>
        </div>

        {/* Sign In and Sign Up Buttons on the Right */}
        <div>
          {/* Uncomment this section when Kinde Auth is available */}
          {/* {isAuthenticated ? (
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          ) : (
            <div className="flex space-x-4">
              <button onClick={login} className="bg-blue-500 px-4 py-2 rounded">
                Sign In
              </button>
              <button className="bg-green-500 px-4 py-2 rounded">
                Sign Up
              </button>
            </div>
          )} */}

          {/* Placeholder for now */}
          <div className="flex space-x-4">
            <button  className="bg-blue-500 px-4 py-2 rounded"><LoginLink>Sign In</LoginLink></button>
            <button className="bg-green-500 px-4 py-2 rounded"><RegisterLink>Register</RegisterLink></button>
          </div>
        </div>
      </div>
    </nav>
  );
}
