import usePixelGridStore from "@/stores/PixelGridStore";

function usePixelGrid() {
  const grid = usePixelGridStore((state) => state.grid);
  const paint = usePixelGridStore((state) => state.paint);
  const resize = usePixelGridStore((state) => state.resize);

  return { grid, paint, resize };
}

export default usePixelGrid;
