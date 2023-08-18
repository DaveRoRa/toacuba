import Image from "next/image";
import { AiOutlineMenu, AiFillApi } from "react-icons/ai";
import Button from "./components/button";
import IconCard from "./components/icon-card";
import SquareImage from "./components/square-image";
import List from "./components/list";
import content from "../utils/content.json";
import Card from "./components/card";
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
            <div className="subSection flex flex-col">
              <h1
                className={
                  "mt-[90px] sm:mt-[195px] md:mt-[210px] text-4xl sm:text-5xl lg:text-6xl " +
                  " font-bold text-white text-red text-center "
                }
              >
                {content[1].title}
              </h1>
              <p
                className={
                  "mt-[30px] text-white w-[340px] sm:w-[540px] md:w-[720px] lg:w-[760px] " +
                  "text-center flex self-center text-xl"
                }
              >
                {content[1].subtitle}
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
        <div className={"subSection my-[60px] flex flex-col lg:flex-row"}>
          <div className="w-full lg:w-[58.33333333%] lg:flex lg:flex-col lg:justify-between lg:h-full">
            <div className="pb-[30px] pr-[10px]">
              <h2 className="text-[44px] sm:text-6xl md:text-[80px] lg:text-6xl font-bold">
                {content[2].title}
              </h2>
              <p className="mt-5 italic leading-8">{content[2].subtitle}</p>
              <Button variant={3} className="mt-[23px]">
                Learn More
              </Button>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-[30px] lg:pb-0 lg:pr-[60px]">
              {content[2].gallery.map(({ alt, src }) => (
                <SquareImage key={alt} src={src} alt={alt} />
              ))}
            </div>
          </div>
          <div className="relative w-full h-[625px] sm:h-[992px] md:h-[903px] lg:flex-1">
            <Image
              src={content[2].singleImage.src}
              alt={content[2].singleImage.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section id="SectionThree" className="bg-primary-500">
        <div className="subSection py-[60px] flex flex-col items-center m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <List
              elements={content[3][0].elements}
              header={content[3][0].header}
            />
            <div>
              <List
                elements={content[3][1].elements}
                header={content[3][1].header}
              />
              <List
                elements={content[3][2].elements}
                header={content[3][2].header}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="SectionFour">
        <div className="relative">
          <div className="relative h-[573px]">
            <Image
              alt={content[4].mainImg.alt}
              src={content[4].mainImg.src}
              fill
              className="object-cover"
            />
            <div
              className={
                "absolute bg-black bg-opacity-50 h-full w-full top-0 left-0" +
                " pt-[100px] sm:pt-[90px] md:pt-[85px] lg:pt-[120px]"
              }
            >
              <h2 className="text-white text-4xl sm:text-5xl xl:text-6xl font-bold text-center">
                {content[4].title}
              </h2>
            </div>
          </div>
          <div
            className={
              "relative subSection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 " +
              "gap-5 translate-y-[-12.5%] md:translate-y-[-25%] lg:translate-y-[-50%]"
            }
          >
            {content[4].cards.map(({ header, img, link, subtext }) => (
              <Card
                key={header}
                alt={img.alt}
                src={img.src}
                header={header}
                link={link}
                subtext={subtext}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="SectionFive">
        <div className="subSection mb-[45px] grid grid-cols-1 md:grid-cols-2">
          <div className="py-[30px] px-[10px] md:p-[30px] lg:px-10 lg:pt-[60px] lg:pb-[30px]">
            <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {content[5].title1}
            </h1>
            <p className="mt-5 leading-[2]">{content[5].text1}</p>
            <Button variant={3} className="mt-[30px]">
              Learn More
            </Button>
          </div>
          <div className="py-[30px] px-[10px] md:p-[30px] lg:px-10 lg:pt-[60px] lg:pb-[30px]">
            <h4 className="uppercase text-2xl font-bold tracking-[2px] leading-[1.2]">
              {content[5].title2}
            </h4>
            <p className="mt-5 leading-[2] text-base">{content[5].text2}</p>
            <p className="mt-5 leading-[1.8] text-lg font-bold text-primary-500">
              {content[5].text3}
            </p>
          </div>
        </div>
      </section>
      <section id="SectionSix">
        <div
          className={
            "w-full relative h-[1064px] sm:h-[1168px] " +
            "md:h-[757px] lg:h-[837px] xl:h-[1057px]"
          }
        >
          <Image
            src={content[6].bgImage.src}
            alt={content[6].bgImage.alt}
            fill
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="subSection">
              <div
                className={
                  "mt-[190px] lg:mt-[287px] xl:mt-[461px] bg-white " +
                  "grid grid-cols-1 md:grid-cols-2"
                }
              >
                <div className="py-[30px] px-5 md:px-[30px] lg:px-[50px]">
                  <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold">
                    {content[6].title}
                  </h2>
                  <p className="mt-5 text-lg leading-[1.8]">
                    {content[6].text}
                  </p>
                  <Button variant={3} className="mt-[37px]">
                    Learn More
                  </Button>
                </div>
                <div className="p-5">
                  <div className="relative aspect-square md:aspect-auto md:h-full">
                    <Image
                      alt={content[6].cardPic.alt}
                      src={content[6].cardPic.src}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
