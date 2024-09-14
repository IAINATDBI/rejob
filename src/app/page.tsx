import prisma from "@/lib/prisma";
import Link from "next/link";
import Hero from '@/components/other/Hero';
import SystemModule from '@/components/other/SystemModule';

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* ... existing content ... */}
    </div>
  );
}
