import usePixelGrid from "@/hooks/usePixelGrid";
import useTools from "@/hooks/useTools";
import { cn } from "@/lib/utils";
import type { Pixel as _Pixel } from "@/types";
import { useState } from "react";

type PixelProps = _Pixel & {
  className?: string;
};

function Pixel({ point, color, className }: PixelProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { paint } = usePixelGrid();
  const { tools } = useTools();

  const handlePaint = () => {
    const _color = tools.currentTool == "pen" ? tools.currentColor : undefined;
    paint(point, _color);
  };

  return (
    <span
      className={cn(
        "block w-full h-full box-border",
        "border-gray-950",
        tools.currentTool == "pen" && "cursor-pen",
        tools.currentTool == "eraser" && "cursor-eraser",
        color === undefined &&
          ((point.x + point.y) % 2 == 0 ? "bg-gray-300" : "bg-gray-200"),
        className
      )}
      style={{
        backgroundColor: isHovered
          ? tools.currentTool == "pen"
            ? tools.currentColor
            : undefined
          : color,
      }}
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
