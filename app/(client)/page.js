import UpcomingHockeyTournament from "@/components/frontEnd/homepage/aboutTournament";
import ConsultationAd from "@/components/frontEnd/homepage/ConsultationAd";
import ConsultationModal from "@/components/frontEnd/homepage/ConsultationModel";
import Hero from "@/components/frontEnd/homepage/Hero";
import WhyChoose from "@/components/frontEnd/WhyChoose";

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


