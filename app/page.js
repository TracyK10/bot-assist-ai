import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Customer Support App
      </h1>
      <Link href="/login" className="text-blue-500 hover:underline">
        Login to get started
      </Link>
    </div>
  );
}
