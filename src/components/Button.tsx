import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  secondary?: boolean;
}

const Button: FC<Props> = ({
  children,
  className,
  type = "button",
  secondary,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={twMerge(
        `w-[175px] h-[50px] rounded-[25px] border-2 font-bold ${
          !secondary
            ? "bg-white text-[#4571e5] border-[#4571e5]"
            : "bg-[#4571e5] text-white border-white"
        }`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
