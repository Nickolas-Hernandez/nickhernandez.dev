import { StaticImageData } from "next/image";

export interface icons {
  [key: string]: icon;
}

export interface icon {
  title: string,
  icon: StaticImageData,
};
