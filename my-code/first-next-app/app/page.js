import Link from "next/link";

export default function Home() {
  //this console.log will render in terminal server/backend
  // console.log("Executing....");
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* this Link will be make SPA */}
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
