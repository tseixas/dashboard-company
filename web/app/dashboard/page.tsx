import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import BtnLogout from "../components/btnLogout";

export default async function Dashboard() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <main className="flex flex-col gap-3 w-screen h-screen items-center justify-center">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={session?.image || session?.avatar} />
        </div>
      </div>
      <strong>{session?.name}</strong>
      <BtnLogout />
    </main>
  );
}
