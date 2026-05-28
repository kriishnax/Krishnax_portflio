import { motion } from "framer-motion";
import Container from "../components/Container";

const galleryImages = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <Container>

        {/* Heading */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black/40">
              Gallery
            </p>

            <h2
              className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Space Grotesk" }}
            >
              A collection of visuals, concepts, and creative work.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-black/55">
            Scroll through selected visuals showcasing design ideas,
            development work, and modern interface concepts.
          </p>

        </div>

      </Container>

      {/* Scroll Gallery */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        
        <div className="flex w-max gap-6 px-5 lg:px-10">
          
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[36px] border border-black/10 bg-white shadow-sm"
            >
              
              <img
                src={image}
                alt={`gallery-${index}`}
                className="h-[420px] w-[300px] object-cover transition duration-700 group-hover:scale-110 sm:w-[340px] lg:h-[500px] lg:w-[420px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;