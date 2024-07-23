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

import type { RefObject } from "react";

interface CompetencesProps {
  competencesRef: RefObject<HTMLDivElement>;
}

const techs = {
  frontend: [
    { title: "HTML", img: Html, color: "text-red-200" },
    { title: "CSS", img: Css, color: "text-green-200" },
    { title: "Javascript", img: Javascript, color: "text-blue-200" },
    { title: "Node js", img: Node, color: "text-yellow-200" },
    { title: "React", img: React, color: "text-purple-200" },
    { title: "TypeScript", img: Html, color: "text-pink-200" },
    { title: "tailwindcss", img: Tailwind, color: "text-orange-200" },
  ],

  backend: [
    { title: "Adonis", img: Html, color: "text-teal-200" },
    { title: "Next Js", img: Html, color: "text-cyan-200" },
    { title: "Express", img: Express, color: "text-lime-200" },
    { title: "PostgresSQL", img: Html, color: "text-indigo-200" },
    { title: "MongoDB", img: Mongo, color: "text-indigo-200" },
  ],

  deployment: [
    { title: "Netifly", img: Netifly, color: "text-amber-200" },
    { title: "Vercel", img: Vercel, color: "text-rose-200" },
    { title: "Render", img: Render, color: "text-gray-200" },
  ],
} as const;

const Competences = ({ competencesRef }: CompetencesProps) => (
  <div
    className="flex flex-grow h-screen flex-col justify-between py-10"
    ref={competencesRef}
  >
    <h1 className="flex justify-center text-8xl font-Merich text-yellow-100 pb-10">
      Compétences
    </h1>

    <div className="flex flex-col gap-10 w-flex-1 items-center">
      <div className="flex w-full gap-4">
        <h2 className="font-Kelsi">Front-End</h2>
        {techs.frontend.map(
          (
            tech: { title: string; img: string; color: string },
            index: number
          ) => (
            <div className="flex items-center gap-3" key={index}>
              <p>{tech.title}</p>
              <img src={tech.img} alt="image logo" className="w-12 h-10" />
            </div>
          )
        )}
      </div>

      <div className="flex w-full gap-4">
        <h2 className="font-Kelsi">Back-End</h2>
        {techs.backend.map(
          (
            tech: { title: string; img: string; color: string },
            index: number
          ) => (
            <div className="flex items-center gap-3" key={index}>
              <p>{tech.title}</p>
              <img src={tech.img} alt="image logo" className="w-10 h-10" />
            </div>
          )
        )}
      </div>

      <div className="flex w-full gap-4">
        <h2 className="font-Kelsi">Déploiement</h2>
        {techs.deployment.map(
          (
            tech: { title: string; img: string; color: string },
            index: number
          ) => (
            <div className="flex items-center gap-3" key={index}>
              <p>{tech.title}</p>
              <img src={tech.img} alt="image logo" className="w-10 h-10" />
            </div>
          )
        )}
      </div>
    </div>

    <div className="border-y-4 border-yellow-100 overflow-x-auto w-full">
      <div className="animate-[defilement_13s_linear_infinite] w-[3780px] flex py-8">
        {[
          ...techs.frontend,
          ...techs.backend,
          ...techs.deployment,
          ...techs.frontend,
          ...techs.backend,
          ...techs.deployment,
        ].map((tech: { title: string; color: string }, index: number) => (
          <div className="flex mr-1 items-center h-7" key={index}>
            <span
              className={`z-10 font-Merich pr-5 pl-1 text-5xl ${tech.color} w-max`}
            >
              {tech.title}
            </span>
            <span className="font-Kelsi text-yellow-100 pr-2 text-2xl">X</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Competences;
