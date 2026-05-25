import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-3">
        <span className="w-8 h-1 bg-neutral-400 rounded-full"></span>
        Education
      </h2>
      <div className="space-y-4">
        <div className="glass-card p-6 rounded-2xl flex flex-col hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-white">Bachelor of Science in Software Engineering</h3>
            <span className="text-black text-sm font-medium bg-white px-3 py-1 rounded-full">2024–Present</span>
          </div>
          <p className="text-neutral-400">University of Kelaniya</p>
          <p className="text-sm mt-4 text-white font-semibold pt-1">CGPA: 3.64 / 4.0</p>
          <p className="text-sm mt-4 text-neutral-500 border-t border-white/5 pt-3">
            Specializing in Net-Centric web application development, data science and engineering application, health informatic engineering, business intelligence and management support systems
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-white">GCE Advanced Level</h3>
            <span className="text-black text-sm font-medium bg-white px-3 py-1 rounded-full">2020-2023</span>
          </div>
          <p className="text-neutral-400">Kegalu Balika Vidyalaya</p>
          <p className="text-sm mt-4 text-white font-semibold pt-1">Z-Score: 1.4777</p>
          <p className="text-sm mt-4 text-neutral-500 border-t border-white/5 pt-3">
            Completed coursework in mathematics, chemistry and physics
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
