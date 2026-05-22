import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Sports Equipments E-Commerce Platform",
      description:
        "A responsive e-commerce site featuring user authentication, profile management, and interactive product showcases.",
      image: "/images/project2_image.jpg",
      tags: ["HTML/CSS/JS", "PHP", "Git"],
      github:
        "https://github.com/shashini22027/sports_eqiupments_stock",
      demo: "#",
    },
    {
      title: "Bookfair Stall Reservation System",
      description:
        "A comprehensive reservation system featuring vendor registration, stall selection, and payment processing for large-scale bookfair events.",
      image: "/images/project1_image.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github:
        "https://github.com/shashini22027/bookfair-stall-reservation-system",
      demo: "#",
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold">
          <span className="text-neutral-400">Featured </span>
          <span className="text-white">Projects</span>
        </h2>

        <p className="text-neutral-400 text-base">
          Some of my recent collaborative work and applications.
        </p>
      </div>

      {/* Project Card */}
      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl overflow-hidden border border-white/5 bg-[#0f172a] flex flex-col md:flex-row"
          >
            {/* Image */}
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110 brightness-90"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/600x400/111827/ffffff?text=Project+Image";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {projects[currentIndex].title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {projects[currentIndex].description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[currentIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#1e293b] text-xs font-semibold text-neutral-300 rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-6">
                <a
                  href={projects[currentIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-neutral-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repo
                </a>

                <a
                  href={projects[currentIndex].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevProject}
            className="p-3 glass rounded-full hover:bg-white/10 text-white transition-all border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextProject}
            className="p-3 glass rounded-full hover:bg-white/10 text-white transition-all border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-white scale-110"
                  : "bg-neutral-600"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;