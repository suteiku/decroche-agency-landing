import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { StatsMarquee } from "@/components/landing/stats-marquee";
import { MetricsSection } from "@/components/landing/metrics-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { SecuritySection } from "@/components/landing/security-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { CalSection } from "@/components/landing/cal-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <StatsMarquee />
      <MetricsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <CalSection />
      <FooterSection />
    </main>
  );
}
