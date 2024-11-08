import { ChangeEvent, FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import Input from "./Input/Input";

interface Props {
  email: string;
  HandleEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  HandlePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RegisterBox: FC<Props> = ({
  email,
  HandleEmail,
  password,
  HandlePassword,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] w-[600px] h-[650px] bg-white rounded-[10px] absolute top-[200px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col w-[400px]">
        <label className="text-[14px] text-fontgrey font-bold mb-1">
          이메일
        </label>
        <Input
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={HandleEmail}
        />
      </div>
      <div className="flex flex-col w-[400px]">
        <label className="text-[14px] text-fontgrey font-bold mb-1">
          비밀번호
        </label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={HandlePassword}
        />
      </div>
      <div className="flex flex-col w-[400px]">
        <label className="text-[14px] text-fontgrey font-bold mb-[5px]">
          비밀번호 확인
        </label>
        <Input
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          value={password}
        />
      </div>
      <Button className="w-[400px] rounded-lg">회원가입</Button>
      <div className="flex items-center gap-[10px]">
        <div className="w-[180px] h-[1px] bg-fontgrey"></div>
        <p className="text-fontgrey">OR</p>
        <div className="w-[180px] h-[1px] bg-fontgrey"></div>
      </div>
      <Button
        className="w-[400px] rounded-lg"
        onClick={() => navigate("/login")}
        secondary
      >
        로그인 하러 가기
      </Button>
    </div>
  );
};

export default RegisterBox;
