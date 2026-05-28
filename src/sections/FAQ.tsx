import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

import Container from "../components/Container";

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "I mainly work with React, TypeScript, Tailwind CSS, Framer Motion, Node.js, and modern frontend technologies.",
  },

  {
    question: "Do you create fully responsive websites?",
    answer:
      "Yes. Every project is optimized for desktop, tablet, and mobile devices with responsive layouts and clean user experiences.",
  },

  {
    question: "Can you redesign existing websites?",
    answer:
      "Absolutely. I can modernize old websites with improved UI/UX, animations, responsiveness, and cleaner design systems.",
  },

  {
    question: "Do you work on UI/UX design too?",
    answer:
      "Yes. I focus on both frontend development and UI/UX design to create visually engaging and user-friendly experiences.",
  },
];

function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <Container>

        {/* Heading */}
        <div className="mb-16 text-center">
          
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-black/40">
            FAQ
          </p>

          <h2
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Frequently asked questions about my work and development process.
          </h2>

        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-4xl space-y-5">
          
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                layout
                className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm"
              >
                
                {/* Question */}
                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-8"
                >
                  
                  <h3 className="text-lg font-semibold md:text-xl">
                    {faq.question}
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>

                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      
                      <div className="px-6 pb-6 md:px-8 md:pb-8">
                        <p className="max-w-3xl text-base leading-8 text-black/60">
                          {faq.answer}
                        </p>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}

export default FAQ;