import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<Props> = ({
  className,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={twMerge(
        `border border-gray-300 rounded-lg p-3 text-sm font-bold w-full mx-auto`,
        className
      )}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
