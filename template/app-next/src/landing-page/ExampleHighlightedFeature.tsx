import aiReadyDark from "../client/static/assets/aiready-dark.webp";
import aiReady from "../client/static/assets/aiready.webp";
import { HighlightedFeature } from "./components/HighlightedFeature";

export function AIReady() {
  return (
    <HighlightedFeature
      name="AI that works while you sleep"
      description="ainnect's AI scores your leads, drafts follow-ups, and tells your team the next best action for every customer — turning your CRM into a revenue engine."
      highlightedComponent={<AIReadyExample />}
      direction="row-reverse"
    />
  );
}

function AIReadyExample() {
  return (
    <div className="w-full">
      <img
        src={aiReady.src}
        alt="AI Ready"
        loading="lazy"
        className="dark:hidden"
      />
      <img
        src={aiReadyDark.src}
        alt="AI Ready"
        loading="lazy"
        className="hidden dark:block"
      />
    </div>
  );
}
