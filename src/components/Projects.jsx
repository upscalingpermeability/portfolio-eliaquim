import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, GitBranch } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Bookfair Stall Reservation System",
    subtitle: "Fullstack Web Application",
    description:
      "A comprehensive reservation system featuring vendor registration, stall selection, and payment processing for large-scale bookfair events.",
    image: "/images/project1_image.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/shashini22027/bookfair-stall-reservation-system",
    demo: "#",
  },
  {
    title: "Sports Equipments E-Commerce Platform",
    subtitle: "E-Commerce Application",
    description:
      "A responsive e-commerce site featuring user authentication, profile management, and interactive product showcases.",
    image: "/images/project2_image.jpg",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/shashini22027/sports_eqiupments_stock",
    demo: "#",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((index) => (index + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((index) =>
      index === 0 ? projects.length - 1 : index - 1
    );
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-10"
    >
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured Projects
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.article
            key={currentProject.title}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="block w-full aspect-[16/10] object-cover"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://placehold.co/960x600/111827/ffffff?text=Project+Image";
                }}
              />
            </div>

            <div className="space-y-7">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-neutral-400">
                {currentProject.subtitle}
              </p>

              <h3 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                {currentProject.title}
              </h3>

              <p className="text-lg leading-8 text-neutral-400">
                {currentProject.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white hover:text-black"
                  aria-label={`${currentProject.title} GitHub repository`}
                >
                  <GitBranch className="h-5 w-5" />
                </a>

                {currentProject.demo !== "#" && (
                  <a
                    href={currentProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white hover:text-black"
                    aria-label={`${currentProject.title} live demo`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="mt-10 flex justify-center gap-4">
          <button
            type="button"
            onClick={prevProject}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:bg-white hover:text-black"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={nextProject}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:bg-white hover:text-black"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
