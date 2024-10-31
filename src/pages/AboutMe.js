import React from "react";

const AboutMe = () => {
  return (
    <div className="container about-me">
      <h1>About Me</h1>
      <img
        src="/my-photo.jpg"
        alt="My Photo"
        style={{ width: "200px", borderRadius: "50%", marginBottom: "20px" }}
      />
      <p>
        My name is Karthikeya, and I am a Master's student in the MScDA program
        at Saint Mary's University. I am passionate about data analytics and
        data science.
      </p>
      <p>
        I joined the MCDA program to enhance my skills in data analysis and to
        prepare for a career in this exciting field.
      </p>
    </div>
  );
};

export default AboutMe;
