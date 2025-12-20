import { cn } from "@/lib/utils";

type SliderProps = {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (e: number) => void;
  className?: string;
};

function Slider({
  value = 10,
  min = 10,
  max = 50,
  onChange,
  className,
}: SliderProps) {
  return (
    <input
      className={cn("", className)}
      type="range"
      onChange={(e) =>
        onChange ? onChange(Number(e.target.value)) : undefined
      }
      value={value}
      min={min}
      max={max}
    />
  );
}

export default Slider;
