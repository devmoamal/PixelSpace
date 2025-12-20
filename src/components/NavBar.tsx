import { cn } from "@/lib/utils";
import { ImageDown } from "lucide-react";

type NavBarProps = {
  className?: string;
};

function NavBar({ className }: NavBarProps) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between bg-gray-400 p-2",
        className
      )}
    >
      <p className="font-bold">Pixel Space</p>
      <div className="flex gap-2 cursor-pointer hover:bg-gray-300 p-1 px-2">
        <div className="flex gap-2">
          <p>Export</p>
          <ImageDown />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
