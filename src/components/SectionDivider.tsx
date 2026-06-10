import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "curve" | "slant";
  flip?: boolean;
}

export function SectionDivider({ variant = "wave", flip = false }: SectionDividerProps) {
  const paths = {
    wave: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    curve: "M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
    slant: "M0,256L1440,96L1440,320L0,320Z",
  };

  return (
    <div className={`relative w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewBox="0 0 1440 320"
        className="w-full h-16 md:h-24"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent) / 0.1)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.1)" />
            <stop offset="100%" stopColor="hsl(var(--accent) / 0.1)" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          fill="url(#dividerGradient)"
          d={paths[variant]}
        />
      </motion.svg>
    </div>
  );
}
