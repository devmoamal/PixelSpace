import usePixelGrid from "@/hooks/usePixelGrid";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { HeightSlider, WidthSlider } from "./Tools/SizeSlider";
import ColorPlate from "./Tools/ColorPlate";

type ToolsBarProps = {
  className?: string;
};

function ToolsBar({ className }: ToolsBarProps) {
  const { resize } = usePixelGrid();

  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    resize({ width, height });
  }, [width, height]);

  return (
    <div
      className={cn(
        "bg-gray-400 absolute bottom-0 w-full rounded-t-2xl",
        className
      )}
    >
      <div className="flex items-center space-x-3.5 w-full justify-center py-2">
        <ColorPlate />
      </div>
      <div className="flex justify-between px-4">
        <WidthSlider value={width} onChange={setWidth} />
        <HeightSlider value={height} onChange={setHeight} />
      </div>
    </div>
  );
}

export default ToolsBar;
