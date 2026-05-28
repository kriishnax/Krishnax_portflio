import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

import Container from "../components/Container";

function Footer() {
  return (
    <footer className="relative overflow-hidden pb-10 pt-16">
      <Container>

        <div className="flex flex-col gap-10 border-t border-black/10 pt-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}
          <div>
            
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Krishnax.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-black/50">
              Building modern websites and premium digital experiences with clean design and responsive development.
            </p>

          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">

            {/* Links */}
            <div className="flex gap-5 text-sm font-medium text-black/60">
              <a href="#home" className="hover:text-black">
                Home
              </a>

              <a href="#about" className="hover:text-black">
                About
              </a>

              <a href="#projects" className="hover:text-black">
                Projects
              </a>

              <a href="#contact" className="hover:text-black">
                Contact
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
              >
                <FiGithub />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
              >
                <FiLinkedin />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
              >
                <FiInstagram />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-black/40 md:flex-row md:items-center md:justify-between">
          
          <p>
            © 2026 Krishnax. All rights reserved.
          </p>

          <p>
            Designed & Developed with React + Tailwind CSS
          </p>

        </div>

      </Container>
    </footer>
  );
}

export default Footer;