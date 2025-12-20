type PixelColor = `#${string}` | undefined;

type Point = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type Pixel = {
  point: Point;
  color: PixelColor;
};

type PixelGrid = Pixel[][];

export type { Point, Size, PixelColor, Pixel, PixelGrid };
