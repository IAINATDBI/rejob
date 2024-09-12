"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import UserButton from "../UserButton";
import { Button } from "../ui/button";
import Image from "next/image";
export default function NavBar() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
    <nav className="flex flex-wrap justify-between items-center px-4 py-2 bg-white max-w-[1440px] mx-auto">
      <div className="flex items-center bg-[#ff3e4c] rounded p-1 text-white">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="ReJob Logo"
            width={48}
            height={41}
            className="mr-2"
          />
        </Link>
        <span className="font-bold text-2xl">ReJob</span>
      </div>
      <div className="hidden md:flex space-x-4">
        {["Home", "Learn", "FAQ", "Contact"].map((item) => (
          <span 
            key={item} 
            className="font-bold text-[#ff3e4c] hover:underline"
            onClick={() => {}} // Blank arrow function
          >
            {item}
          </span>
        ))}
        <Link href="/pricing" className="font-bold text-[#ff3e4c] hover:underline">
          Pricing
        </Link>
      </div>
        {/* <Link href="/" className="font-bold">
          Next-Auth v5 Tutorial
        </Link> */}
        {user && <UserButton user={user} />}
        {!user && session.status !== "loading" && <SignInButton />}
      </nav>
    </header>
  );
}

function SignInButton() {
  const handleSignIn = () => {
    signIn(undefined, { callbackUrl: '/rejob' });
  };

  return <Button className="bg-[#ff3e4c]" onClick={handleSignIn}>Sign in</Button>;
}
