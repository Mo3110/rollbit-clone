import { useState } from 'react';
// import AccordArrow from './AccordArrow';
import VisaCard from './VisaCard';
import MasterCard from './MasterCard';
import ApplePay from './ApplePay';
import Gpay from './Gpay';

const LeftSidebar = () => {
  const [isWalletsOpen, setWalletsOpen] = useState(false);
  const [isCryptoFuturesOpen, setCryptoFuturesOpen] = useState(false);
  const [isToggleOn, setToggleOn] = useState(false);
  const [isToggleOn2, setToggleOn2] = useState(false);
  const [activeTab, setActiveTab] = useState('walletx');

  const toggleWallets = () => {
    setWalletsOpen(!isWalletsOpen);
  };

  const toggleCryptoFutures = () => {
    setCryptoFuturesOpen(!isCryptoFuturesOpen);
    setActiveTab(null);
  };

  const toggleSwitch = () => {
    setToggleOn(!isToggleOn);
  };

  const toggleSwitch2 = () => {
    setToggleOn2(!isToggleOn2);
  };

  const handlePayNowButtonClick = () => {
    console.log('Pay Now button clicked');
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="box-border block w-60 h-[1581px] relative bg-[#26282f]">
      {/* Contract Address */}
      <div className="box-border block w-[203px] h-14 absolute top-1 left-[19px]">
        <p className="whitespace-pre-wrap absolute top-1 left-5 w-[132px] font-['Roboto'] text-xs leading-[14.4px] text-left uppercase text-[#c4c6ca]">
          Contract Address
        </p>
        <input
          type="text"
          className="whitespace-pre-wrap absolute top-[22px] left-4 w-[193px] h-[23px] font-['Roboto'] text-sm leading-[16.8px] text-left text-white rounded-md px-2 py-1"
        />
      </div>

      {/* Method */}
      <div className="box-border block w-[203px] h-14 absolute top-[68px] left-[19px]">
        <p className="whitespace-pre-wrap absolute top-1 left-5 w-[132px] font-['Roboto'] text-xs leading-[14.4px] text-left uppercase text-[#c4c6ca]">
          Method
        </p>
        <input
          type="text"
          className="whitespace-pre-wrap absolute top-[22px] left-4 w-[193px] h-[23px] font-['Roboto'] text-sm leading-[16.8px] text-left text-white rounded-md px-2 py-1"
        />
      </div>

      {/* Amount */}
      <div className="box-border block w-[203px] h-14 absolute top-[133px] left-[19px]">
        <p className="whitespace-pre-wrap absolute top-1 left-5 w-[132px] font-['Roboto'] text-xs leading-[14.4px] text-left uppercase text-[#c4c6ca]">
          Amount
        </p>
        <input
          type="text"
          className="whitespace-pre-wrap absolute top-[22px] left-4 w-[193px] h-[23px] font-['Roboto'] text-sm leading-[16.8px] text-left text-white rounded-md px-2 py-1"
        />
      </div>

      {/* Crypto Portfolio */}
      <div className="box-border block w-[200px] h-5 absolute top-[302px] left-[30px]">
        <button className="whitespace-pre-wrap absolute top-0 -left-2.5 w-[200px] font-['Roboto'] text-xs leading-[16.4px] text-center uppercase text-white bg-[#2e3245] rounded-md px-5 py-3">
          Crypto Portfolio
        </button>
      </div>

      {/* Wallets */}
      <div className="box-border block w-[203px] absolute top-[205px] left-[19px]">
        <div className="rounded-md overflow-hidden">
          <div className="flex items-center justify-between cursor-pointer bg-[#2e3245] rounded-md px-8 py-3" onClick={toggleWallets}>
            <div className="flex items-center">
              <div className="box-border block w-4 h-4 mr-4">
                {/* Down arrow icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="whitespace-pre-wrap font-['Roboto'] text-sm leading-[16.8px] text-left uppercase text-white">
                Wallets
              </p>
            </div>
          </div>
        </div>
        {isWalletsOpen && (
          <div className="pl-1 mt-3">
            <div className={`rounded-lg whitespace-pre-wrap font-['Roboto'] text-sm leading-[16.8px] text-center uppercase text-white cursor-pointer ${activeTab === 'walletx' ? 'text-white font-bold bg-[#2e3245] px-4 py-2' : 'text-gray-400'}`} onClick={() => handleTabClick('walletx')}>
              Walletx
            </div>
            <div className={`rounded-lg whitespace-pre-wrap font-['Roboto'] text-sm leading-[16.8px] text-center uppercase text-white cursor-pointer ${activeTab === 'walletx' ? 'text-white font-bold bg-[#2e3245] px-4 py-2' : 'text-gray-400'}`} onClick={() => handleTabClick('degen')}>
              Degen
            </div>
          </div>
        )}
      </div>

      {/* Crypto Futures */}
      <div className="box-border block w-[203px] absolute top-[360px] left-[19px]">
        <div className="rounded-md overflow-hidden">
          <div className="flex items-center justify-between cursor-pointer bg-[#2e3245] rounded-md px-2 py-1" onClick={toggleCryptoFutures}>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2">
                {/* Down arrow icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="whitespace-pre-wrap font-['Roboto'] text-sm leading-[16.8px] text-left uppercase text-white">
                Crypto Futures
              </p>
            </div>
            {/* <AccordArrow isOpen={isCryptoFuturesOpen} /> */}
          </div>
        </div>
        {isCryptoFuturesOpen && (
          <div className="pl-4 mt-2">
            {/* Empty tabs for Crypto Futures */}
            <div className={`rounded-lg whitespace-pre-wrap font-['Roboto'] text-sm leading-[16.8px] text-center uppercase text-[#676d7c] cursor-pointer ${activeTab === 'tab1' ? 'text-white font-bold bg-[#2e3245] px-2 py-1' : 'text-gray-400'}`} onClick={() => handleTabClick('tab1')}>
              Tab 1
            </div>
            <div className={`rounded-lg whitespace-pre-wrap font-['Roboto'] text-sm leading-[16.8px] text-center uppercase text-[#676d7c] cursor-pointer ${activeTab === 'tab2' ? 'text-white font-bold bg-[#2e3245] px-2 py-1' : 'text-gray-400'}`} onClick={() => handleTabClick('tab2')}>
              Tab 2
            </div>
            <div className={`rounded-lg whitespace-pre-wrap font-['Roboto'] text-sm leading-[16.8px] text-center uppercase text-[#676d7c] cursor-pointer ${activeTab === 'tab3' ? 'text-white font-bold bg-[#2e3245] px-2 py-1' : 'text-gray-400'}`} onClick={() => handleTabClick('tab3')}>
              Tab 3
            </div>
          </div>
        )}
      </div>

      {/* Visa Card, Master Card, Apple Pay, Gpay */}
      <div className="box-border block w-[203px] h-[83px] absolute top-[472px] left-[19px]">
        <VisaCard />
        <MasterCard />
        <ApplePay />
        <Gpay />
        <div className="box-border flex justify-center items-center w-[203px] h-[42px] absolute -top-5 left-0 gap-2.5 px-20 py-6 rounded-3xl bg-[#161924]">
          <button className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Nunito'] text-xl leading-[37px] font-black text-left text-white" onClick={handlePayNowButtonClick}>
            Pay Now
          </button>
        </div>
      </div>
{/* Toggle Switches */}
<div className="box-border block w-[203px] h-[83px] absolute top-[580px] left-[19px]">
        {/* First Toggle Switch */}
        <div className="flex items-center justify-between cursor-pointer bg-[#161924] rounded-3xl px-2 py-1" onClick={toggleSwitch}>
          <p className="whitespace-pre-wrap font-['Roboto'] text-xl leading-[37px] font-black text-left text-white">
            {isToggleOn ? 'ON' : 'OFF'}
          </p>
          <div className={`w-12 h-6 rounded-full bg-[#919295] ${isToggleOn ? 'justify-end' : 'justify-start'} flex transition-all duration-300`}>
            <div className={`w-6 h-6 bg-white rounded-full transform translate-x-${isToggleOn ? '3' : '0'} transition-all duration-300`}></div>
          </div>
        </div>
        
        {/* Second Toggle Switch */}
        <div className="mt-4 flex items-center justify-between cursor-pointer bg-[#161924] rounded-3xl px-2 py-1" onClick={toggleSwitch2}>
          <p className="whitespace-pre-wrap font-['Roboto'] text-xl leading-[37px] font-black text-left text-white">
            {isToggleOn2 ? 'ON' : 'OFF'}
          </p>
          <div className={`w-12 h-6 rounded-full bg-[#919295] ${isToggleOn2 ? 'justify-end' : 'justify-start'} flex transition-all duration-300`}>
            <div className={`w-6 h-6 bg-white rounded-full transform translate-x-${isToggleOn2 ? '3' : '0'} transition-all duration-300`}></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LeftSidebar;
