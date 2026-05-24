import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    title: "Building ShashiniOS: My First 16-Bit Operating System from Scratch",
    excerpt:
      "A simple 16-bit OS built using Assembly, NASM, and QEMU. Demonstrates the basics of bootloaders, BIOS interrupts, and kernel CLI logic.",
    image: "/images/article1_image.jpg",
    tags: ["OS", "Assembly", "NASM"],
    readTime: "3 min read",
    date: "Jun 25, 2025",
  },
  {
    title: "DevOps Essentials: A Beginner-Friendly Guide",
    excerpt:
      "A comprehensive look at DevOps culture, CI/CD practices, and how automation and the cloud are transforming software delivery.",
    image: "/images/article2_image.jpg",
    tags: ["DevOps", "CI/CD", "Cloud"],
    readTime: "4 min read",
    date: "May 3, 2025",
  },
  {
    title: "MySQL Stored Procedures: A Practical Guide",
    excerpt:
      "Learn how to package SQL statements into stored procedures to improve execution speed, reusability, and security in your database operations.",
    image: "/images/article4_image.jpg",
    tags: ["MySQL", "Database", "SQL"],
    readTime: "5 min read",
    date: "Jan 27, 2025",
  },
  {
    title: "Understanding Software Licensing",
    excerpt:
      "Explore the world of software licenses, from Public Domain to Proprietary, and why they are essential for developers and users alike.",
    image: "/images/article3_image.jpg",
    tags: ["Software", "Licensing", "Legal"],
    readTime: "4 min read",
    date: "Apr 30, 2025",
  },
  {
    title: "Understanding the CIA Triad in Cyber Security",
    excerpt:
      "A foundational security concept covering Confidentiality, Integrity, and Availability.",
    image: "/images/article5_image.jpg",
    tags: ["Cybersecurity", "CIA Triad", "Security"],
    readTime: "9 min read",
    date: "Jul 17, 2024",
  },
];

const Blog = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleArticles = Array.from({ length: 3 }, (_, index) => {
    return articles[(startIndex + index) % articles.length];
  });

  const nextArticles = () => {
    setStartIndex((index) => (index + 1) % articles.length);
  };

  const prevArticles = () => {
    setStartIndex((index) =>
      index === 0 ? articles.length - 1 : index - 1
    );
  };

  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative space-y-8"
    >
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold text-white">Latest Articles</h2>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={prevArticles}
          className="absolute left-0 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-[#111827]/80 text-white backdrop-blur transition-colors hover:bg-white hover:text-black md:inline-flex"
          aria-label="Previous articles"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleArticles.map((article) => (
              <motion.article
                key={article.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="block h-56 w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://placehold.co/800x500/111827/ffffff?text=Article+Image";
                  }}
                />

                <div className="space-y-5 p-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-neutral-400">
                    <span>{article.date}</span>
                    <span aria-hidden="true">•</span>
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold leading-snug text-white">
                    {article.title}
                  </h3>

                  <p className="text-base leading-7 text-neutral-400">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={nextArticles}
          className="absolute right-0 top-1/2 z-10 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-[#111827]/80 text-white backdrop-blur transition-colors hover:bg-white hover:text-black md:inline-flex"
          aria-label="Next articles"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 md:hidden">
        <button
          type="button"
          onClick={prevArticles}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white"
          aria-label="Previous articles"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={nextArticles}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white"
          aria-label="Next articles"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </motion.section>
  );
};

export default Blog;
