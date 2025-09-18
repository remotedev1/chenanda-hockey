import UpcomingHockeyTournament from "@/components/frontEnd/about/aboutTournament";
import Hero from "@/components/frontEnd/homepage/Hero";

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Hero />
      <UpcomingHockeyTournament />
      {/* <WhyChoose about={true} />
      <ConsultationAd />
      <ConsultationModal /> */}
    </main>
  );
}


