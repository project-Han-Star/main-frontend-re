import { useEffect, useState } from "react";
import usePossibilityStore from "../../lib/store/usePossibilityStore";
import api from "../../lib/api/axiosConfig";

interface JsonType {
  status: string;
  data: {
    score: number;
    explaination: string;
  };
}

const PossibilityResult = () => {
  const {
    AssetValue,
    MaritalStatus,
    MonthlyIncome,
    NumberOfDependents,
    TotalDebt,
  } = usePossibilityStore();
  const [result, setResult] = useState<JsonType | null>(null);
  useEffect(() => {
    api
      .post("url", {
        NumberOfDependents,
        MaritalStatus,
        MonthlyIncome,
        AssetValue,
        TotalDebt,
      })
      .then((r) => setResult(r.data));
  }, []);
  return (
    <>
      <div className="w-full h-[75vh] bg-primary flex flex-col items-center justify-center">
        {!result ? (
          <div>
            <h1 className="text-6xl font-bold text-white">
              회생 가능성을 계산하고 있습니다
            </h1>
            <h3 className="mt-8 text-4xl font-bold text-white">
              잠시만 기다려 주세요...
            </h3>
          </div>
        ) : (
          <h1>결과가 나왔습니다</h1>
        )}
      </div>
      <div className="w-full h-[25vh] bg-secondary"></div>
    </>
  );
};

export default PossibilityResult;
