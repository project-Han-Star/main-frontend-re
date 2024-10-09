import { ChangeEvent, useState } from "react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router";

const WritePage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="grid w-full h-screen bg-primary place-content-center">
      <form>
        <div className="flex flex-col items-center w-full px-16 py-8 h-fit bg-secondary rounded-3xl">
          <h1 className="text-3xl font-bold">
            변호사님들과 매칭 할 수 있게 간단한 정보를 입력해주세요!
          </h1>
          <textarea
            className="w-[700px] h-[400px] resize-none focus:outline-none mt-8 p-4 text-xl"
            value={value}
            onChange={onChange}
          />
          <div className="flex self-end mt-8 gap-x-8">
            <Button
              onClick={() => navigate("/board")}
              className="border-none"
              secondary
            >
              뒤로가기
            </Button>
            <Button
              onClick={() => {
                // Todo: 변호사 매칭 api에 요청
              }}
            >
              사연 보내기
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WritePage;
