import { useState } from "react";
import PossibilityButton from "../../components/PossibilityButton";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const PossibilityParents = () => {
  const navigate = useNavigate();
  const [parent, setParent] = useState<number | undefined>(undefined); // 결혼 상태
  return (
    <>
      <div className="flex flex-col items-center w-full h-[75vh] bg-[#4571e5] relative">
        <div className="flex flex-col px-20 w-[586px] h-[741px] bg-white rounded-3xl shadow-[0px_4px_30px_rgba(0,0,0,0.25)] relative top-1/4">
          <h1 className="font-bold text-4xl mt-16">
            아래 조건에 모두 부합하는 <br />
            부모님이 몇 분 계신가요?
          </h1>

          <div className="w-full h-fit p-8 bg-[#e7e9f5] rounded-2xl mt-8">
            <ul className="text-xl font-bold">
              <li>- 친부모</li>
              <li>- 만 65세</li>
              <li>- 소득이 없거나 기초수급 혹은 장애인</li>
              <li>- 실제로 경제적 부양 중</li>
            </ul>
          </div>

          <div className="flex gap-x-4 mt-6">
            <PossibilityButton
              onClick={() => setParent(0)}
              activated={parent === 0}
            >
              0명
            </PossibilityButton>
            <PossibilityButton
              onClick={() => setParent(1)}
              activated={parent === 1}
            >
              1명
            </PossibilityButton>
            <PossibilityButton
              onClick={() => setParent(2)}
              activated={parent === 2}
            >
              2명
            </PossibilityButton>
          </div>

          <Button
            onClick={() => navigate("../")}
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

export default PossibilityParents;
