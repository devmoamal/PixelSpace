import type { PixelGrid as _PixelGrid } from "@/types";
import Pixel from "./Pixel";

type GridToPhotoProps = {
  grid: _PixelGrid;
  className?: string;
};

function GridToPhoto({ grid, className }: GridToPhotoProps) {
  return (
    <div>
      {grid.map((row, y) => (
        <div className="flex" key={y}>
          {row.map((pixel) => (
            <Pixel
              key={`${pixel.point.x}-${pixel.point.y}`}
              point={pixel.point}
              color={pixel.color}
              border={true}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GridToPhoto;
