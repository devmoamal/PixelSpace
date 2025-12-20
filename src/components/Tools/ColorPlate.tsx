import { cn } from "@/lib/utils";
import type { PixelColor } from "@/types";
import Color from "../Color";
import useTools from "@/hooks/useTools";

type ColorPlateProps = {
  className?: string;
};

const staticColors: PixelColor[] = [
  "#000000",
  "#ffffff",
  "#808080",
  "#008000",
  "#800080",
  "#FF0000",
  "#1656AD",
  "#401E12",
  "#F0C807",
  "#EE0943",
  "#3C20A3",
  "#00B496",
];

function ColorPlate({ className }: ColorPlateProps) {
  const { tools, changeColor } = useTools();

  return (
    <div className={cn("flex gap-1 my-1", className)}>
      {staticColors.map((color) => (
        <Color
          color={color}
          selected={tools.currentColor === color}
          onClick={() => changeColor(color)}
        />
      ))}
    </div>
  );
}

export default ColorPlate;
