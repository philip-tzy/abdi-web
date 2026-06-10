import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Lightbulb, Heart } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { Reveal, TextReveal } from "./RevealAnimations";

const skillCategories = [
  {
    title: "Development Skills",
    skills: [
      { name: "Flutter/Dart", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "Mobile Development", level: 88 },
      { name: "Full-stack Development", level: 80 },
      { name: "UI/UX Design", level: 82 },
    ],
  },
  {
    title: "ERP & Business Systems",
    skills: [
      { name: "ERP Implementation", level: 85 },
      { name: "Epicor Configuration", level: 88 },
      { name: "Business Process Optimization", level: 80 },
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      { name: "Database Management", level: 82 },
      { name: "System Integration", level: 78 },
      { name: "Technical Documentation", level: 85 },
    ],
  },
];

const interests = [
  { icon: Code, title: "Software Development", description: "Building elegant solutions" },
  { icon: Lightbulb, title: "Innovation", description: "Exploring new technologies" },
  { icon: GraduationCap, title: "Learning", description: "Continuous improvement" },
  { icon: Heart, title: "Community", description: "Giving back to others" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Get to know me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a love for creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Hello! I'm a student based in Cikarang, West Java
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I am an Information Systems student with a strong interest in Data Science,
                    ERP systems, and Software Development. Through my academic journey and
                    project experience, I have developed a solid foundation in programming,
                    data analysis, database management, and business process understanding.
                  </p>

                  <p>
                    My interest in technology comes from the desire to build solutions that are
                    not only functional, but also useful for solving real business and
                    organizational problems. I enjoy exploring how data can be transformed into
                    insights, how ERP systems can improve business processes, and how software
                    applications can support better decision-making.
                  </p>

                  <p>
                    I am continuously learning and improving my skills in web development,
                    data-driven systems, and enterprise technology. I am especially interested
                    in projects that combine software development, data analysis, and business
                    process integration.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  Education
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Bachelor of Information System</p>
                    <p className="text-muted-foreground text-sm">President University • 2024 - Present</p>
                  </div>
                </div>
              </div>
            </div>

           
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + catIndex * 0.15 }}
                className="glass-morphism rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + catIndex * 0.1 + index * 0.05 }}
                      className="skill-tag"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        
        </div>
           {/* Interest cards with 3D tilt */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {interests.map((interest, index) => (
                <Reveal key={interest.title} direction="up" delay={0.4 + index * 0.1}>
                  <TiltCard className="h-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-morphism rounded-xl p-4 text-center h-full"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <interest.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                      </motion.div>
                      <h5 className="font-medium text-foreground text-sm">{interest.title}</h5>
                      <p className="text-muted-foreground text-xs mt-1">{interest.description}</p>
                    </motion.div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
      </div>
    </section>
  );
}
