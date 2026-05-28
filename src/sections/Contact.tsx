import { FiArrowUpRight } from "react-icons/fi";
import Container from "../components/Container";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <Container>

        <div className="rounded-[40px] bg-black px-8 py-16 text-white md:px-14 lg:px-20 lg:py-24">
          
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">
            Contact
          </p>

          <h2
            className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Let’s build something modern and meaningful together.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            I’m always open to discussing new projects, creative ideas,
            and opportunities to create premium digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            
            <a
              href="mailto:yourmail@gmail.com"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:scale-105"
            >
              Send Email
              <FiArrowUpRight />
            </a>

            <a
              href="#projects"
              className="flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              View Projects
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Contact;