import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} bg-primary relative`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}
      >
        {/* Hero text */}
        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px] drop-shadow-md">
            Hi there!
            <br className="sm:block hidden" /> I am
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <LetsConnect />
          </div>
        </div>

        <h1 className="font-poppins font-bold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full drop-shadow-md">
          <span className="text-gradient animate-pulse">{aboutMe.name}</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-200 bg-opacity-75 p-4 rounded-lg shadow-lg`}
          style={{ background: "rgba(0, 0, 0, 0.4)" }}>
          {aboutMe.intro}
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative z-10 h-[90%] w-[85%]">
          <Lottie {...defaultOptions} />
        </div>
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} z-10`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
