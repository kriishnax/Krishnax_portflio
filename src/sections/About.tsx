import { motion } from "framer-motion";
import Container from "../components/Container";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32"
    >
      <Container>
        
        {/* Top Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black/40">
            About Me
          </p>

          <h2
            className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Designing clean interfaces and building modern digital experiences.
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            
            {/* Background */}
            <div className="absolute inset-0 rounded-[40px] bg-black/5 blur-3xl"></div>

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[40px] border border-black/10 bg-white p-4 shadow-xl">
              
              <img
                src="/your-image2.jpg"
                alt="about"
                className="h-[500px] w-full rounded-[28px] object-cover"
              />

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            
            <p className="text-base leading-8 text-black/60 md:text-lg">
              I’m a creative frontend developer passionate about building
              modern websites with premium user experiences. I focus on
              responsive design, smooth interactions, and clean scalable code.
            </p>

            <p className="mt-6 text-base leading-8 text-black/60 md:text-lg">
              My goal is to create interfaces that feel simple, elegant,
              and visually engaging while maintaining performance and usability.
            </p>

            {/* Info Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-3xl font-bold">2+</h3>
                <p className="mt-2 text-sm text-black/50">
                  Years Learning & Building
                </p>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-3xl font-bold">20+</h3>
                <p className="mt-2 text-sm text-black/50">
                  Creative Projects
                </p>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="mt-2 text-sm text-black/50">
                  Technologies Used
                </p>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="mt-2 text-sm text-black/50">
                  Responsive Focused
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default About;