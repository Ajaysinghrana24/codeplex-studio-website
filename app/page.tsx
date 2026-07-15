import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Header />
      
      <main className="pt-32 pb-0 md:pt-36 lg:pt-44 lg:pb-0">
        <Hero />
      </main>
    </div>
  );
}
