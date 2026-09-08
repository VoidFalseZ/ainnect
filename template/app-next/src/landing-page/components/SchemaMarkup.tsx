// JSON-LD structured data for SEO. Helps search engines and LLMs understand
// your app so it can appear in rich results and AI answers. Customize the
// placeholders below to match your product. See https://schema.org for types.
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://ainnect.site/#software",
      name: "ainnect",
      description:
        "ainnect is an AI-powered CRM that helps businesses capture leads, manage customer relationships, automate follow-ups, and close more deals.",
      url: "https://ainnect.site",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cross-platform",
      image: "https://ainnect.site/banner.png",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ainnect.site/#website",
      url: "https://ainnect.site",
      name: "ainnect",
      description:
        "The AI-powered CRM that grows your business — capture leads, automate follow-ups, and close more deals.",
    },
  ],
};

export function SchemaMarkup() {
  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
