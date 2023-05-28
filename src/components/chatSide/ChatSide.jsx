import { useState } from "react";
import Close from "./Close";
// import Frame from "./Frame";

const ChatSide = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isChatVisible, setIsChatVisible] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // eslint-disable-next-line no-unused-vars
  const handleToggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleClick = (word) => {
    console.log("Clicked:", word);
  };

  return (
    <>
      <div className={`box-border block w-[248px] h-[1581px] relative bg-[#26282f] ml-${isSidebarVisible ? "0" : "-245px"}`}>
        {isSidebarVisible && (
          <>
            <div className="w-[220px] h-[350px] absolute top-[60px] left-3 right-3 rounded-md bg-white" />
            <div className="box-border flex justify-center items-center w-[61px] h-[26px] absolute top-[510px] left-[159px] gap-2.5 px-8 py-6 rounded bg-[#86f454]">
              <button className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Nunito'] text-xs leading-[25px] text-left text-[#0f0f0f]" onClick={() => handleClick("SEND")}>
                SEND
              </button>
            </div>
            <div className="box-border flex justify-center items-center w-[220px] h-[60px] absolute top-[425px] left-2 gap-2.5 px-10 py-6 rounded-3xl bg-[#161924]">
              <button className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-xs leading-[14.4px] text-left uppercase text-white" onClick={() => handleClick("LOGIN TO CHAT")}>
                LOGIN TO CHAT
              </button>
            </div>
            <div className="box-border block w-[81px] h-[37px] absolute top-[510px] left-[50px]">
              <div className="box-border flex justify-center items-center w-[53px] h-[37px] absolute top-0 left-5 gap-2.5 px-10 py-6 rounded-3xl bg-[#161924]">
                <button className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-xs leading-[14.4px] text-left uppercase text-[#b1b6c6]" onClick={() => handleClick("Rules")}>
                  Rules
                </button>
              </div>
            </div>
            <div className="box-border block w-[77px] h-[41px] absolute top-[5px] left-[7px]">
              <div className="box-border flex justify-center items-center w-[77px] h-[41px] absolute top-1 -left-1 gap-2.5 px-10 py-4 rounded-3xl bg-[#161924]">
                <button className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-[11px] leading-[14.4px] text-left uppercase text-[#ffe81a]" onClick={() => handleClick("CHAT")}>
                  CHAT
                </button>
              </div>
            </div>
          </>
        )}
        <div className={`box-border flex justify-center items-center w-[23px] h-[19px] absolute top-[18px] left-[200px] overflow-hidden gap-2.5 p-0.5 rounded-[10px] bg-[#3a3e4a] border border-white ${isSidebarVisible ? '' : 'visible'}`} onClick={handleToggleSidebar}>
          <Close />
        </div>
        {/* <div className={`box-border flex justify-center items-center w-[25px] h-[18px] absolute top-[18px] left-[190px] overflow-hidden gap-2.5 p-0.5 rounded-[10px] bg-[#3a3e4a] border border-white ${isChatVisible ? '' : 'visible'}`} onClick={handleToggleChat}>
          <Frame />
        </div> */}
        {isSidebarVisible && (
          <div className="box-border flex justify-center items-center w-[101px] h-[38px] absolute top-1.5 left-[84px]">
            <div className="box-border flex justify-center items-center w-[101px] h-[38px] absolute top-0 left-0 gap-2.5 px-10 py-6 rounded-3xl bg-[#161924]">
              <button className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-xs leading-[14.4px] text-left uppercase text-white" onClick={() => handleClick("TRADES")}>
                TRADES
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatSide;
