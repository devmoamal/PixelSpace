import { cn } from "@/lib/utils";
import { Undo, Redo, ImageDown } from "lucide-react";

type NavBarProps = {
  className?: string;
};

function NavBar({ className }: NavBarProps) {
  return (
    <nav className={cn("flex justify-between bg-gray-400 p-2", className)}>
      <p className="font-bold">Pixel Space</p>

      <div className="flex gap-2">
        <Undo />
        <Redo />
        <ImageDown />
      </div>
    </nav>
  );
}

export default NavBar;
