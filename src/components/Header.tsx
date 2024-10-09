import { useNavigate } from "react-router-dom";
import { memo } from "react";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center bg-primary h-[60px] z-[1000] absolute top-0 w-full">
      <div className="flex justify-between w-full mx-[300px]">
        <span
          className="text-[24px] text-white font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          HanByul
        </span>
        <div className="flex justify-between items-center gap-[40px]">
          <span
            className="font-bold text-white cursor-pointer"
            onClick={() => navigate("/login")}
          >
            로그인
          </span>
          <span className="font-bold text-white">도움말</span>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
