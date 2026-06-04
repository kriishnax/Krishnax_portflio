import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import Container from "../components/Container";

const projects = [
  {
   title: "Travito – Your AI Travel Buddy",

description:
  "An AI-powered travel planning application that helps users create personalized itineraries, discover destinations, manage bookings, and organize trips through intelligent recommendations and a seamless mobile experience.",

image: "/proj3.png",

tech: [
  "React Native",
  "TypeScript",
  "Firebase",
  "AI Integration",
],

live: "#",
github: "https://github.com/kriishnax/Travito",
  },

  {
    title: "Creative Agency Landing Page",
    description:
      "A modern agency-style landing page with advanced layouts, elegant typography, and interactive hover effects.",

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",

    tech: ["Vite", "TypeScript", "GSAP"],

    live: "#",
    github: "#",
  },

  {
    title: "AI Dashboard Interface",
    description:
      "A clean dashboard experience with data visualization, responsive components, and premium UI interactions.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

    tech: ["React", "Chart.js", "Node.js"],

    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <Container>
        
        {/* Heading */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black/40">
              Projects
            </p>

            <h2
              className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Selected work focused on modern UI and premium digital experiences.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-black/55">
            A collection of projects built with modern technologies,
            responsive design systems, and smooth user interactions.
          </p>

        </div>

        {/* Projects */}
        <div className="space-y-12">
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`grid items-center gap-10 overflow-hidden rounded-[40px] border border-black/10 bg-white p-6 shadow-sm lg:p-10 ${
                index % 2 === 0
                  ? "lg:grid-cols-[1.1fr_0.9fr]"
                  : "lg:grid-cols-[0.9fr_1.1fr]"
              }`}
            >
              
              {/* IMAGE */}
              <div
                className={`relative overflow-hidden rounded-[32px] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                
                <div className="group relative overflow-hidden rounded-[32px]">
                  
                  <img
                    src={`${project.image}?auto=format&fit=crop&w=1200&q=80`}
                    alt={project.title}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110 lg:h-[420px]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                
                {/* Project Number */}
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black/40">
                  Project {index + 1}
                </p>

                {/* Title */}
                <h3
                  className="text-3xl font-bold leading-tight sm:text-4xl"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">
                  
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-black/10 bg-[#F5F5F5] px-4 py-2 text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  
                  <a
                    href={project.live}
                    className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
                  >
                    Live Preview
                    <FiArrowUpRight />
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
                  >
                    Github
                    <FiGithub />
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </Container>
    </section>
  );
}

export default Projects;