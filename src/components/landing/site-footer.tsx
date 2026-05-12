import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/10">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">{site.name}</p>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              {site.title} · {site.businessName}. {site.location}. AWS, Kubernetes, Terraform, and production
              infrastructure consulting.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </Link>
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </Link>
          </div>
        </div>
        <Separator className="my-8 bg-border" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind CSS, and shadcn/ui.
        </p>
      </div>
    </footer>
  );
}
