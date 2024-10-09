import LoginBox from "../components/LoginBox";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-primary w-full h-[75vh] shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
        <h1 className="text-[40px] text-white font-bold mt-[90px]">로그인</h1>
        <p className="text-xl text-white my-[10px]">
          한별 서비스의 모든것을 누려보세요
        </p>
        <LoginBox email="" password="" />
      </div>
      <div className="w-full h-[25vh] bg-primary"></div>
    </>
  );
};

export default LoginPage;
