"use client";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { SideBarContext } from "@/provider/side-bar-provider";
import SideBar from "./side-bar";

export default function BodyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSideBarOpen } = useContext(SideBarContext);
  return (
    <body className={`${isSideBarOpen && "overflow-hidden"}`}>
      <ToastContainer className="[&>*]:!rounded-none"  />
      <SideBar />
      {children}
    </body>
  );
}
