import { memo } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const PossibilityStart = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center w-full h-[75vh] bg-primary relative">
        <div className="flex flex-col w-[586px] h-[741px] bg-white rounded-3xl shadow-[0px_4px_30px_rgba(0,0,0,0.25)] relative top-1/4">
          <h1 className="mt-16 text-4xl font-bold text-center">
            AI가 나의 회생 가능성을 <br />
            예측해 줄 거에요!
          </h1>
          <div className="w-[310px] h-[345px] mt-8 bg-slate-200 self-center grid place-content-center">
            사진이 들어갈 자리
          </div>
          <Button
            onClick={() => navigate("../children")}
            className="w-[404px] text-sm self-center rounded-xl absolute bottom-20"
            secondary
          >
            시작하기
          </Button>
          <p className="absolute self-center text-sm font-bold bottom-10">
            뒤로가기
          </p>
        </div>
      </div>

      <div className="w-full h-[25vh] bg-secondary"></div>
    </>
  );
};

export default memo(PossibilityStart);
