import Container from "@/components/common/GlobalContainer";
import AboutComponent from "@/components/frontEnd/about/AboutComponent";
import FamilyTree from "@/components/frontEnd/about/family-tree/FamilyTree";

export default function AboutSection() {
  return (
    <section className="bg-white pb-5">
      <AboutComponent />
      <FamilyTree />
    </section>
  );
}
