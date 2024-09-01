import Image from "next/image";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  );
}
