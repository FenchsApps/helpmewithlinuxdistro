import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-4 px-4 sm:px-6 md:px-8 border-t bg-card">
      <div className="container mx-auto flex justify-center items-center gap-4">
        <p className="text-sm text-muted-foreground">© 2025 FenchsApps</p>
        <Separator orientation="vertical" className="h-4" />
        <p className="text-sm text-muted-foreground">
          Released under the{" "}
          <a
            href="/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GPL-3.0 License
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
