"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Welcome to Our Landing Page</h1>
        <Link href="/get-started">Check eligibility</Link>
      </div>
    </>
  );
}
