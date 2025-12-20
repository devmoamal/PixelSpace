import { useState } from "react";
import { cn } from "@/lib/utils";
import GridToPhoto from "./GridToPhoto";
import usePixelGrid from "@/hooks/usePixelGrid";

type NavBarProps = {
  className?: string;
};

function NavBar({ className }: NavBarProps) {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const { clear } = usePixelGrid();

  return (
    <>
      <nav
        className={cn(
          "flex items-center justify-between bg-gray-400 p-2",
          className
        )}
      >
        <p className="font-bold">Pixel Space</p>

        <div className="flex">
          <div
            className="flex gap-2 cursor-pointer hover:bg-gray-300 p-1 px-2"
            onClick={clear}
          >
            <p>Clear</p>
          </div>

          <div
            className="flex gap-2 cursor-pointer hover:bg-gray-300 p-1 px-2"
            onClick={() => setIsExportModalOpen(true)}
          >
            <p>Export</p>
          </div>
        </div>
      </nav>

      <GridToPhoto
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </>
  );
}

export default NavBar;
