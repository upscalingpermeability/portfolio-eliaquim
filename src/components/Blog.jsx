import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, Clock, ChevronLeft } from "lucide-react";
import article1Img from "../assets/article1_image.jpg";
import article2Img from "../assets/article2_image.jpg";
import article3Img from "../assets/article3_image.jpg";
import article4Img from "../assets/article4_image.jpg";
import article5Img from "../assets/article5_image.jpg";

const Blog = () => {
  const [startIndex, setStartIndex] = useState(0);
  
  const articles = [
    {
      title: "Building ShashiniOS: My First 16-Bit Operating System from Scratch",
      excerpt: "A simple 16-bit operating system built completely from scratch using Assembly language. It runs in real mode and demonstrates OS basics.",
      image: article1Img,
      readTime: "3 min read",
      date: "Jun 25, 2025"
    },
    {
      title: "DevOps Essentials: A Beginner-Friendly Guide",
      excerpt: "If you've ever wondered how big tech companies release updates so quickly, the answer is likely DevOps. Here's a cultural and technical guide.",
      image: article2Img,
      readTime: "4 min read",
      date: "May 3, 2025"
    },
    {
      title: "Understanding Software Licensing: From Freedom to Restriction",
      excerpt: "Behind the code is a fascinating concept that governs modification and distribution. Understanding licenses is essential for any developer.",
      image: article3Img,
      readTime: "4 min read",
      date: "Apr 30, 2025"
    },
    {
      title: "MySQL Stored Procedures: A Practical Guide",
      excerpt: "Stored procedures are a collection of SQL statements preserved in the database for subsequent use. Ideal for complex calculations.",
      image: article4Img,
      readTime: "5 min read",
      date: "Jan 27, 2025"
    },
    {
      title: "CIA Triad in Cyber Security",
      excerpt: "Confidentiality, integrity, and availability are foundational concepts for anyone working in information security.",
      image: article5Img,
      readTime: "9 min read",
      date: "Jul 17, 2024"
    }
  ];

  const nextArticles = () => {
    setStartIndex((prev) => (prev + 1 >= articles.length ? 0 : prev + 1));
  };

  const prevArticles = () => {
    setStartIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  // Get visible articles (handle wrapping)
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
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <span className="w-8 h-1 bg-neutral-300 rounded-full"></span>
          Latest Articles
        </h2>
        <div className="flex gap-2">
          <button onClick={prevArticles} className="p-2 glass rounded-full hover:bg-white/10 text-white transition-all border border-white/10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextArticles} className="p-2 glass rounded-full hover:bg-white/10 text-white transition-all border border-white/10">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {getVisibleArticles().map((article, idx) => (
            <motion.div
              key={article.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer border border-white/5"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-2">{article.date}</span>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-neutral-300 transition-colors">{article.title}</h3>
                <p className="text-neutral-400 text-sm mb-6 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white font-semibold flex items-center gap-1">
                    Read More <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Blog;
