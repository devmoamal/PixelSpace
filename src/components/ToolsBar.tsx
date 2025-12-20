import usePixelGrid from "@/hooks/usePixelGrid";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { HeightSlider, WidthSlider } from "./Tools/SizeSlider";
import ColorPlate from "./Tools/ColorPlate";
import Tools from "./Tools";

type ToolsBarProps = {
  className?: string;
};

function ToolsBar({ className }: ToolsBarProps) {
  const { resize } = usePixelGrid();

  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    resize({ width, height });
  }, [width, height, resize]);

  return (
    <div className={cn("bg-gray-400 w-full", className)}>
      <Tools />

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
