import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Express from "../assets/express.png";
import Render from "../assets/render.png";
import Vercel from "../assets/vercel.png";
import Netifly from "../assets/netifly.png";

export const techs = {
  frontend: [
    { title: "HTML", img: Html, color: "border-red-200" },
    { title: "CSS", img: Css, color: "border-green-200" },
    { title: "Javascript", img: Javascript, color: "border-blue-200" },
    { title: "Node js", img: Node, color: "border-yellow-200" },
    { title: "React", img: React, color: "border-purple-200" },
    { title: "TypeScript", img: Html, color: "border-pink-200" },
    { title: "tailwindcss", img: Tailwind, color: "border-orange-200" },
  ],

  backend: [
    { title: "Adonis", img: Html, color: "border-teal-200" },
    { title: "Next Js", img: Html, color: "border-cyan-200" },
    { title: "Express", img: Express, color: "border-lime-200" },
    { title: "PostgresSQL", img: Html, color: "border-indigo-200" },
    { title: "MongoDB", img: Mongo, color: "border-indigo-200" },
  ],

  deployment: [
    { title: "Netifly", img: Netifly, color: "border-amber-200" },
    { title: "Vercel", img: Vercel, color: "border-rose-200" },
    { title: "Render", img: Render, color: "border-gray-200" },
  ],
} as const;
