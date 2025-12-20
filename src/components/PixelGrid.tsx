import { cn } from "@/lib/utils";
import type { PixelGrid as _PixelGrid } from "@/types";
import Grid from "./Grid";

type PixelGridProps = {
  grid: _PixelGrid;
  className?: string;
};

function PixelGrid({ grid, className }: PixelGridProps) {
  return <Grid className={cn("", className)} grid={grid} />;
}

export default PixelGrid;
