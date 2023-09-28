import { BlenderIcon } from "@/icons/blender";
import { CssIcon } from "@/icons/css";
import { GitIcon } from "@/icons/git";
import { HtmlIcon } from "@/icons/html";
import { PhotoshopIcon } from "@/icons/photoshop";
import { ReactIcon } from "@/icons/react";
import { TypeScriptIcon } from "@/icons/typescript";

export function useIcons() {
  const icons = [
    { id: 1, icon: <TypeScriptIcon />, title: "TypeScript" },
    { id: 2, icon: <ReactIcon />, title: "React" },
    { id: 3, icon: <GitIcon />, title: "Git" },
    { id: 4, icon: <HtmlIcon />, title: "HTML5" },
    { id: 5, icon: <CssIcon />, title: "CSS3" },
    { id: 6, icon: <PhotoshopIcon />, title: "Photoshop" },
    { id: 7, icon: <BlenderIcon />, title: "Blender" },
  ];
  return { icons };
}
