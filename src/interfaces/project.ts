import { StaticImageData } from "next/image";

export interface project {
  title: string,
  description: string,
  image: StaticImageData,
  tags: string[ ],
  live: string,
  github: string,
};
