import { useEffect, useRef } from "react";
import Message from "../../components/Message";
import { SAMPLE_MESSAGES } from "../../constants";

const LawyerChatPage = () => {
  const sendRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        sendRef.current?.click();
        alert("Enter Clicked!");
      }
    };
    window.addEventListener("keydown", onEnter);
    return () => {
      window.removeEventListener("keydown", onEnter);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[75vh] bg-primary">
        <div className="w-[550px] h-[800px] rounded-3xl p-[30px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="grid w-full h-16 text-xl font-bold place-content-center rounded-2xl bg-[#efefef]">
            이지민 님과 대화중..
          </div>
          <div className="flex flex-col mt-12 h-[540px] overflow-y-scroll gap-y-4 scrollbar-hide">
            {SAMPLE_MESSAGES.map((message) => (
              <Message
                key={message.id}
                content={message.content}
                writer={message.writer}
              />
            ))}
          </div>
          <div className="w-full h-[75px] py-4 pr-4 border-4 mt-4 border-primary shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] rounded-2xl flex items-center">
            <input className="flex-1 px-4 py-2 text-[17px] font-bold focus:outline-none" />
            <div
              className="grid w-12 h-12 rounded-2xl bg-primary place-content-center"
              ref={sendRef}
            >
              <p className="font-bold text-white">전송</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[25vh] bg-secondary"></div>
    </>
  );
};

export default LawyerChatPage;
