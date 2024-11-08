import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ChangeEvent, FC } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";

interface Props {
  email: string;
  HandleEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  HandlePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LoginBox: FC<Props> = ({
  email,
  password,
  HandleEmail,
  HandlePassword,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[600px] h-[650px] bg-white rounded-lg absolute top-[200px] shadow-lg">
      <div className="flex flex-col w-[400px]">
        <label className="mb-1 text-sm font-bold text-fontgrey">이메일</label>
        <Input
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={HandleEmail}
        />
      </div>
      <div className="flex flex-col w-[400px]">
        <label className="mb-1 text-sm font-bold text-fontgrey">비밀번호</label>
        <Input
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={HandlePassword}
        />
      </div>
      <p className="text-sm font-bold text-fontgrey">
        아이디를 잊어버리셨나요?
      </p>
      <Button className=" w-[400px] rounded-lg" secondary>
        로그인
      </Button>
      <Button
        className="w-[400px] rounded-lg"
        onClick={() => navigate("/chooserole")}
      >
        회원가입
      </Button>
      <div className="flex items-center gap-3">
        <div className="w-[180px] h-[1px] bg-[fontgrey]"></div>
        <span>OR</span>
        <div className="w-[180px] h-[1px] bg-fontgrey"></div>
      </div>
      <button className="flex items-center justify-center w-[400px] h-[50px] border border-black rounded-lg">
        <FcGoogle size={25} />
        <span className="ml-3 text-sm font-bold">구글로 로그인 하기</span>
      </button>
    </div>
  );
};

export default LoginBox;
