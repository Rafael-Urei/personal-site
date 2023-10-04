import { ReactNode } from "react";

export type SideMenuProps = {
  children: ReactNode;
};

export interface SideMenuData {
  isOpen: boolean;
  toggleSideMenu: () => void;
}
