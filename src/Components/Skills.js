import React, { useState } from "react";
import "./Skills.css";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

function Skills() {
  const containers = ["React", "Redux", "Firebase", "Tailwind", "NextJS"];
  const [parent, setParent] = useState(null);

  const skillMap = {
    React: {
      text:
        "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    Redux: {
      text:
        "Redux is a Predictable State Container for JS Apps. Which gives us a global state for our apps",
      image: "http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
    },
    Firebase: {
      text:
        "Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform",
      image:
        "https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png",
    },
    Tailwind: {
      text:
        "Tailwind is a css framework for faster CSS. Which allows us to write css within the same file as HTML",
      image:
        "https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg",
    },
    NextJS: {
      text:
        "Next.js is a framework for react which supports serverside rendering static site generation and a lot more",
      image: "https://cdn.worldvectorlogo.com/logos/nextjs-3.svg",
    },
  };

  function handleDragEnd(event) {
    const { over, active } = event;
    setParent(over ? active.id : null);
  }

  const draggableMarkup = (id) => (
    <Draggable id={id}>
      <img
        className="skill__skillLogo"
        src={skillMap[id].image}
        alt=""
      />
    </Draggable>
  );

  return (
    <div className="skill">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="skill__skills">
          {containers.map((id) => (id !== parent ? draggableMarkup(id) : null))}
        </div>
        {parent ? (
          <h3 className="skill__skillInstruction">
            Click a logo to reset or drag another to view more information
          </h3>
        ) : null}

        <Droppable key={"abcdef"} id={"abcdef"}>
          {parent === null ? (
            <div className="skill__infoBox skill__infoBox--inactive">
              <h3>Click & Drag a logo here to display more info...</h3>
            </div>
          ) : (
            <div className="skill__infoBox">
              <img
                className="skill__skillLogo"
                src={skillMap[parent].image}
                alt=""
              />
              <h2>{parent}</h2>
              <h5>{skillMap[parent].text}</h5>
            </div>
          )}
        </Droppable>
      </DndContext>
    </div>
  );
}

export default Skills;
