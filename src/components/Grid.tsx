import { cn } from "@/lib/utils";
import Pixel from "./Pixel";
import type { PixelGrid } from "@/types";
import useTools from "@/hooks/useTools";

type GridProps = {
  grid: PixelGrid;
  photo?: boolean;
  className?: string;
};

function Grid({ grid, className }: GridProps) {
  const { changePaintingStatus } = useTools();
  return (
    <div
      className={cn("", className)}
      onMouseDown={() => changePaintingStatus(true)}
      onMouseUp={() => changePaintingStatus(false)}
    >
      {grid.map((row, y) => (
        <div className="flex" key={y}>
          {row.map((pixel) => (
            <Pixel
              key={`${pixel.point.x}-${pixel.point.y}`}
              point={pixel.point}
              color={pixel.color}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
