import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function ApplicationPage() {

    const session = await getSession();
    const user = session?.user;
  
    if (!user) {
      redirect("/api/auth/signin?callbackUrl=/settings");
    }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Application</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="mb-4">This is the application page. You can add your application form or content here.</p>
        {/* Add your application form or other components here */}
      </div>
    </div>
  );
}
