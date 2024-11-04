import Node from "../assets/nodejs.svg";
import React from "../assets/react.svg";
import Tailwind from "../assets/tailwindCss.svg";
import Express from "../assets/express.png";
import TypeScript from "../assets/typescript.svg";
import Adonis from "../assets/adonisJs.svg";
import Mongo from "../assets/mongoDb.svg";
import Postgre from "../assets/postgreSql.svg";

export const techs: CompetenceProps = {
  Frontend: [
    { title: "React", img: React },
    { title: "TypeScript", img: TypeScript },
    { title: "Tailwindcss", img: Tailwind },
  ],

  Backend: [
    { title: "Node.js", img: Node },
    { title: "AdonisJS", img: Adonis },
    { title: "Express.js", img: Express },
  ],

  Database: [
    { title: "PostgreSQL", img: Postgre },
    { title: "MongoDB", img: Mongo },
  ],
};

export interface CompetenceProps {
  Frontend: {
    title: string;
    img: string;
  }[];
  Backend: {
    title: string;
    img: string;
  }[];
  Database: {
    title: string;
    img: string;
  }[];
}
