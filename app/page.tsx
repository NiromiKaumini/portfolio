import Hero from "@/components/Hero";  
import { Spotlight } from "@/components/ui/Spotlight";  

export default function Home() {
  return (
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
      style={{ backgroundColor: "#030712" }}>
        <div className="max-w-7xl w-full">
          <Hero/>
          <Spotlight/>
        </div>
      </main>
  );
}
