import { cn } from "@/lib/utils";
import type React from "react";

type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  id?: string;
  onChange?: (value: string) => void;
  className?: string;
};

function Input({
  type,
  value,
  placeholder,
  id,
  onChange,
  className,
}: InputProps) {
  return (
    <input
      id={id}
      className={cn(
        "border-2 px-2 py-1 rounded-none outline-none focus:outline-none ",
        className
      )}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}

export default Input;
