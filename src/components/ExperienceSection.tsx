import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, ChevronRight } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";

const experiences = [
  {
    id: 1,
    organization: "University Tech Club",
    role: "Head of Technology Division",
    duration: "2023 - Present",
    description: "Leading a team of 15+ members in developing campus applications and organizing tech workshops. Successfully delivered 5 major projects including the EduTrack app.",
    achievements: [
      "Led development of 3 mobile applications",
      "Organized 10+ technical workshops",
      "Mentored junior developers",
    ],
    documentation: [
      { src: "/placeholder.svg", alt: "Tech club workshop", caption: "Tech club workshop" },
      { src: "/placeholder.svg", alt: "Campus app development meeting", caption: "Campus app development" },
      { src: "/placeholder.svg", alt: "Mentoring session", caption: "Mentoring session" },
    ],
  },
  {
    id: 2,
    organization: "Student Executive Board",
    role: "IT Staff",
    duration: "2022 - 2023",
    description: "Managed digital infrastructure and developed internal tools for student organization operations.",
    achievements: [
      "Built event registration system",
      "Maintained organization website",
      "Created digital documentation system",
    ],
    documentation: [
      { src: "/placeholder.svg", alt: "Student event registration", caption: "Event registration system" },
      { src: "/placeholder.svg", alt: "Organization website maintenance", caption: "Website maintenance" },
      { src: "/placeholder.svg", alt: "Digital documentation archive", caption: "Digital documentation" },
    ],
  },
  {
    id: 3,
    organization: "Programming Community",
    role: "Core Team Member",
    duration: "2021 - 2022",
    description: "Obtain Junior Web Developer competency certification through a technical assessment covering full-stack web application development",
    achievements: [
      "Demonstrate the ability to build web applications using PHP, HTML, CSS, and MySQL",
      "Implement CRUD operations and database management for information systems",
      "Design responsive web designs and functional user interfaces",
      "Implement best practices in web development and database integration",
    ],
    documentation: [
      { src: "/placeholder.svg", alt: "Coding competition activity", caption: "Coding competition" },
      { src: "/placeholder.svg", alt: "Open-source collaboration", caption: "Open-source collaboration" },
      { src: "/placeholder.svg", alt: "Hackathon participation", caption: "Hackathon participation" },
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
            Leadership roles and contributions in various student organizations
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline line */}
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
                {/* Animated Timeline dot */}
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

                {/* Content */}
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

                    <ImageCarousel
                      images={exp.documentation}
                      imageClassName="h-48 sm:h-56 md:h-64"
                      className="mb-5"
                    />

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
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
