import Link from "next/link";
import { Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 md:px-8 border-b bg-card">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-headline">
          helpmewithlinuxdistro
        </Link>
        <div className="flex items-center gap-2">
            <Link href="/settings">
              <Button variant="ghost" size="icon">
                <Cog className="h-6 w-6" />
                <span className="sr-only">Settings</span>
              </Button>
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
