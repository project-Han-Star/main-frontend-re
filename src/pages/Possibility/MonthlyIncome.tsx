import { useNavigate } from "react-router";
import Button from "../../components/Button";
import { ChangeEvent, useState } from "react";
import Input from "../../components/Input";

const PossibilityMonthlyIncome = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState<string>("");

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col items-center w-full h-[75vh] bg-[#4571e5] relative">
        <div className="flex flex-col px-20 w-[586px] h-[741px] bg-white rounded-3xl shadow-[0px_4px_30px_rgba(0,0,0,0.25)] relative top-1/4">
          <h1 className="mt-16 text-4xl font-bold">
            월 평균 수입은 얼마인가요?
          </h1>

          <div className="w-[414px] h-[61px] bg-[#ffc6c6] rounded-2xl flex items-center px-8 font-bold text-[#d64646] mt-10">
            실제로 통장에 들어오는 금액을 입력해 주세요.
          </div>

          <Input
            type="text"
            placeholder="금액을 입력해주세요."
            className="mt-24 w-[404px] self-center"
            onChange={HandleChange}
            value={value}
            required
          />

          <Button
            onClick={() => navigate("../values")}
            className="w-[404px] text-sm self-center rounded-xl absolute bottom-20"
            secondary
          >
            다음으로
          </Button>
          <p className="absolute self-center text-sm font-bold bottom-10">
            뒤로가기
          </p>
        </div>
      </div>

      <div className="w-full h-[25vh] bg-[#e7e9f5]"></div>
    </>
  );
};

export default PossibilityMonthlyIncome;
