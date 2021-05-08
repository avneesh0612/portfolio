import React from "react";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = ({ data }) => {
  AOS.init();
  if (data) {
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div
          data-aos="fade-down-left"
          data-aos-delay="200"
          data-aos-duration="900"
          className="nine columns main-col"
        >
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up-right"
        data-aos-delay="200"
        data-aos-duration="900"
        className="row skill"
      >
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Resume;
