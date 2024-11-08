function ApplicantDetailPage() {
  return (
    <div className="bg-blue-600">
      <div className="flex justify-center">
        <div className="flex flex-col w-3/5 gap-5 p-10 bg-white rounded-2xl">
          <div className="flex items-center justify-between mb-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">이지민</h1>
              <p>내가 담당하고 있는 신청자에요</p>
            </div>
            <img
              src="images/profile.png"
              alt="profile"
              className="w-24 h-24 rounded-full"
            />
          </div>

          <div className="p-6 mt-4 bg-gray-200 border-2 border-gray-300 rounded-lg">
            <p>이 페이지는 유저 정보 섹션입니다.</p>
          </div>

          <div className="flex justify-between gap-5 mt-5">
            <button className="w-full py-3 text-lg text-white transition-all transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 active:scale-95">
              채팅하기
            </button>
            <button className="w-full py-3 text-lg text-white transition-all transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 active:scale-95">
              진척도 체크하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantDetailPage;
