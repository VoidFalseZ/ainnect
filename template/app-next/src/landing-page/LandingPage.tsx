import { FAQ } from "./components/FAQ";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { Hero } from "./components/Hero";
import { SchemaMarkup } from "./components/SchemaMarkup";
import { Testimonials } from "./components/Testimonials";
import { UsedBy } from "./components/UsedBy";
import { faqs, features, testimonials } from "./contentSections";
import { AIReady } from "./ExampleHighlightedFeature";

export function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup />
      <main className="isolate">
        <Hero />
        <UsedBy />
        <AIReady />
        <FeaturesGrid features={features} />
        <Testimonials testimonials={testimonials} />
        <FAQ faqs={faqs} />
      </main>
    </div>
  );
}
