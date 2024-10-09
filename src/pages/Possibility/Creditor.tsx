import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import { ChangeEvent, useState } from "react";
import useCreditorModal from "../../lib/store/useCreditorModal";
import Input from "../../components/Input/Input";

const PossibilityCreditor = () => {
  const navigate = useNavigate();
  const { onOpen } = useCreditorModal();
  const [value, setValue] = useState<string>("");

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col items-center w-full h-[75vh] bg-primary relative">
        <div className="flex flex-col px-20 w-[586px] h-[741px] bg-white rounded-3xl shadow-[0px_4px_30px_rgba(0,0,0,0.25)] relative top-1/4">
          <h1 className="mt-16 text-[32px] font-bold">
            채권자 수를 알려주세요.
          </h1>
          <button
            onClick={onOpen}
            className="px-8 py-4 mt-6 font-bold rounded-lg w-fit h-fit bg-secondary"
          >
            채권자란 무엇인가요?
          </button>
          <Input
            type="text"
            placeholder="채권자 수를 입력해주세요."
            className="w-[404px] mt-8"
            onChange={HandleChange}
            value={value}
            required
          />

          <Button
            onClick={() => navigate("../")}
            className="w-[404px] text-sm self-center rounded-xl absolute bottom-20"
            secondary
          >
            다음으로
          </Button>
          <p className="absolute self-center text-sm font-bold bottom-10">
            뒤로가기
          </p>
        </div>
      </div>

      <div className="w-full h-[25vh] bg-secondary"></div>
    </>
  );
};

export default PossibilityCreditor;
