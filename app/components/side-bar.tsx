"use client";
import { useContext } from "react";
import NextLink from "next/link";
import { IoMdClose } from "react-icons/io";
import { SideBarContext } from "@/provider/side-bar-provider";
import content from "../../utils/content.json";

export default function SideBar() {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext);

  if (isSideBarOpen)
    return (
      <div
        className={
          "fixed z-50 top-0 left-0 w-full h-full bg-black" +
          " bg-opacity-70 overflow-hidden flex"
        }
      >
        <div className="bg-black bg-opacity-80 max-w-fit p-5 h-full">
          <div className="flex w-full justify-end">
            <button
              onClick={() => setIsSideBarOpen(false)}
              className="ml-auto text-3xl text-white"
            >
              <IoMdClose />
            </button>
          </div>
          <ul className="flex flex-col items-center px-[65px] pt-5">
            {content[9].getting.elements.map(({ text, link }) => (
              <li key={link} className="py-2 leading-7  text-white text-xl">
                <NextLink onClick={() => setIsSideBarOpen(false)} href={link}>
                  {text}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="h-full flex-1"
          onClick={() => setIsSideBarOpen(false)}
        />
      </div>
    );

  return null;
}
