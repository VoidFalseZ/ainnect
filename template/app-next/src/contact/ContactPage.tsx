"use client";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "../client/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../client/components/ui/card";
import { Input } from "../client/components/ui/input";
import { Label } from "../client/components/ui/label";
import { Textarea } from "../client/components/ui/textarea";
import { toast } from "../client/hooks/use-toast";

const CONTACT_EMAIL = "hello@ainnect.site";

export function ContactPage() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    // UI-only: wire this up to your email/CRM backend to actually send.
    setTimeout(() => {
      setIsSending(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent 🎉",
        description: "Thanks for reaching out — our team will reply shortly.",
      });
    }, 600);
  };

  return (
    <div className="py-10 lg:mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-foreground mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Get in <span className="text-primary">touch</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg leading-8">
            Questions about ainnect, pricing, or how AI can grow your business?
            Send us a message and we'll get back to you.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact details */}
          <div className="space-y-6 lg:col-span-1">
            <ContactDetail
              icon={<Mail className="text-primary h-5 w-5" />}
              title="Email us"
              line={CONTACT_EMAIL}
              href={`mailto:${CONTACT_EMAIL}`}
            />
            <ContactDetail
              icon={<MessageSquare className="text-primary h-5 w-5" />}
              title="Sales & support"
              line="Mon–Fri, 9am–6pm"
            />
            <ContactDetail
              icon={<MapPin className="text-primary h-5 w-5" />}
              title="Where we are"
              line="Remote-first · Worldwide"
            />
          </div>

          {/* Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-foreground text-xl font-semibold">
                Send us a message
              </CardTitle>
              <CardDescription>
                We usually reply within one business day.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Jane Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input id="company" name="company" placeholder="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a bit about your business and what you're looking for…"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSending}
                  className="w-full sm:w-auto"
                >
                  {isSending ? "Sending…" : "Send message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ContactDetail({
  icon,
  title,
  line,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  line: string;
  href?: string;
}) {
  const body = (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex items-start gap-4 p-5">
        <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-foreground font-semibold">{title}</p>
          <p className="text-muted-foreground text-sm">{line}</p>
        </div>
      </CardContent>
    </Card>
  );

  return href ? (
    <a href={href} className="block">
      {body}
    </a>
  ) : (
    body
  );
}
