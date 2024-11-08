function SuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600">
      <div className="flex flex-col items-center text-center text-white">
        <h1 className="text-3xl font-bold">신청이 완료되었습니다</h1>
        <p className="mt-2 text-2xl">
          변호사가 신청을 승인할때까지 기다려주세요
        </p>
        <img
          src="images/success.png"
          alt="success"
          className="w-24 h-24 mt-6"
        />
      </div>
    </div>
  );
}

export default SuccessPage;
