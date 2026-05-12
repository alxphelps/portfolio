import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 pb-24 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Card className="overflow-hidden border-primary/25 bg-gradient-to-br from-primary/15 via-card/80 to-accent/10">
          <CardHeader className="gap-4 sm:flex sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xl">
              <CardTitle className="text-2xl sm:text-3xl">Let&apos;s talk about your AWS and platform goals.</CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Share a short note: what you are running today, what hurts, and what a good next 90 days looks like. I
                typically respond within one business day.
              </CardDescription>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:items-end">
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/25" asChild>
                <Link href={site.emailHref}>
                  <Mail className="h-4 w-4" />
                  {site.email}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <Link href={site.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              {site.location}
            </span>
            <span className="hidden sm:inline" aria-hidden>
              ·
            </span>
            <Link href={site.linkedin} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
              LinkedIn profile
            </Link>
            <span className="hidden sm:inline" aria-hidden>
              ·
            </span>
            <Link href={site.github} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
