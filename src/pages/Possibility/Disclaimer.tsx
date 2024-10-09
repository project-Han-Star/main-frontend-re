import { useState } from "react";
import PossibilityButton from "../../components/PossibilityButton";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const PossibilityDisclaimer = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<boolean | undefined>(undefined); // 결혼 상태
  return (
    <>
      <div className="flex flex-col items-center w-full h-[75vh] bg-[#4571e5] relative">
        <div className="flex flex-col px-20 w-[586px] h-[741px] bg-white rounded-3xl shadow-[0px_4px_30px_rgba(0,0,0,0.25)] relative top-1/4">
          <h1 className="font-bold text-[32px] mt-16">
            최근 5년 이내 법원으로부터 <br />
            면책결정을 받은 적이 있으신가요?
          </h1>

          <div className="flex gap-x-4 mt-6">
            <PossibilityButton
              onClick={() => setAnswer(true)}
              activated={answer === true}
            >
              네
            </PossibilityButton>
            <PossibilityButton
              onClick={() => setAnswer(false)}
              activated={answer === false}
            >
              아니요
            </PossibilityButton>
          </div>

          <Button
            onClick={() => navigate("../monthlyrent")}
            className="w-[404px] text-sm self-center rounded-xl absolute bottom-20"
            secondary
          >
            다음으로
          </Button>
          <p className="self-center text-sm font-bold absolute bottom-10">
            뒤로가기
          </p>
        </div>
      </div>

      <div className="w-full h-[25vh] bg-[#e7e9f5]"></div>
    </>
  );
};

export default PossibilityDisclaimer;
