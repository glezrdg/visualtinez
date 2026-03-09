import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Clients from "@/components/Clients";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Differentials />
      <Services />
      <Philosophy />
      <Clients />
      <Portfolio />
      <Team />
      <CTA />
    </main>
  );
}
