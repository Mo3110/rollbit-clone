// import IconBar from "./IconBar";
import Frame from "./Frame";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import image from "./image.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import image5 from "./image5.png";

const BodyOne = () => {
  return (
    <div className="box-border block w-[873px] h-[434px] relative bg-[#1a1d29]">
      <div className="box-border block w-[823px] h-[140px] absolute top-[274px] left-8 overflow-hidden rounded-[20px] bg-[#242836]">
        <div className="box-border block w-[58px] h-[86px] absolute top-12 left-6">
          <img
            className="w-8 h-8 absolute top-0 left-[13px] rounded-[999px] object-cover"
            src={image}
          />
          <p className="whitespace-pre-wrap absolute top-[39px] left-[18px] w-[22px] font-['Roboto'] text-[11px] leading-[14.4px] text-center text-[#b1b6c6]">
            BTC
          </p>
          <p className="whitespace-pre-wrap absolute top-[57px] left-0 w-[58px] font-['Roboto'] text-xs leading-[14.4px] text-center text-white">
            26,475.99
          </p>
          <p className="whitespace-pre-wrap absolute top-[74px] left-[11px] w-1.5 font-['Roboto'] text-[10px] leading-3 text-center text-[#72f238]">
            +
          </p>
          <p className="whitespace-pre-wrap absolute top-[74px] left-[17px] w-[30px] font-['Roboto'] text-[10px] leading-3 text-center text-[#72f238]">
            0.48%
          </p>
          <div className="w-[119px] h-32 absolute top-[-16px] left-[-27px] rounded-lg" />
        </div>
        <div className="box-border block w-[58px] h-[86px] absolute top-12 left-[166px]">
          <img
            className="w-8 h-8 absolute top-0 left-[13px] rounded-[999px] object-cover"
            src={image1}
          />
          <p className="whitespace-pre-wrap absolute top-[39px] left-[17px] w-[22px] font-['Roboto'] text-[11px] leading-[14.4px] text-center text-[#b1b6c6]">
            ETH
          </p>
          <p className="whitespace-pre-wrap absolute top-[57px] left-0 w-[58px] font-['Roboto'] text-xs leading-[14.4px] text-center text-white">
            1,806.500
          </p>
          <p className="whitespace-pre-wrap absolute top-[74px] left-[11px] w-1.5 font-['Roboto'] text-[10px] leading-3 text-center text-[#72f238]">
            +
          </p>
          <p className="whitespace-pre-wrap absolute top-[74px] left-4 w-[30px] font-['Roboto'] text-[10px] leading-3 text-center text-[#72f238]">
            0.26%
          </p>
          <div className="w-[120px] h-32 absolute top-[-16px] left-[-36px] rounded-lg" />
        </div>
        <div className="box-border block w-[70px] h-[86px] absolute top-12 left-[301px]">
          <img
            className="w-8 h-8 absolute top-0 left-[19px] rounded-[999px] object-cover"
            src={image2}
          />
          <p className="whitespace-pre-wrap absolute top-[39px] left-[5px] w-[61px] font-['Roboto'] text-xs leading-[14.4px] text-center text-[#b1b6c6]">
            1000PEPE
          </p>
          <p className="whitespace-pre-wrap absolute top-[57px] left-0 w-[70px] font-['Roboto'] text-xs leading-[14.4px] text-center text-white">
            0.00142890
          </p>
          <p className="whitespace-pre-wrap absolute top-[74px] left-[19px] w-[33px] font-['Roboto'] text-[10px] leading-3 text-center text-[#ff4949]">
            -1.13%
          </p>
          <div className="w-[119px] h-[124px] absolute top-[-16px] left-[-29px] rounded-lg" />
        </div>
        <div className="box-border block w-16 h-[86px] absolute top-12 left-[446px]">
          <img
            className="w-8 h-8 absolute top-0 left-4 rounded-[999px] object-cover"
            src={image3}
          />
          <p className="whitespace-pre-wrap absolute top-[39px] left-0 w-[63px] font-['Roboto'] text-xs leading-[14.4px] text-center text-[#b1b6c6]">
            1000FLOKI
          </p>
          <p className="whitespace-pre-wrap absolute top-[57px] left-px w-[63px] font-['Roboto'] text-xs leading-[14.4px] text-center text-white">
            0.0311371
          </p>
          <p className="whitespace-pre-wrap absolute top-[74px] left-[15px] w-[34px] font-['Roboto'] text-[10px] leading-3 text-center text-[#ff4949]">
            -0.75%
          </p>
          <div className="w-32 h-[126px] absolute top-[-16px] left-[-33px] rounded-lg" />
        </div>
        <div className="box-border block w-[55px] h-[86px] absolute top-12 left-[592px]">
          <img
            className="w-8 h-8 absolute top-0 left-3 rounded-[999px] object-cover"
            src={image4}
          />
          <p className="whitespace-pre-wrap absolute top-[39px] left-3 w-[31px] font-['Roboto'] text-[11px] leading-[14.4px] text-center text-[#b1b6c6]">
            DOGE
          </p>
          <p className="whitespace-pre-wrap absolute top-[57px] left-0 w-[55px] font-['Roboto'] text-xs leading-[14.4px] text-center text-white">
            0.070819
          </p>
          <p className="whitespace-pre-wrap absolute top-[74px] left-[11px] w-[35px] font-['Roboto'] text-[10px] leading-3 text-center text-[#ff4949]">
            -0.01%
          </p>
          <div className="w-[124px] h-32 absolute top-[-16px] left-[-37px] rounded-lg" />
        </div>
        <div className="box-border block w-12 h-[86px] absolute top-12 left-[738px]">
          <img
            className="w-8 h-8 absolute top-0 left-2 rounded-[999px] object-cover"
            src={image5}
          />
          <p className="whitespace-pre-wrap absolute top-[39px] left-3.5 w-5 font-['Roboto'] text-xs leading-[14.4px] text-center text-[#b1b6c6]">
            LTC
          </p>
          <p className="whitespace-pre-wrap absolute top-[57px] left-0 w-12 font-['Roboto'] text-xs leading-[14.4px] text-center text-white">
            86.2432
          </p>
          <p className="whitespace-pre-wrap absolute top-[74px] left-1.5 w-1.5 font-['Roboto'] text-[10px] leading-3 text-center text-[#72f238]">
            +
          </p>
          <p className="whitespace-pre-wrap absolute top-[74px] left-3 w-[30px] font-['Roboto'] text-[10px] leading-3 text-center text-[#72f238]">
            0.19%
          </p>
          <div className="w-[120px] h-[126px] absolute top-[-16px] left-[-41px] rounded-lg" />
        </div>
        <p className="whitespace-pre-wrap absolute top-[10px] left-[30px] w-[93px] font-['Roboto'] text-sm leading-[16.8px] text-left text-white">
          Crypto Futures
        </p>
        {/* <IconBar style={{ marginLeft: '-10px' }} /> */}
      </div>
      <p className="whitespace-pre-wrap absolute top-5 left-[220px] w-[400px] font-['Roboto'] text-lg leading-[28.8px] text-center text-white">
        Experience true innovation with the highest rewards program within the industry.
      </p>
      <div className="box-border flex justify-center items-center w-[202px] h-[55px] absolute top-[106px] left-[310px] gap-2.5 px-16 py-6 rounded-3xl bg-[#ffe81a]">
  <button className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Nunito'] text-xl leading-[37px] font-black text-left text-[#0a0a0a]">
    <a href="#">Register Now</a>
  </button>
</div>
      <div className="box-border flex justify-center items-center w-9 h-[33px] absolute top-[222px] left-[459px] overflow-hidden gap-2.5 p-0.5 rounded-[10px] bg-[#3a3e4a] border border-white">
  <Frame onClick={() => { /* Handle onClick event */ }} />
</div>
<div className="box-border flex justify-center items-center w-9 h-[33px] absolute top-[222px] left-[393px] overflow-hidden gap-2.5 p-0.5 rounded-[10px] bg-[#3a3e4a] border border-white">
  <Frame1 onClick={() => { /* Handle onClick event */ }} />
</div>
<div className="box-border flex justify-center items-center w-9 h-[33px] absolute top-[222px] left-[327px] overflow-hidden gap-2.5 p-0.5 rounded-[10px] bg-[#3a3e4a] border border-white">
  <Frame2 onClick={() => { /* Handle onClick event */ }} />
</div>
      <div className="box-border flex justify-center items-center w-[102px] h-[42px] absolute top-[170px] left-[365px] gap-2.5 px-16 py-6 rounded-3xl">
  <button className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Nunito'] text-xl leading-[37px] font-black text-left text-white">
    <a href="#">Or join with</a>
  </button>
</div>
    </div>
  );
};

export default BodyOne;