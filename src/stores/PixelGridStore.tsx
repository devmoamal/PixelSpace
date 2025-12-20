import type { PixelGrid, PixelColor, Pixel, Size, Point } from "@/types";
import { create } from "zustand";

type PixelGridStoreState = {
  grid: PixelGrid;
  paint: (point: Point, color: PixelColor) => void;
  resize: (size: Size) => void;
};

const createPixel = (point: Point): Pixel => ({
  point: point,
  color: undefined,
});

const paintPixel = (
  grid: PixelGrid,
  point: Point,
  color: PixelColor
): PixelGrid => {
  return grid.map((row, y) =>
    row.map((pixel, x) => {
      if (x === point.x && y === point.y) {
        return { ...pixel, point, color };
      }
      return pixel;
    })
  );
};

const resize = (grid: PixelGrid, size: Size) => {
  const { width, height } = size;

  const newGrid: PixelGrid = [];

  for (let y = 0; y < height; y++) {
    const row: Pixel[] = [];
    for (let x = 0; x < width; x++) {
      const existingPixel = grid[y]?.[x];
      const point = { x, y };

      if (existingPixel) {
        row.push({ ...existingPixel, point });
        continue;
      }

      row.push(createPixel(point));
    }
    newGrid.push(row);
  }

  return newGrid;
};

const usePixelGridStore = create<PixelGridStoreState>((set) => ({
  grid: [],
  paint: (point, color) =>
    set((state) => ({
      grid: paintPixel(state.grid, point, color),
    })),
  resize: (size) => set((state) => ({ grid: resize(state.grid, size) })),
}));

export default usePixelGridStore;
