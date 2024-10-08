import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import PossibilityButton from "../../components/Button/PossibilityButton";
import { ChangeEvent, useState } from "react";
import Input from "../../components/Input/Input";

const PossibilityChildren = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<boolean | undefined>(undefined); // 미성년자 자녀 여부 (답변이 하나일 경우, answer 로 설정.)
  const [value, setValue] = useState<string>("");

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col items-center w-full h-[75vh] bg-primary relative">
        <div className="flex flex-col px-20 w-[586px] h-[741px] bg-white rounded-3xl shadow-[0px_4px_30px_rgba(0,0,0,0.25)] relative top-1/4">
          <h1 className="mt-16 text-4xl font-bold">
            현재 미성년자 자녀를 양육하고 계신가요?
          </h1>
          <div className="flex mt-8 gap-x-4">
            <PossibilityButton
              onClick={() => setAnswer(true)}
              activated={answer === true}
            >
              네
            </PossibilityButton>
            <PossibilityButton
              onClick={() => setAnswer(false)}
              activated={
                answer ===
                false /* answer 가 undefined 일때 활성화를 방지하기 위함 */
              }
            >
              아니요
            </PossibilityButton>
          </div>

          {answer && (
            <>
              <h2 className="mt-16 text-2xl font-bold">
                몇 명을 양육하고 계신가요?
              </h2>
              <Input
                type="text"
                placeholder="자녀 수를 입력해주세요."
                className="mt-4 w-[404px] self-center"
                onChange={HandleChange}
                value={value}
                required
              />
            </>
          )}

          <Button
            onClick={() => navigate("../spouse")}
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

export default PossibilityChildren;
