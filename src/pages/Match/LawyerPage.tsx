import { FaSearch } from "react-icons/fa";
import { SAMPLE_LAWYERS } from "../../constants";
import Lawyer from "../../components/Lawyer";

const LawyerPage = () => {
  const [best, ...others] = SAMPLE_LAWYERS;
  return (
    <>
      <div className="w-full h-[511px] bg-primary shadow-[0_4px_30px_0_rgba(0,0,0,0.2)] flex justify-center gap-x-16 items-center pt-24">
        <h1 className="font-bold text-white text-[64px]">
          당신에게 맞는
          <br />
          변호사를 찾으세요
        </h1>
        <div className="w-[451px] flex items-center bg-transparent border-2 border-white rounded-3xl relative top-10">
          <input
            placeholder="검색하기"
            className="h-16 pr-4 ml-4 text-2xl font-bold text-white bg-transparent w-96 placeholder:text-white focus:outline-none"
          />
          <FaSearch size={25} color="white" />
        </div>
      </div>
      <div className="flex flex-col items-center w-full py-24 gap-y-16 bg-secondary">
        <h1 className="mb-12 text-6xl font-bold">가장 추천하는 변호사</h1>
        <Lawyer
          username={best.username}
          bio={best.bio}
          id={best.id}
          className="mb-20 scale-125"
        />
        {others.map((v, i) => (
          <div key={i}>
            <Lawyer username={v.username} bio={v.bio} id={v.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default LawyerPage;
