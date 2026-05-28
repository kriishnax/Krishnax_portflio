import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiDatabase,
} from "react-icons/fi";

import Container from "../components/Container";

const services = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    description:
      "Building responsive and modern websites using React, Tailwind CSS, and TypeScript.",
  },

  {
    icon: <FiLayout />,
    title: "UI/UX Design",
    description:
      "Designing clean interfaces with premium layouts, smooth interactions, and strong visual hierarchy.",
  },

  {
    icon: <FiSmartphone />,
    title: "Responsive Design",
    description:
      "Creating layouts optimized for desktop, tablet, and mobile devices with pixel-perfect responsiveness.",
  },

  {
    icon: <FiDatabase />,
    title: "Backend & Database",
    description:
      "Working with APIs, databases, authentication systems, and scalable backend integrations.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <Container>
        
        {/* Heading */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black/40">
              Services
            </p>

            <h2
              className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Creating modern digital experiences with clean design and smooth interactions.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-black/55">
            Focused on building scalable, responsive, and visually engaging websites with modern technologies.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-black/5 blur-3xl"></div>
              </div>

              {/* Icon */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-2xl text-white">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-8">
                
                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-black/60">
                  {service.description}
                </p>

              </div>

              {/* Bottom Line */}
              <div className="relative z-10 mt-10 h-[1px] w-full bg-black/10"></div>

              {/* Learn More */}
              <div className="relative z-10 mt-5 flex items-center justify-between">
                
                <span className="text-sm font-medium text-black/50">
                  Modern Solution
                </span>

                <button className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
                  Explore
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </Container>
    </section>
  );
}

export default Services;