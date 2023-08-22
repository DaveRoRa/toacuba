"use client"
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./logo";
import { useContext } from "react";
import { SideBarContext } from "@/provider/side-bar-provider";

export default function Menu() {
  const { setIsSideBarOpen } = useContext(SideBarContext);
  return (
    <header className="h-20 w-full flex justify-center items-center">
      <div
        className={
          "w-[340px] sm:w-[540px] md:w-[720px] lg:w-[940px]" +
          " xl:w-[1140px] flex content-around justify-between"
        }
      >
        <Logo className="relative h-12" />
        <button
          onClick={() => setIsSideBarOpen(true)}
          className="my-auto hover:text-primary-500"
        >
          <AiOutlineMenu className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
}
