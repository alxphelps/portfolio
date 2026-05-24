import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-white/[0.02]">
      <div className="page-shell py-[clamp(2.5rem,6vh,4.5rem)]">
       
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
