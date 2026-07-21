import { createFileRoute } from "@tanstack/react-router";
import {
  Header,
  HeroSectionV2,
  AboutSection,
  LocationSection,
  TicketsSection,
  FAQSection,
  FinalCTA,
  Footer,
} from "@/components/landing-sections";

// Rascunho de teste: Hero com imagem de fundo full-bleed (inspirado em referência de mercado),
// resto da página idêntico à V1. Página atual em "/" não é afetada.
function IndexV2() {
  return (
    <div className="relative overflow-x-hidden bg-cream text-charcoal">
      <Header />
      <main>
        <HeroSectionV2 />
        <AboutSection />
        <LocationSection />
        <TicketsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/v2")({
  component: IndexV2,
});
