import { useCallback } from "react";
import type { PixelGrid } from "@/types";
import { DEFAULT_FILE_NAME } from "@/constants";

export const useExport = () => {
  const exportToImage = useCallback(
    (grid: PixelGrid, filename = DEFAULT_FILE_NAME + ".png", scale = 1) => {
      if (!grid.length || !grid[0].length) return;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const width = grid[0].length;
      const height = grid.length;

      // Set canvas size with scale
      canvas.width = width * scale;
      canvas.height = height * scale;

      // Draw each pixel scaled
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const pixel = grid[y][x];
          if (pixel.color) {
            ctx.fillStyle = pixel.color;
            ctx.fillRect(x * scale, y * scale, scale, scale);
          }
        }
      }

      // Create download link
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, "image/png");
    },
    []
  );

  return { exportToImage };
};
