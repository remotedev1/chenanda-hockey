import EventCountdown from "@/components/frontEnd/homepage/EventCountdown";
import Hero from "@/components/frontEnd/homepage/Hero";
import PhotoPortfolio from "@/components/frontEnd/homepage/PhotoPortfolio";

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Hero />
      <EventCountdown />
      {/* <PhotoPortfolio /> */}
    </main>
  );
}
