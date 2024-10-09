import { useNavigate } from "react-router";
import Button from "../../components/Button";
import { ChangeEvent, useState } from "react";
import Input from "../../components/Input";

const PossibilityValues = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState<string>("");

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col items-center w-full h-[75vh] bg-primary relative">
        <div className="flex flex-col px-20 w-[586px] h-[741px] bg-white rounded-3xl shadow-[0px_4px_30px_rgba(0,0,0,0.25)] relative top-1/4">
          <h1 className="mt-16 text-[32px] font-bold">
            소유하고 계신 재산의 <br /> 현재 시점 가치를 알려주세요.
          </h1>

          <div className="w-[414px] bg-[#ffc6c6] rounded-2xl flex items-center px-8 py-3 font-bold text-[#d64646] text-wrap mt-3">
            소유하고 계신 부동산에 담보가 설정되어 있거나 보증금처럼 돌려줘야
            하는 돈이 있는 경우 그 금액만큼은 가치에서 빼고 계산해 주세요.
          </div>

          <Input
            type="text"
            placeholder="금액을 입력해주세요."
            className="mt-8 w-[404px] self-center"
            onChange={HandleChange}
            value={value}
            required
          />

          <Button
            onClick={() => navigate("../")}
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

      <div className="w-full h-[25vh] bg-secondary"></div>
    </>
  );
};

export default PossibilityValues;
