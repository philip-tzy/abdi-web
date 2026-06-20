import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    organization: "Community Of Love (COOL)",
    role: "Public Relation",
    duration: "Nov 2024 - Nov 2025",
    description:
      "Managed external communications and digital content strategies to increase organizational awareness on campus.",
    achievements: [
      "Designed and produced creative content for the organization's social media platforms",
      "Managed social media platforms to build community engagement",
      "Documented organizational activities through photos and videos for publication",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Organizational Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and contributions in student organizations
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-8 top-0 w-px bg-gradient-to-b from-accent via-primary to-accent"
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="relative pl-8 md:pl-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 * index + 0.2 }}
                  className="absolute left-0 md:left-8 w-5 h-5 -translate-x-1/2 rounded-full bg-gradient-to-br from-accent to-teal-light border-4 border-background z-10 shadow-lg shadow-accent/30"
                >
                  <motion.div
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-accent"
                  />
                </motion.div>

                <div>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="glass-morphism rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5"
                      >
                        <Building2 className="h-6 w-6 text-accent" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.organization}
                        </h3>
                        <p className="text-accent font-medium">{exp.role}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.2 * index + 0.1 * i }}
                          className="flex items-center gap-2 text-sm group"
                        >
                          <ChevronRight className="h-4 w-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                          <span className="text-foreground">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}