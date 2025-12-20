import usePixelGrid from "@/hooks/usePixelGrid";
import useTools from "@/hooks/useTools";
import { cn } from "@/lib/utils";
import type { Pixel as _Pixel } from "@/types";
import { useState } from "react";

type PixelProps = _Pixel & {
  border?: boolean;
  className?: string;
};

function Pixel({ point, color, border = true, className }: PixelProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { paint } = usePixelGrid();
  const { tools } = useTools();
  const handlePaint = () => {
    paint(point, tools.currentColor);
  };

  return (
    <span
      className={cn(
        "block w-full h-full box-border cursor-paint",
        "border-gray-950",
        border && "border border-gray-400",
        className
      )}
      style={{ backgroundColor: isHovered ? tools.currentColor : color }}
      onMouseDown={handlePaint}
      onMouseEnter={() => {
        setIsHovered(true);
        if (tools.isPainting) {
          handlePaint();
        }
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePaint}
    ></span>
  );
}

export default Pixel;
