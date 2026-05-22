import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(
  localStorage.getItem("theme") === "dark"
);

  useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [isDark]);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass border-b border-white/5 top-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500"
        >
          Shashini
        </motion.div>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {["About", "Education", "Skills", "Projects", "Blog", "Contact"].map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <a href={`#${item.toLowerCase()}`} className="hover:text-white text-neutral-400 transition-colors">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-all"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
