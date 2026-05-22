import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, Clock, ChevronLeft } from "lucide-react";

const Blog = () => {
  const [startIndex, setStartIndex] = useState(0);

  const articles = [
    {
      title: "Building ShashiniOS: My First 16-Bit Operating System from Scratch",
      excerpt:
        "A simple 16-bit operating system built completely from scratch using Assembly language.",
      image: "/images/article1_image.jpg",
      readTime: "3 min read",
      date: "Jun 25, 2025",
    },
    {
      title: "DevOps Essentials: A Beginner-Friendly Guide",
      excerpt:
        "Learn how DevOps helps companies release updates quickly and efficiently.",
      image: "/images/article2_image.jpg",
      readTime: "4 min read",
      date: "May 3, 2025",
    },
    {
      title: "Understanding Software Licensing",
      excerpt:
        "Understand software licenses and how they control modification and distribution.",
      image: "/images/article3_image.jpg",
      readTime: "4 min read",
      date: "Apr 30, 2025",
    },
    {
      title: "MySQL Stored Procedures Guide",
      excerpt:
        "Learn how stored procedures help organize SQL queries efficiently.",
      image: "/images/article4_image.jpg",
      readTime: "5 min read",
      date: "Jan 27, 2025",
    },
    {
      title: "CIA Triad in Cyber Security",
      excerpt:
        "Confidentiality, Integrity, and Availability explained simply.",
      image: "/images/article5_image.jpg",
      readTime: "9 min read",
      date: "Jul 17, 2024",
    },
  ];

  const nextArticles = () => {
    setStartIndex((prev) =>
      prev + 1 >= articles.length ? 0 : prev + 1
    );
  };

  const prevArticles = () => {
    setStartIndex((prev) =>
      prev === 0 ? articles.length - 1 : prev - 1
    );
  };

  const getVisibleArticles = () => {
    const visible = [];

    for (let i = 0; i < 3; i++) {
      visible.push(articles[(startIndex + i) % articles.length]);
    }

    return visible;
  };

  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
          <span className="w-8 h-1 bg-neutral-300 rounded-full"></span>
          Latest Articles
        </h2>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={prevArticles}
            className="p-2 glass rounded-full hover:bg-white/10 text-white transition-all border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextArticles}
            className="p-2 glass rounded-full hover:bg-white/10 text-white transition-all border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {getVisibleArticles().map((article) => (
            <motion.div
              key={article.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer border border-white/5"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-90"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400/111827/ffffff?text=Blog+Image";
                  }}
                />

                {/* Read Time */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-2">
                  {article.date}
                </span>

                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-neutral-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white font-semibold flex items-center gap-1">
                    Read More
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 pt-4">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setStartIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              startIndex === index
                ? "bg-white scale-110"
                : "bg-neutral-600"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Blog;