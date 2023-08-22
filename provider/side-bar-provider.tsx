"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export const SideBarContext = createContext<{
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}>({ isSideBarOpen: false, setIsSideBarOpen: () => {} });

export const SideBarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};
