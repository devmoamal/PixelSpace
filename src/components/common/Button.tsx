import { cn } from "@/lib/utils";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button className={cn("", className)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
