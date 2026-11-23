import Link from "next/link";

export default function Home() {
  return (
    <nav className="flex min-h-screen flex-col items-center justify-between p-60"> 
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"></main> */}
      <h1 className="text-4xl font-bold">Hi, I am Realm Kindred C. Notarte</h1>
      <p className="mt-2">
         I am Realm Kindred C. Notarte. I am taken.
      </p>

      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </nav>
  );
}


