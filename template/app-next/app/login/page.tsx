import { redirect } from "next/navigation";

// The login page has been replaced by the Contact page. Visiting /login now
// redirects to /contact.
export default function Page() {
  redirect("/contact");
}
