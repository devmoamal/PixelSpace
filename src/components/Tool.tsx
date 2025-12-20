import useTools from "@/hooks/useTools";
import { cn } from "@/lib/utils";
import type { Util } from "@/types";

type ToolProps = {
  name: string;
  slug: Util;
  iconSrc: string;
  className?: string;
};

function Tool({ name, slug, iconSrc, className }: ToolProps) {
  const { tools, changeTool } = useTools();

  return (
    <div
      className={cn(
        "items-center flex px-2 gap-2 hover:bg-gray-300 cursor-pointer opacity-50",
        tools.currentTool === slug && "bg-gray-300 opacity-100",
        className
      )}
      onClick={() => changeTool(slug)}
    >
      <p>{name}</p>
      <img className="mt-1" src={iconSrc} />
    </div>
  );
}

export default Tool;
