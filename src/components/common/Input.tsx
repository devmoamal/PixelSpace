import { cn } from "@/lib/utils";
import type React from "react";

type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  onChange?: () => void;
  className?: string;
};

function Input({ type, onChange, className }: InputProps) {
  return (
    <input className={cn("", className)} type={type} onChange={onChange} />
  );
}

export default Input;
