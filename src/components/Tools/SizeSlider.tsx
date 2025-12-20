import { cn } from "@/lib/utils";
import Slider from "../common/Slider";

type Options = {
  name?: string;
  className?: string;
};

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
};

type SizeSliderProps = Partial<SliderProps> & Options;

function SizeSloider({ name, value, onChange, className }: SizeSliderProps) {
  return (
    <div className={cn("", className)}>
      <p>{name}</p>
      <div className="flex gap-x-2">
        <Slider value={value} onChange={onChange} />
        <p>{value}</p>
      </div>
    </div>
  );
}

function WidthSlider({ value, onChange }: SliderProps) {
  return <SizeSloider name={"Width"} value={value} onChange={onChange} />;
}

function HeightSlider({ value, onChange }: SliderProps) {
  return <SizeSloider name="Height" value={value} onChange={onChange} />;
}

export { WidthSlider, HeightSlider };
