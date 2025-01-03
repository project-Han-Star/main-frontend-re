import { useState, ChangeEvent } from "react";
import RegisterBox from "../components/RegisterBox";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const HandleEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const HandlePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const HandleConfirm = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirm(e.target.value);
  return (
    <>
      <div className="flex flex-col items-center bg-primary w-full h-[75vh] shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
        <h1 className="text-[40px] text-white font-bold mt-[90px]">회원가입</h1>
        <p className="text-xl text-white my-[10px]">
          한별 서비스의 모든것을 누려보세요
        </p>
        <RegisterBox
          email={email}
          password={password}
          confirm={confirm}
          HandleEmail={HandleEmail}
          HandlePassword={HandlePassword}
          HandleConfirm={HandleConfirm}
        />
      </div>
      <div className="w-full h-[25vh] bg-secondary"></div>
    </>
  );
};

export default RegisterPage;
