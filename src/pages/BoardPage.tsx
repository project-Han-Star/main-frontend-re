import { useNavigate } from "react-router";
import Button from "../components/Button";

const BoardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[786px] bg-[#4571e5] pt-64 flex flex-col items-center relative">
        <div className="w-fit">
          <h1 className="text-white font-bold text-[40px]">
            한별에서 도움을 받으세요!
          </h1>
          <div className="flex gap-x-6 mt-8">
            <div className="bg-white w-[353px] h-[245px] rounded-2xl grid place-items-center relative">
              <p className="text-center text-2xl relative bottom-4">
                나랑 비슷한 사람들은 <br />
                회생했을까?
              </p>
              <Button
                onClick={() => navigate("/possibility/start")}
                className="w-[303px] h-[60px] absolute bottom-4 text-xl font-normal rounded-2xl"
                secondary
              >
                회생가능성 계산하기
              </Button>
            </div>
            <div className="bg-white w-[353px] h-[245px] rounded-2xl grid place-items-center relative">
              <p className="text-center text-2xl relative bottom-4">
                간단한 질문에 답하고 <br />
                안심되고 나에게 딱 맞는 <br />
                변호사 추천받기
              </p>
              <Button
                className="w-[303px] h-[60px] absolute bottom-4 text-xl font-normal rounded-2xl"
                secondary
              >
                30초만에 변호사 매칭
              </Button>
            </div>
            <div className="bg-white w-[353px] h-[245px] rounded-2xl grid place-items-center relative">
              <p className="text-center text-2xl relative bottom-4">
                AI로 부채 상환내역 기록하고 <br />
                불법사금융 정리하기
              </p>
              <Button
                className="w-[303px] h-[60px] absolute bottom-4 text-xl font-normal rounded-2xl"
                secondary
              >
                불법 사채 끝장내기
              </Button>
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white absolute bottom-16">
          이런 경우에도 회생이 가능해요
        </h1>
      </div>
      <div className="w-full h-fit py-24 bg-[#e7e9f5] flex flex-col gap-y-8 items-center">
        <div className="flex items-center gap-x-16">
          <div className="w-[454px] h-[363px] bg-white grid place-content-center">
            사진이 들어갈 자리
          </div>
          <div className="flex flex-col">
            <h1 className="text-[40px] font-bold text-right">
              주식/코인 빛 회생 가능
            </h1>
            <p className="text-right text-[#00000080]">
              amet, consectetur adipiscing elit. Morbi placerat pellentesque
              <br />
              interdum. Ut varius est ac justo pulvinar, sed
              <br />
              posuere purus gravida. Mauris ac nunc q
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-16">
          <div className="flex flex-col">
            <h1 className="text-[40px] font-bold">도박/여행 빛 회생 가능</h1>
            <p className="text-[#00000080]">
              amet, consectetur adipiscing elit. Morbi placerat pellentesque
              <br />
              interdum. Ut varius est ac justo pulvinar, sed
              <br />
              posuere purus gravida. Mauris ac nunc q
            </p>
          </div>
          <div className="w-[477px] h-[351px] bg-white grid place-content-center">
            사진이 들어갈 자리
          </div>
        </div>
      </div>
      <div className="w-full h-[900px] flex flex-col items-center bg-[#4571e5]">
        <h1 className="text-center font-bold text-white text-5xl mt-24">
          그 외의 경우에도 <br />
          한별에서는 다 가능!
        </h1>
        <p className="text-center text-white mt-8">
          추가적인 요소들을 나열하는 설명 문구추가적인 요소들을 나열하는 설명
          문구추가적인 요소들을
          <br />
          나열하는 설명 문구추가적인 요소들을 나열하는 설명 문구
        </p>
        <h2 className="font-bold text-white text-[40px] mt-32 relative right-72">
          현재 한별에 등록중인 변호사
        </h2>
        <div className="w-[798px] h-[225px] bg-white rounded-[20px] mt-12 grid place-content-center">
          사진이 들어갈 자리
        </div>
      </div>
    </>
  );
};

export default BoardPage;
