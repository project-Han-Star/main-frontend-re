import RegisterBox from "../components/RegisterBox";

const RegisterPage = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#4571e5] w-full h-[75vh] shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
        <h1 className="text-[40px] text-white font-bold mt-[90px]">회원가입</h1>
        <p className="text-xl text-white my-[10px]">
          한별 서비스의 모든것을 누려보세요
        </p>
        <RegisterBox email="" password="" />
      </div>
      <div className="w-full h-[25vh] bg-[#e7e9f5]"></div>
    </>
  );
};

export default RegisterPage;
