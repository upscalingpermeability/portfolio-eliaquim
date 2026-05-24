import { motion } from "framer-motion";
import { ChevronRight, Download, ArrowDown } from "lucide-react";
const profileImg = "/profile.jpeg";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Hi, I'm <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
            Shashini
          </span>
        </h1>

        <h3 className="text-xl md:text-2xl text-neutral-400 font-light">
          Software Engineering Undergraduate
        </h3>

        <p className="text-lg text-neutral-400 max-w-lg leading-relaxed">
          I build accessible, user-friendly websites and applications using modern web technologies. Transforming ideas into elegant, purposeful code.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#contact" className="group relative px-6 py-3 bg-white hover:bg-neutral-200 text-black rounded-lg font-medium transition-all flex items-center gap-2 overflow-hidden">
            <span className="relative z-10">Get in Touch</span>
            <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-6 py-3 glass hover:bg-white/10 text-white rounded-lg font-medium transition-all flex items-center gap-2 border border-white/10">
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-neutral-300 to-neutral-800">
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-400 to-neutral-800 blur-2xl opacity-20"></div>
          <img
            src={profileImg}
            alt="Shashini Ruwanthika"
            className="w-full h-full object-cover rounded-full border-4 border-black relative z-10"
            onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Shashini+R&size=512&background=000&color=fff'; }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
