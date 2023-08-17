import Image from "next/image";
import { AiOutlineMenu, AiFillApi } from "react-icons/ai";

import Button from "./components/button";
import IconCard from "./components/icon-card";
import SquareImage from "./components/square-image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <header className="h-20 w-full flex justify-center items-center">
        <div
          className={
            "w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px]" +
            " xl:w-[1140px] flex content-around justify-between"
          }
        >
          <div className="relative h-8 w-16">
            <Image alt="logo" src="/default-logo.png" fill />
          </div>
          <AiOutlineMenu className="w-6 h-6 my-1" />
        </div>
      </header>
      <section id="Intro" className="h-[1120px] md:h-[845px] w-full relative">
        <div className="h-full w-full relative">
          <Image
            alt="intro-background"
            src="/intro-section.jpg"
            fill
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center">
            <div className="w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px] xl:w-[1140px] flex flex-col">
              <h1
                className={
                  "mt-[90px] sm:mt-[195px] md:mt-[210px] text-4xl sm:text-5xl lg:text-6xl " +
                  " font-bold text-white text-center "
                }
              >
                {" "}
                Best Camping in the National Park
              </h1>
              <p
                className={
                  "mt-[30px] text-white w-[340px] sm:w-[540px] md:w-[720px] lg:w-[760px] " +
                  "text-center flex self-center text-xl"
                }
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit
              </p>
              <div
                className={
                  "mt-[41px] sm:mt-[31px] flex flex-col items-center sm:justify-center md:flex-row md:gap-5"
                }
              >
                <Button className="my-6 sm:my-0 sm:mt-[10px] sm:mb-[45px]">
                  Our Story
                </Button>
                <Button
                  className="mb-6 sm:my-0 sm:mt-[10px] sm:mb-[45px]"
                  variant={2}
                  link="sdfds"
                >
                  Contact us
                </Button>
              </div>
              <div className="flex w-full justify-between flex-wrap">
                <IconCard icon={AiFillApi} subtext="Trekking" />
                <IconCard icon={AiFillApi} subtext="Trekking" />
                <IconCard icon={AiFillApi} subtext="Trekking" />
                <IconCard icon={AiFillApi} subtext="Going on trip" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="SectionTwo" className="w-full flex justify-center">
        <div
          className={
            "w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px]" +
            " xl:w-[1140px] my-[60px] flex flex-col lg:flex-row"
          }
        >
          <div className="w-full lg:w-[58.33333333%] lg:flex lg:flex-col lg:justify-between lg:h-full">
            <div className="pb-[30px] pr-[10px]">
              <h2 className="text-[44px] sm:text-6xl md:text-[80px] lg:text-6xl font-bold">
                10 Amazing Camping Tours
              </h2>
              <p className="mt-5 italic leading-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <Button variant={3} className="mt-[23px]">
                Learn More
              </Button>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-[30px] lg:pb-0 lg:pr-[60px]">
              <SquareImage src="/gallery1.jpg" alt="pic1" />
              <SquareImage src="/gallery2.jpg" alt="pic2" />
              <SquareImage src="/gallery3.jpg" alt="pic3" />
              <SquareImage src="/gallery4.webp" alt="pic4" />
              <SquareImage src="/gallery5.jpg" alt="pic5" />
              <SquareImage src="/gallery6.jpeg" alt="pic6" />
            </div>
          </div>
          <div className="relative w-full h-[625px] sm:h-[992px] md:h-[903px] lg:flex-1">
            <Image
              src="/gallery7.jpg"
              alt="pic7"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
