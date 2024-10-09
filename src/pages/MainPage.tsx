import { useNavigate } from "react-router";
import Button from "../components/Button/Button";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-secondary">
      <div className="flex h-screen bg-primary justify-center items-center gap-[60px] shadow-[0_4px_30px_0_rgba(0,0,0,0.2)]">
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[64px] font-bold text-white mt-[50px] leading-tight">
            개인 회생 서비스와 <br />
            변호사 매칭 서비스로 <br />
            <span className="font-normal">한번에</span>
          </h1>
          <p className="text-[20px] text-white">
            BNPL 서비스와 AI 데이터 기반으로 통합 솔루션 제공
          </p>
          <div className="flex gap-[20px]">
            <Button>신청하기</Button>
            <Button onClick={() => navigate("/board")} secondary>
              신청하기
            </Button>
          </div>
        </div>
        <div className="w-[524px] h-[531px] bg-white flex justify-center items-center">
          <p>사진이 들어갈 자리</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[80px]">
        <h2 className="text-[48px] font-bold text-center">한별을 소개합니다</h2>
        <p className="text-[20px] text-fontlight text-center">
          한별은 AI 변호사 매칭과 BNPL 서비스를 통해 <br />
          청년들의 금융위기 극복을 도와주는 플랫폼입니다.
        </p>
      </div>
      <div className="flex flex-col items-center mt-[80px]">
        <div className="flex gap-[80px]">
          <div className="w-[400px] h-[300px] bg-white rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex justify-center items-center">
            <p>사진이 들어갈 자리</p>
          </div>
          <div className="flex flex-col gap-[10px] justify-center">
            <h3 className="text-[48px] font-bold text-right">
              AI 변호사 매칭 서비스
            </h3>
            <p className="text-[20px] text-fontlight text-right">
              AI가 매칭해주는 최적의 변호사를 통해 <br />
              개인 회생/파산을 손쉽게 신청해보세요
            </p>
          </div>
        </div>
        <div className="flex gap-[80px] mt-[50px]">
          <div className="flex flex-col gap-[10px] justify-center">
            <h3 className="text-[48px] font-bold">회생점수계산기</h3>
            <p className="text-[20px] text-fontlight">
              회생/파산이 가능한지, 나랑 비슷한 사람 중 몇 명이 <br />
              회생/파산 신청에 성공했는지를 한눈에 볼 수 있는 기능이에요
            </p>
          </div>
          <div className="w-[365px] h-[300px] bg-white rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex justify-center items-center">
            <p>사진이 들어갈 자리</p>
          </div>
        </div>
      </div>
      <div className="h-[500px]" />
    </div>
  );
};

export default MainPage;
