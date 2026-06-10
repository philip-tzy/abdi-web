import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Calendar, MapPin, ChevronRight } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import blockdevOne from "@/assets/workshop-experience/blockdev/blockdev1.jpeg";
import bpptikOne from "@/assets/workshop-experience/bpptik/bpptik1.jpg";
import bpptikTwo from "@/assets/workshop-experience/bpptik/bpptik2.jpeg";
import dicodingOne from "@/assets/workshop-experience/dicoding/dicoding1.png";
import dicodingTwo from "@/assets/workshop-experience/dicoding/dicoding2.png";
import dicodingThree from "@/assets/workshop-experience/dicoding/dicoding3.png";
import dicodingFour from "@/assets/workshop-experience/dicoding/dicoding4.png";
import dicodingFive from "@/assets/workshop-experience/dicoding/dicoding5.png";

const workshopExperiences = [
  {
    id: 1,
    company: "BlockDevId",
    position: "Artificial Intelligence Workshop",
    duration: "2026 - Present",
    location: "Bekasi, West Java",
    description: "Participated in an Artificial Intelligence workshop focused on understanding practical AI concepts and applying Python for intelligent solutions.",
    responsibilities: [
      "Learned foundational AI concepts and real-world use cases",
      "Explored Python-based workflows for AI experimentation",
      "Practiced problem-solving through guided workshop activities",
      "Discussed implementation ideas with mentors and participants",
    ],
    technologies: ["Python"],
    documentation: [
      { src: blockdevOne, alt: "BlockDevId Artificial Intelligence workshop documentation", caption: "Artificial Intelligence workshop" },
    ],
  },
  {
    id: 2,
    company: "Dicoding",
    position: "Coding Camp Scholarship By DBS Foundation",
    duration: "2026",
    location: "Online",
    description: "Recipient of the DBS Foundation Coding Camp Scholarship in the Data Scientist learning pathway",
    responsibilities: [
      "Gain hands-on experience in Python-based data analysis, statistics, and data processing",
      "Study using the reading modules provided by Dicoding",
      "Participate in weekly online learning sessions with professional mentors",
      "Complete a capstone project with a team, each member taking on different roles",
    ],
    technologies: ["Python", "Streamlit",],
    documentation: [
      { src: dicodingOne, alt: "Dicoding coding camp documentation 1", caption: "Coding Camp learning progress" },
      { src: dicodingTwo, alt: "Dicoding coding camp documentation 2", caption: "Data Scientist pathway" },
      { src: dicodingThree, alt: "Dicoding coding camp documentation 3", caption: "Online learning activity" },
      { src: dicodingFour, alt: "Dicoding coding camp documentation 4", caption: "Mentoring session" },
      { src: dicodingFive, alt: "Dicoding coding camp documentation 5", caption: "Capstone preparation" },
    ],
  },
  {
    id: 3,
    company: "BPPTIK ",
    position: "Junior Web Developer Training",
    duration: "2025",
    location: "Kab Bekasi, West Java",
    description: "Obtain Junior Web Developer competency certification through a technical assessment covering full-stack web application development",
    responsibilities: [
      "Demonstrate the ability to build web applications using PHP, HTML, CSS, and MySQL",
      "Implement CRUD operations and database management for information systems",
      "Design responsive web designs and functional user interfaces",
      "Implement best practices in web development and database integration",
    ],
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
    documentation: [
      { src: bpptikOne, alt: "BPPTIK Junior Web Developer training documentation", caption: "Junior Web Developer training" },
      { src: bpptikTwo, alt: "BPPTIK Junior Web Developer certification", caption: "Junior Web Developer certification" },
    ],
  },
];

export function WorkExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Learning Path
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Workshop Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Workshops and training programs that strengthened my technical foundation
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
            {workshopExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="relative pl-8 md:pl-20"
              >
                {/* Animated Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 * index + 0.3 }}
                  className="absolute left-0 md:left-8 w-4 h-4 -translate-x-1/2 rounded-full bg-accent border-4 border-background z-10 shadow-lg shadow-accent/50"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-accent/50"
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-morphism rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 hidden sm:block"
                      >
                        <BookOpen className="h-6 w-6 text-accent" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.position}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {exp.documentation.length > 0 && (
                    <ImageCarousel
                      images={exp.documentation}
                      imageClassName="h-56 sm:h-72 md:h-80 lg:h-96"
                      imageFitClassName="object-contain"
                      className="mb-5 border-accent/20 bg-white shadow-lg shadow-primary/5"
                    />
                  )}

                  <div className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 * index + 0.1 * i }}
                        className="flex items-start gap-2 text-sm group"
                      >
                        <ChevronRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                        <span className="text-foreground">{resp}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="skill-tag cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
