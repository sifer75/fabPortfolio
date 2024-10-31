import Node from "../assets/nodejs.svg";
import React from "../assets/react.svg";
import Tailwind from "../assets/tailwindCss.svg";
import Express from "../assets/express.png";
import TypeScript from "../assets/typescript.svg";
import Adonis from "../assets/adonisJs.svg";
import Mongo from "../assets/mongoDb.svg";
import Postgre from "../assets/postgreSql.svg";

export const techs = {
  frontend: [
    { title: "React", img: React, color: "border-purple-200" },
    { title: "TypeScript", img: TypeScript, color: "border-pink-200" },
    { title: "Tailwind CSS", img: Tailwind, color: "border-orange-200" },
  ],

  backend: [
    { title: "Node js", img: Node, color: "border-yellow-200" },
    { title: "Adonis", img: Adonis, color: "border-teal-200" },
    { title: "Express", img: Express, color: "border-lime-200" },
  ],

  database: [
    { title: "PostgreSQL", img: Postgre, color: "border-indigo-200" },
    { title: "MongoDB", img: Mongo, color: "border-indigo-200" },
  ],
};
