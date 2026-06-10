import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const colors = [
      'hsl(var(--accent))',
      'hsl(var(--primary))',
      'hsl(var(--accent) / 0.5)',
    ];

    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = window.innerWidth < 768 ? 30 : 50;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
            <polygon 
              points="25,0 50,14.4 50,38.6 25,53 0,38.6 0,14.4" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
              className="text-foreground"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, particle.speedX * 100, 0],
            y: [0, particle.speedY * 100, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Mouse interaction glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity } }}
        className="absolute top-1/4 left-1/4 w-16 h-16 border border-accent/10 rotate-45"
      />
      <motion.div
        animate={{ rotate: -360, y: [0, 20, 0] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity } }}
        className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
        className="absolute top-1/2 right-1/3 w-12 h-12"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          border: '1px solid hsl(var(--accent) / 0.1)',
        }}
      />
    </div>
  );
}
