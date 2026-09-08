import {
  Briefcase,
  Filter,
  LineChart,
  Mail,
  Plug,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import daBoiAvatar from "../client/static/da-boi.webp";
import kivo from "../client/static/examples/kivo.webp";
import messync from "../client/static/examples/messync.webp";
import microinfluencerClub from "../client/static/examples/microinfluencers.webp";
import promptpanda from "../client/static/examples/promptpanda.webp";
import reviewradar from "../client/static/examples/reviewradar.webp";
import scribeist from "../client/static/examples/scribeist.webp";
import searchcraft from "../client/static/examples/searchcraft.webp";
import { DocsUrl } from "../shared/common";
import type { GridFeature } from "./components/FeaturesGrid";

const featureIconClass = "text-primary h-9 w-9 stroke-[1.5]";

export const features: GridFeature[] = [
  {
    name: "AI Lead Scoring",
    description:
      "ainnect ranks every lead automatically so your team always works the deals most likely to close.",
    icon: <Target className={featureIconClass} />,
    href: DocsUrl,
    size: "small",
  },
  {
    name: "Smart Contact Hub",
    description:
      "Every customer, conversation, and deal in one place — synced across your whole business.",
    icon: <Users className={featureIconClass} />,
    href: DocsUrl,
    size: "small",
  },
  {
    name: "Sales Pipeline",
    description:
      "Drag-and-drop pipelines that give you a real-time view of revenue from first touch to closed-won.",
    icon: <Filter className={featureIconClass} />,
    href: DocsUrl,
    size: "medium",
  },
  {
    name: "AI Assistant",
    description:
      "Draft follow-up emails, summarize calls, and get the next-best action suggested for every contact.",
    icon: <Sparkles className={featureIconClass} />,
    href: DocsUrl,
    size: "large",
  },
  {
    name: "Workflow Automation",
    description:
      "Automate follow-ups, reminders, and hand-offs so nothing — and no one — falls through the cracks.",
    icon: <Workflow className={featureIconClass} />,
    href: DocsUrl,
    size: "large",
  },
  {
    name: "Revenue Analytics",
    description:
      "Forecast revenue and spot at-risk deals with dashboards built for business decisions.",
    icon: <LineChart className={featureIconClass} />,
    href: DocsUrl,
    size: "small",
  },
  {
    name: "Inbox & Email Sync",
    description:
      "Two-way email sync keeps every conversation logged against the right contact automatically.",
    icon: <Mail className={featureIconClass} />,
    href: DocsUrl,
    size: "small",
  },
  {
    name: "Team Collaboration",
    description:
      "Roles, notes, and shared pipelines keep sales, support, and marketing on the same page.",
    icon: <Briefcase className={featureIconClass} />,
    href: DocsUrl,
    size: "medium",
  },
  {
    name: "Integrations & API",
    description:
      "Connect WhatsApp, your website forms, and the tools your business already runs on.",
    icon: <Plug className={featureIconClass} />,
    href: DocsUrl,
    size: "medium",
  },
];

export const testimonials = [
  {
    name: "Putri Andini",
    role: "Sales Lead @ TokoMaju",
    avatarSrc: daBoiAvatar.src,
    socialUrl: "#",
    quote:
      "ainnect's AI tells my team exactly which leads to call first. We closed 30% more deals last quarter.",
  },
  {
    name: "Daniel Pratama",
    role: "Founder @ Growthlab",
    avatarSrc: daBoiAvatar.src,
    socialUrl: "",
    quote:
      "Finally a CRM that actually does the busywork for us. The follow-up automation paid for itself in a week.",
  },
  {
    name: "Sarah Lim",
    role: "Operations Manager",
    avatarSrc: daBoiAvatar.src,
    socialUrl: "#",
    quote:
      "All our customer conversations in one place, with AI summaries. Our whole business runs on ainnect now.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is ainnect?",
    answer:
      "ainnect is an AI-powered CRM that helps businesses capture leads, manage customer relationships, automate follow-ups, and close more deals — all in one place.",
    href: "",
  },
  {
    id: 2,
    question: "How does the AI help my business?",
    answer:
      "ainnect scores your leads, drafts follow-up messages, summarizes conversations, and suggests the next best action for every contact, so your team spends time selling instead of doing admin.",
    href: "",
  },
  {
    id: 3,
    question: "Can I import my existing contacts?",
    answer:
      "Yes. Import your contacts and deals from a spreadsheet or another CRM, and sync your email and forms so everything stays up to date automatically.",
    href: "",
  },
  {
    id: 4,
    question: "Is there a free plan?",
    answer:
      "You can get started for free and upgrade as your team grows. See the pricing page for current plans.",
    href: "",
  },
];

export const footerNavigation = {
  app: [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export const examples = [
  {
    name: "Lead Capture",
    description:
      "Turn website visitors and WhatsApp chats into qualified leads, scored by AI.",
    imageSrc: kivo.src,
    href: "#",
  },
  {
    name: "Sales Pipeline",
    description:
      "Track every deal from first contact to closed-won on a visual board.",
    imageSrc: messync.src,
    href: "#",
  },
  {
    name: "AI Follow-ups",
    description:
      "Let ainnect draft and schedule the perfect follow-up at the perfect time.",
    imageSrc: microinfluencerClub.src,
    href: "#",
  },
  {
    name: "Customer 360",
    description:
      "Every email, note, and order for a customer in a single timeline.",
    imageSrc: promptpanda.src,
    href: "#",
  },
  {
    name: "Revenue Dashboard",
    description:
      "Forecast revenue and see what's driving growth in your business.",
    imageSrc: reviewradar.src,
    href: "#",
  },
  {
    name: "Team Inbox",
    description:
      "A shared inbox so support and sales never miss a customer message.",
    imageSrc: scribeist.src,
    href: "#",
  },
  {
    name: "Automations",
    description:
      "Build no-code workflows that move deals forward while you sleep.",
    imageSrc: searchcraft.src,
    href: "#",
  },
];
