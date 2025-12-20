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

  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;

  // Calculate available screen space accounting for navbar (~50px) and toolbar (~120px)
  // Plus 4px margins on each side
  const availableWidth = window.innerWidth - 8; // 4px left + 4px right margin
  const availableHeight = window.innerHeight - 170 - 8; // navbar + toolbar + margins

  // Calculate pixel size to fill the available space
  const pixelSizeWidth = availableWidth / cols;
  const pixelSizeHeight = availableHeight / rows;
  const pixelSize = Math.min(pixelSizeWidth, pixelSizeHeight);

  // Ensure minimum pixel size
  const finalPixelSize = Math.max(pixelSize, 1); // Minimum 1px to prevent invisibility

  const finalWidth = cols * finalPixelSize;
  const finalHeight = rows * finalPixelSize;

  const gridStyle = {
    width: `${finalWidth}px`,
    height: `${finalHeight}px`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  } as React.CSSProperties;

  // flatten pixels so grid children flow correctly into the CSS grid
  const flatPixels = grid.flat();

  return (
    <div className={cn("flex w-full h-full", className)}>
      <div
        className="grid bg-transparent place-items-center"
        style={gridStyle}
        onMouseDown={() => changePaintingStatus(true)}
        onMouseUp={() => changePaintingStatus(false)}
      >
        {flatPixels.map((pixel) => (
          <Pixel
            key={`${pixel.point.x}-${pixel.point.y}`}
            point={pixel.point}
            color={pixel.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
