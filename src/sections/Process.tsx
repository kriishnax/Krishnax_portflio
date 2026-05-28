import { motion } from "framer-motion";
import Container from "../components/Container";

const processSteps = [
  {
    number: "1",
    title: "Research",
    description:
      "Understanding requirements, goals, and user needs before starting the design process.",
  },

  {
    number: "2",
    title: "Planning",
    description:
      "Creating layouts, structure, and user flow for a smooth digital experience.",
  },

  {
    number: "3",
    title: "Development",
    description:
      "Building responsive interfaces with clean code and modern technologies.",
  },

  {
    number: "4",
    title: "Launch",
    description:
      "Testing, optimizing, and deploying the final product for real users.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <Container>

        {/* Heading */}
        <div className="mb-20 text-center">
          
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black/40">
            Workflow
          </p>

          <h2
            className="text-4xl font-bold sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "Space Grotesk" }}
          >
            The Process
          </h2>

        </div>

        {/* Process Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative rounded-[32px] border border-black/10 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-black/5 blur-3xl"></div>
              </div>

              {/* Number */}
              <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-black/10 bg-[#F5F5F5] text-4xl font-bold shadow-sm">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-8">
                
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/60">
                  {step.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Process;