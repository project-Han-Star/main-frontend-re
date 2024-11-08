import { useNavigate, useParams } from "react-router";

function LawyerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  return (
    <div className="grid w-full h-screen bg-primary place-content-center">
      <div className="flex justify-center">
        <div className="flex flex-col w-3/5 gap-5 p-10 bg-white rounded-2xl">
          <div className="flex items-center justify-between mb-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">이지민</h1>
              <p className="font-bold">파산 전문 변호사</p>
              <p>지금은 7명을 도와주고 있어요</p>
            </div>
            <img
              src="images/profile.png"
              alt="profile"
              className="w-24 h-24 rounded-full"
            />
          </div>

          <div className="p-6 mt-4 bg-gray-200 border-2 border-gray-300 rounded-lg">
            <p>
              저희는 개인 회생 및 파산 전문 변호사로서 채무 문제로 인해 어려움을
              겪고 계신 분들에게 법적으로 인정받는 해결책을 제공하고 있습니다.
            </p>
          </div>

          <div className="flex justify-between gap-5 mt-5">
            <button
              onClick={() => navigate(-1)}
              className="w-full py-3 text-lg text-white transition-all transform rounded-full shadow-lg bg-primary hover:bg-blue-500 hover:scale-105 active:scale-95"
            >
              뒤로가기
            </button>
            <button
              onClick={() => navigate("../success")}
              className="w-full py-3 text-lg text-white transition-all transform rounded-full shadow-lg bg-primary hover:bg-blue-500 hover:scale-105 active:scale-95"
            >
              신청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LawyerDetailPage;
