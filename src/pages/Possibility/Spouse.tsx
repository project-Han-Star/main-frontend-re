import { useState } from "react";
import PossibilityButton from "../../components/PossibilityButton";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const PossibilitySpouse = () => {
  const navigate = useNavigate();
  const [spouse, setSpouse] = useState<boolean | undefined>(undefined); // 배우자 여부
  const [spouseState, setSpouseState] = useState<string | undefined>(undefined); // 결혼 상태
  return (
    <>
      <div className="flex flex-col items-center w-full h-[75vh] bg-[#4571e5] relative">
        <div className="flex flex-col px-20 w-[586px] h-[741px] bg-white rounded-3xl shadow-[0px_4px_30px_rgba(0,0,0,0.25)] relative top-1/4">
          <h1 className="font-bold text-4xl mt-16">
            자녀를 같이 양육했던 <br />
            배우자가 계신가요?
          </h1>
          <p className="font-bold text-[#00000080] mt-2">
            이혼하셨더라도 살아계신다면, "있어요" 라고 대답해주세요.
          </p>
          <div className="flex gap-x-4 mt-4">
            <PossibilityButton
              onClick={() => setSpouse(true)}
              activated={spouse === true}
            >
              있어요
            </PossibilityButton>
            <PossibilityButton
              onClick={() => setSpouse(false)}
              activated={
                spouse ===
                false /* spouse가 undefined 일때 활성화를 방지하기 위함 */
              }
            >
              없어요
            </PossibilityButton>
          </div>

          {spouse && (
            <>
              <h2 className="text-2xl font-bold mt-12">
                현재 그 분과 결혼 중인 상태이신가요?
              </h2>
              <div className="flex gap-x-4 mt-4">
                <PossibilityButton
                  onClick={() => setSpouseState("married")}
                  activated={spouseState === "married"}
                >
                  결혼
                </PossibilityButton>
                <PossibilityButton
                  onClick={() => setSpouseState("brokenUp")}
                  activated={spouseState === "brokenUp"}
                >
                  이혼
                </PossibilityButton>
                <PossibilityButton
                  onClick={() => setSpouseState("na")}
                  activated={spouseState === "na"}
                >
                  미혼
                </PossibilityButton>
              </div>
            </>
          )}

          <Button
            onClick={() => navigate("../parent")}
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

export default PossibilitySpouse;
