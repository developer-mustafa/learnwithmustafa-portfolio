import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import Wave from "react-wavify";
import avatar from "../../../assets/images/mustafa2.jpeg";
import useWindowDimensions from "../../../hook/getWindowDimensions";
import SocialBtn from "../../socialBtn";
import socialBtnList from "./../../../utils/socialBtnList.json";
import Button from "./button";

export default function Home() {
  const { height, width } = useWindowDimensions();

  return (
    <div
      className={`lightBg dark:darkBg relative ${
        height > 694 && width > 992 && "h-screen"
      }`}
    >
      <div className="w-full h-full background">
        {" "}
        <div className="h-auto md:h-full bg-black/15 pt-24 py-8 containerCustom relative z-10">
          <div className="backdrop-blur-xl bg-white/40 dark:bg-[#0b1327]/60 rounded-2xl h-full w-full relative overflow-hidden">
            <div
              className={`flex items-center justify-center flex-col overflow-hidden h-full w-full relative z-20 pt-20 md:pb-28 pb-32`}
            >
        <div className="h-40 w-40 md:h-38 md:w-38 overflow-hidden rounded-full bg-dark mb-4">
                <img src={avatar} alt="avatar" />
              </div>
              <h2 className="text-3xl md:text-4xl font-medium pb-4 pt-2 ">
                <Fade up cascade>
                  Mustafa Rahman
                </Fade>
              </h2>{" "}
              <Typed
                strings={[
                  "Web developer",
                  "Web designer",
                  "ReactJS/NextJS Developer",
                  "Front-end Developer",
                  "Back-end Developer",
                  "Full stack developer",
                ]}
                typeSpeed={100}
                backSpeed={90}
                loop
                className="text-md md:text-xl text-gray-600 dark:text-gray-300"
              />
              <div className="icons mt-4 text-gray-600 dark:text-white/60 flex justify-center flex-wrap">
                {socialBtnList.map((btn, idx) => {
                  const { link, hover, icon } = btn || {};
                  return (
                    <>
                      <SocialBtn
                        key={idx}
                        link={link}
                        hover={hover}
                        icon={icon}
                      />
                    </>
                  );
                })}
              </div>
              <div className="flex mt-5">
                <Link to="/contact">
                  <Button name="Get in touch" />
                </Link>

                <a
                  href="https://drive.google.com/file/d/1mz5hvT0CvnWK1dapjxhruvdjIKDOHPnq/view?usp=sharing"
                  download
                >
                  <Button name="Download CV" />
                </a>
              </div>
            </div>
            <Wave
              fill="#fff4"
              paused={false}
              options={{
                height: 50,
                amplitude: 50,
                speed: 0.15,
                points: 3,
              }}
              className="absolute bottom-0 z-10 "
            />
            <Wave
              fill="#fff5"
              paused={false}
              options={{
                height: 70,
                amplitude: 30,
                speed: 0.2,
                points: 5,
              }}
              className="absolute bottom-0 z-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
