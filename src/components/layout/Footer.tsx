import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-4 px-4 sm:px-6 md:px-8 border-t bg-card">
      <div className="container mx-auto flex justify-center items-center gap-4 flex-wrap">
        <p className="text-sm text-muted-foreground">© 2025 FenchsApps</p>
        <Separator orientation="vertical" className="h-4" />
        <p className="text-sm text-muted-foreground">
          Released under the{" "}
          <a
            href="https://github.com/FenchsApps/helpmewithlinuxdistro?tab=GPL-3.0-1-ov-file"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GPL-3.0 License
          </a>
          .
        </p>
        <Separator orientation="vertical" className="h-4" />
        <Link href="/credits" className="text-sm text-muted-foreground underline">
          Credits
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
