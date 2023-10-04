"use client";

import { SideMenuProps, SideMenuData } from "@/types/side-menu-types";
import { createContext, useCallback, useContext, useState } from "react";

const SideMenuContext = createContext({} as SideMenuData);

export const useSideMenu = () => {
  return useContext(SideMenuContext);
};

export function AppSideMenuProvider({ children }: SideMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSideMenu = useCallback(() => {
    setIsOpen((previous) => !previous);
  }, []);

  return (
    <SideMenuContext.Provider value={{ isOpen, toggleSideMenu }}>
      {children}
    </SideMenuContext.Provider>
  );
}
