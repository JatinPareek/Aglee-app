import React from "react";
import mouseScroll from "../assets/mouse-scroll.svg";
import heroimage from "../assets/imagehero.png";
import maillogo from "../assets/maillogo.png";
import phonelogo from "../assets/phonelogo.png";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <main
          className="absolute top-[20px] left-[120.2px] w-[1000.8px] h-[815px] text-left text-lg text-darkgray"
          id="Hero Sction"
        >
          <img
            className="absolute top-[0px] left-[591.8px] w-[619px] h-[621px] object-cover"
            alt=""
            src={heroimage}
          />
          <div className="absolute top-[260.3px] left-[0px] w-[540.8px] h-[332.7px]">
            <div className="absolute top-[163.1px] left-[5.8px] leading-[28px] poppins-light text-customgray inline-block w-[535px] h-[74px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua. `}</div>
            <div className="absolute top-[0px] left-[0px] text-[60px] leading-[72px] text-black">
              <p className="m-0">
                <span className="text-customgreen poppins-bold">Digital</span>
                <span className="poppins-bold"> Marketing</span>
              </p>
              <p className="m-0 poppins-bold">Excellent Quality</p>
            </div>
            {/* <div className="absolute top-[272.7px] left-[3.8px] w-[180px] h-[60px] text-center text-mini text-white">
              <div className="absolute top-[0px] left-[0px] shadow-[10.9px_25.8px_17.5px_rgba(164,_156,_223,_0.18)] rounded-6xl bg-slateblue w-[180px] h-[60px]" />
              <div className="absolute top-[20.4px] left-[46.7px] leading-[18px]">
                <button>Get Started</button>
              </div>
            </div>
          </div> */}
            <div className="absolute top-[272.7px] left-[3.8px] text-center text-white w-[180px] h-[60px]">
              <div className="w-[180px] h-[60px] absolute top-[0px] left-[0px] shadow-[10.9px_25.8px_17.5px_rgba(164,_156,_223,_0.18)] ">
                <button className=" absolute top-[20.4px] left-[4.7px] leading-[18px] w-full h-full  bg-customviolet rounded-2xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[660px] left-[5.8px] w-[18px] h-6"
            alt=""
            src={mouseScroll}
          />
          <div className="absolute top-[658px] left-[740.8px] w-[399px] h-[29px] text-right text-slateblue">
            <div className="absolute top-[4.5px] left-[0px] leading-[19px]">
              <img src={phonelogo} />
            </div>
            <div className="absolute top-[2px] left-[34px] text-mini leading-[26.4px] poppins-light text-black text-left">
              + 452 56 4332 4456
            </div>
            <div className="absolute top-[0px] left-[246px] text-mini leading-[26.4px] poppins-light text-black text-left">
              info@moontheme.net
            </div>
            <div className="absolute top-[4.0px] left-[220px] leading-[19px]">
              <img src={maillogo} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
