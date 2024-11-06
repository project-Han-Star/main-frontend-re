import { useState } from "react";
import Button from "../components/Button/Button";

const ChooseRolePage = () => {
  const [role, setRole] = useState<string | null>(null);
  return (
    <>
      <div className="w-full h-[75vh] bg-primary">
        <div className="w-[1000px] h-[650px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl flex flex-col items-center">
          <h1 className="mt-12 text-4xl font-bold">회원 유형</h1>
          <div className="flex mt-12 gap-x-16">
            <div className="flex flex-col items-center">
              <div className="bg-secondary w-[350px] h-[350px] mb-6"></div>
              <Button className="w-64" secondary>
                저는 개인 회생을 준비하고 있어요
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-secondary w-[350px] h-[350px] mb-6"></div>
              <Button className="w-64" secondary>
                저는 변호사에요
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[25vh] bg-secondary"></div>
    </>
  );
};

export default ChooseRolePage;
