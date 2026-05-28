import { motion } from "framer-motion";

const techStack = [
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Node.js",
];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44"
    >
      {/* Background Glow */}
      <div className="absolute left-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-black/5 blur-3xl"></div>

      <div className="absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-black/5 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium shadow-sm backdrop-blur-xl">
            ✦ Creative Frontend Developer
          </div>

          {/* Heading */}
          <h1
            className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[96px]"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Building
            <span className="block bg-gradient-to-r from-black to-black/40 bg-clip-text text-transparent">
              Premium Web
            </span>

            <span className="block">
              Experiences
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-8 text-black/60 md:text-lg">
            I create modern websites and digital experiences focused on
            smooth interactions, premium UI, and responsive development.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            
            <a
              href="#projects"
              className="flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition duration-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-medium transition duration-300 hover:bg-black hover:text-white"
            >
              Let’s Talk
            </a>

          </div>

          {/* Tech Pills */}
          <div className="mt-12 flex flex-wrap gap-3">
            
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium shadow-sm"
              >
                {tech}
              </motion.div>
            ))}

          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            
            <div>
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="mt-1 text-sm text-black/50">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="mt-1 text-sm text-black/50">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="mt-1 text-sm text-black/50">
                Responsive
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          
          {/* Glow */}
          <div className="absolute h-[450px] w-[450px] rounded-full bg-black/5 blur-3xl"></div>

          {/* Main Card */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="relative  rounded-[40px] border border-black/10 bg-white p-4 shadow-2xl"
          >
            
            <img
              src="/your-image.jpg"
              alt="profile"
              className="h-[520px] w-full rounded-[32px] object-cover lg:w-[430px]"
            />

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
             className="absolute left-4 top-6 rounded-3xl border border-black/10 bg-white px-4 py-3 shadow-xl backdrop-blur-xl sm:left-6 sm:top-8 lg:left-[-30px] lg:top-10"
            >
              
              <p className="text-xs text-black/50">
                Frontend
              </p>

              <h4 className="mt-1 text-base font-semibold sm:text-lg">
                React Developer
              </h4>

            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute bottom-6 right-4 rounded-3xl border border-black/10 bg-white px-4 py-3 shadow-xl backdrop-blur-xl sm:bottom-8 sm:right-6 lg:bottom-10 lg:right-[-20px]"
            >
              
              <p className="text-xs text-black/50">
                Specialized In
              </p>

              <h4 className="mt-1 text-base font-semibold sm:text-lg">
                UI/UX & Motion
              </h4>

            </motion.div>

          </motion.div>
        </motion.div>

      </div>

      {/* Marquee */}
      <div className="mt-24 overflow-hidden border-y border-black/10 py-6">
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-14 px-10 text-2xl font-semibold text-black/30"
              style={{ fontFamily: "Space Grotesk" }}
            >
              <span>Modern UI</span>
              <span>Responsive Design</span>
              <span>React Development</span>
              <span>Creative Portfolio</span>
              <span>Premium Experience</span>
            </div>
          ))}

        </motion.div>
      </div>

    </section>
  );
}

export default Hero;