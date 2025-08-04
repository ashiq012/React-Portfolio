import React from "react";
import ProjectCard from "./ProjectCard";
import auth from '../../assets/logo/auth.png'
import weather from '../../assets/logo/weather.png'
import crypto from '../../assets/logo/crpto.png'
function Projects() {
  const projectData = [
    {
      title: "User Authentication App",
      main: "MERN stack app with JWT authentication and protected routes.",
      demoLink: "",
      sourceLink: "https://github.com/ashiq012/auth-app",
      image: auth,
    },
    {
      title: "Weather App",
      main: "React weather app using OpenWeather API with live updates.",
      demoLink: "https://shiny-valkyrie-48c1ea.netlify.app/",
      sourceLink: "https://github.com/ashiq012/Weather-app",
      image: weather,
    },
    {
      title: "Crypto Dashboard",
      main: "Real-time cryptocurrency dashboard with charts & APIs.",
      demoLink: "https://crypto-analyst-nine.vercel.app/",
      sourceLink: "https://github.com/ashiq012/crypto-analyst",
      image: crypto,
    },
  ];

  return (
    <section className="px-4 md:px-12 py-8" id="Projects">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        🚀 My Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
