interface NavigationItem {
  name: string;
  href: string;
}

export function Footer({
  footerNavigation,
}: {
  footerNavigation: {
    app: NavigationItem[];
    company: NavigationItem[];
  };
}) {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="border-border bg-background mt-24 border-t"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="/"
              className="text-foreground text-lg font-semibold tracking-tight"
            >
              ainnect
            </a>
            <p className="text-muted-foreground mt-3 text-sm leading-6">
              The AI-powered CRM that helps your business capture leads,
              automate follow-ups, and close more deals.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16 sm:gap-24">
            <FooterColumn title="Product" items={footerNavigation.app} />
            <FooterColumn title="Company" items={footerNavigation.company} />
          </div>
        </div>

        <div className="border-border mt-12 flex flex-col items-center justify-between gap-3 border-t pt-8 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ainnect. All rights reserved.
          </p>
          <a
            href="/contact"
            className="text-muted-foreground hover:text-primary text-sm transition-colors"
          >
            hello@ainnect.site
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: NavigationItem[];
}) {
  return (
    <div>
      <h3 className="text-foreground text-sm font-semibold leading-6">
        {title}
      </h3>
      <ul role="list" className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-muted-foreground hover:text-primary text-sm leading-6 transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
