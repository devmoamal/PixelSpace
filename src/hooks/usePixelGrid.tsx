import usePixelGridStore from "@/stores/PixelGridStore";

function usePixelGrid() {
  const grid = usePixelGridStore((state) => state.grid);
  const paint = usePixelGridStore((state) => state.paint);
  const resize = usePixelGridStore((state) => state.resize);
  const clear = usePixelGridStore((state) => state.clear);

  return { grid, paint, resize, clear };
}

export default usePixelGrid;
