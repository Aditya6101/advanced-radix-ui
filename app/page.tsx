import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center h-screen w-screen">
      <h3 className="font-medium text-2xl">Components List</h3>
      <ol className="list-decimal">
        <li>
          <Link href="/switch" className="text-blue-400 underline">
            Switch
          </Link>
        </li>
        <li>
          <Link
            href="/apple-selector-group"
            className="text-blue-400 underline"
          >
            Apple Selector Group
          </Link>
        </li>
      </ol>
    </main>
  );
}
