import Link from "next/link";

// import Header from "../components/header";
import Header from "@/components/header"; //this is same like above

export default function Home() {
  //this console.log will render in terminal server/backend
  // console.log("Executing....");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* this Link will be make SPA */}
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
