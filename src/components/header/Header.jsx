import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <div className="box-border block w-[1361px] h-[70px] relative bg-[#26282f]">
      <div className="box-border block w-[1361px] h-[70px] absolute top-0 left-0">
        <a href="#">
          <Logo />
        </a>

        <a href="#" className="box-border flex justify-center items-center w-[126px] h-[39px] absolute top-[15px] left-[1130px] gap-2.5 px-16 py-6 rounded-3xl bg-[#ffe81a]">
          <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Nunito'] text-xl leading-[37px] font-black text-left text-[#fcfff9]">
            Register
          </p>
        </a>

        <a href="#" className="box-border flex justify-center items-center w-[100px] h-[30px] absolute top-[13px] left-[980px] gap-2.5 px-16 py-6 rounded-3xl border-[1px] border-white">
          <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Nunito'] text-xl leading-[37px] font-black text-left text-white">
            Login
          </p>
        </a>

        <a href="#" className="box-border flex justify-center items-center w-[31px] h-7 absolute top-[21px] left-[1290px] overflow-hidden gap-2.5 p-0.5 rounded-[10px] bg-[#3a3e4a] border border-white">
          <Search />
        </a>
      </div>
    </div>
  );
};

export default Header;
