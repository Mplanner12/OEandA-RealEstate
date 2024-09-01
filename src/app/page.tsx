import Image from "next/image";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  );
}
