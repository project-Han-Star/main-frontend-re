import { useState } from "react";
import Progress1 from "../assets/progress1.png";
import Progress2 from "../assets/progress2.png";
import Progress3 from "../assets/progress3.png";
import Progress4 from "../assets/progress4.png";
import { useNavigate, useParams } from "react-router";
import nestClient from "../lib/api/nestClient";

type Status =
  | ""
  | "not accepted now"
  | "document submission"
  | "correction response"
  | "creditor meeting"
  | "repayment plan approval";

function RecoveryStatus() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("");

  const HandleChange = (value: Status) => {
    setStatus(value);
  };

  const HandleSave = async () => {
    const res = await nestClient.patch(`/match/edit_progress/${id}`, {
      status,
    });
    if (res.data) {
      navigate(-1);
    }
  };

  return (
    <div className="grid w-full h-screen bg-primary place-content-center">
      <div className="w-[1200px] p-10 text-center bg-white  rounded-2xl">
        <h1 className="text-2xl font-bold">나의 회생 상황</h1>

        <div className="flex flex-col mt-6">
          <ul className="flex justify-around mt-4 text-lg font-bold">
            <li>필요 서류 제출</li>
            <li>보정권고 대응</li>
            <li>채권자 집회</li>
            <li>변제계획 인가</li>
          </ul>

          <div className="mt-6">
            <div className="w-full h-1 bg-blue-600"></div>
            <ul className="flex justify-around mt-2">
              <li className="w-3 h-3 rounded-full bg-blue-600 -mt-1.5"></li>
              <li className="w-3 h-3 rounded-full bg-blue-600 -mt-1.5"></li>
              <li className="w-3 h-3 rounded-full bg-blue-600 -mt-1.5"></li>
              <li className="w-3 h-3 rounded-full bg-blue-600 -mt-1.5"></li>
            </ul>
          </div>

          <div className="flex justify-around mt-6">
            <div className="text-lg font-bold text-center">
              <img
                src={Progress1}
                alt=""
                className="mt-4 w-36 h-36"
                onClick={() => HandleChange("document submission")}
              />
            </div>
            <div className="text-lg font-bold text-center">
              <img
                src={Progress2}
                alt=""
                className="mt-4 w-36 h-36"
                onClick={() => HandleChange("correction response")}
              />
            </div>
            <div className="text-lg font-bold text-center">
              <img
                src={Progress3}
                alt=""
                className="mt-4 w-36 h-36"
                onClick={() => HandleChange("creditor meeting")}
              />
            </div>
            <div className="text-lg font-bold text-center">
              <img
                src={Progress4}
                alt=""
                className="mt-4 w-36 h-36"
                onClick={() => HandleChange("repayment plan approval")}
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="px-8 py-3 mt-6 text-lg text-white transition-all transform rounded-full shadow-lg bg-primary hover:bg-blue-500 hover:scale-105 active:scale-95"
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}

export default RecoveryStatus;
