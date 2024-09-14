import { Poppins } from 'next/font/google'
import SystemModule from "@/components/other/SystemModule";
import Hero from "@/components/other/Hero";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";
const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export default async function RejobPage() {

  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/protected");
  }
  return (
    <div>
      <h1 className={font.className} style={{ marginBottom: '30px' }}>Protected Page: try to navigate to /protected route when signed out.</h1>
      {/* ... existing content ... */}
    </div>
  )
}

