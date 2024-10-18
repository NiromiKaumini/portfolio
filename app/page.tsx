import Hero from "@/compononts/Hero";
import { Spotlight } from "@/compononts/ui/Spotlight";

export default function Home() {
  return (
    <div>
      <main className="relative bg-black-100">
      <Hero/>
      <Spotlight/>
      </main>
    </div>
  );
}
