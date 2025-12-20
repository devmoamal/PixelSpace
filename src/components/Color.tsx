import { cn } from "@/lib/utils";
import type { PixelColor } from "@/types";

type ColorProps = {
  selected?: boolean;
  color?: PixelColor;
  onClick?: () => void;
  className?: string;
};

function Color({
  color = "#000",
  selected = true,
  onClick,
  className,
}: ColorProps) {
  return (
    <div
      className={cn(
        `p-2.5 rounded-full ring-1 opacity-50`,
        selected && "opacity-100",
        className
      )}
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
}

export default Color;
