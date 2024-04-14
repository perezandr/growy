// import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  // const { data: session } = useSession();
  // if (session) {
  //   console.log(session.user);
  // }
  return (
    <main>
      <h1>landing page</h1>
      <Link href="/login">Log in</Link>
      <Link href="/signup">Sign up</Link>
    </main>
  );
}
