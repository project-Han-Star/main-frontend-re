const PossibilityWaiting = () => {
  return (
    <>
      <div className="w-full h-[75vh] bg-primary flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-white">
          회생 가능성을 계산하고 있습니다
        </h1>
        <h3 className="text-4xl font-bold text-white">
          잠시만 기다려 주세요...
        </h3>
      </div>
      <div className="w-full h-[25vh] bg-secondary"></div>
    </>
  );
};

export default PossibilityWaiting;
