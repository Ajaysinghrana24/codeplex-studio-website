import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow flex flex-col justify-center pt-32 pb-16 md:pt-36 lg:pt-44 lg:pb-24">
        <Hero />
      </main>
    </div>
  );
}
