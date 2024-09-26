import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  activated?: boolean;
}

const PossibilityButton: FC<Props> = ({
  children,
  activated,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        `${activated ? "border-[#4571e5]" : "border-[#00000080]"}`,
        "w-[104px] h-[68px] border-2 rounded-xl transition font-bold"
      )}
    >
      {children}
    </button>
  );
};

export default PossibilityButton;
