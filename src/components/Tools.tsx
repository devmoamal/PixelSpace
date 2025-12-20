import { cn } from "@/lib/utils";

import PenIcon from "@/assets/images/cursor/pen.ico";
import EraserIcon from "@/assets/images/cursor/eraser.ico";
import Tool from "./Tool";
import type { Util } from "@/types";

type ToolsProps = {
  className?: string;
};

type Tools = {
  name: string;
  slug: Util;
  iconSrc: string;
};

const tools: Tools[] = [
  {
    name: "Pen",
    slug: "pen",
    iconSrc: PenIcon,
  },
  {
    name: "Eraser",
    slug: "eraser",
    iconSrc: EraserIcon,
  },
];

function Tools({ className }: ToolsProps) {
  return (
    <div className={cn("flex gap-4 w-full justify-center my-4", className)}>
      {tools.map((tool) => (
        <Tool name={tool.name} slug={tool.slug} iconSrc={tool.iconSrc} />
      ))}
    </div>
  );
}

export default Tools;
