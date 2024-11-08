import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import nestClient from "../../lib/api/nestClient";

function ApplicantDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [applicant, setApplicant] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await nestClient.get(`/user/${id}`);
      setApplicant(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="grid w-full h-screen bg-primary place-content-center">
      <div className="flex flex-col w-[900px] gap-5 p-10 bg-white rounded-2xl">
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{applicant.id}</h1>
          </div>
          <img
            src="images/profile.png"
            alt="profile"
            className="w-24 h-24 rounded-full"
          />
        </div>

        <div className="p-6 mt-4 bg-gray-200 border-2 border-gray-300 rounded-lg">
          <p>{applicant.description}</p>
        </div>

        <div className="flex justify-between gap-5 mt-5">
          <button
            onClick={() => navigate("../chat")}
            className="w-full py-3 text-lg text-white transition-all transform rounded-full shadow-lg bg-primary hover:bg-blue-500 hover:scale-105 active:scale-95"
          >
            채팅하기
          </button>
          <button
            onClick={() => navigate("../recoverystatus")}
            className="w-full py-3 text-lg text-white transition-all transform rounded-full shadow-lg bg-primary hover:bg-blue-500 hover:scale-105 active:scale-95"
          >
            진척도 체크하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicantDetailPage;
