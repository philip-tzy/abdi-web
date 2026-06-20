import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  BarChart3,
  Bot,
  Boxes,
  ExternalLink,
  Gamepad2,
  Github,
  Globe,
  GraduationCap,
  Server,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "./TiltCard";
import { ImageCarousel } from "./ImageCarousel";
import skillPathOne from "@/assets/featured-project/skillpath-ai1.png";
import skillPathTwo from "@/assets/featured-project/skillpath-ai2.png";
import skillPathThree from "@/assets/featured-project/skillpath-ai3.png";
import dashboardAnalisisImage from "@/assets/featured-project/dashboard-analisis.png";
import uniNeedsOne from "@/assets/featured-project/unineeds1.png";
import uniNeedsTwo from "@/assets/featured-project/unineeds2.png";
import uniNeedsThree from "@/assets/featured-project/unineeds3.png";
import uniNeedsFour from "@/assets/featured-project/unineeds4.png";
import cleanSortOne from "@/assets/featured-project/cleansort1.png";
import cleanSortTwo from "@/assets/featured-project/cleansort2.png";
import epicorOne from "@/assets/featured-project/epicor1.png";
import epicorTwo from "@/assets/featured-project/epicor2.png";
import epicorThree from "@/assets/featured-project/epicor3.png";
import epicorFour from "@/assets/featured-project/epicor4.png";
import epicorFive from "@/assets/featured-project/epicor5.png";
import epicorSix from "@/assets/featured-project/epicor6.png";
import myRpOne from "@/assets/featured-project/myrp1.png";
import myRpTwo from "@/assets/featured-project/myrp2.png";
import myRpThree from "@/assets/featured-project/myrp3.png";
import aiChemyOne from "@/assets/featured-project/aichemy1.png";
import aiChemyTwo from "@/assets/featured-project/aichemy2.png";
import aiChemyThree from "@/assets/featured-project/aichemy3.png";

const categories = ["All", "Web Apps", "Data Analytics", "Game", "ERP Analysis", "AI/ML"];

const projects = [
  {
    id: 1,
    title: "SkillPath AI",
    description:
      "AI-powered career diagnostic platform that analyzes CVs, identifies skill gaps across seven IT career paths, and provides personalized upskilling recommendations. The system includes custom NLP pipelines with BIO-tagged skill entity recognition, role classification models, and career intelligence insights based on real-world job posting data.",
    image: skillPathOne,
    images: [
      { src: skillPathOne, alt: "SkillPath AI landing page", caption: "Career diagnostic landing page" },
      { src: skillPathTwo, alt: "SkillPath AI analysis page", caption: "CV analysis and career path insight" },
      { src: skillPathThree, alt: "SkillPath AI recommendation page", caption: "Personalized upskilling recommendation" },
    ],
    category: "AI/ML",
    tags: ["NLP", "Machine Learning", "Streamlit", "Python", "CV Analysis"],
    github: "https://github.com/abdurrre/career-diagnostic-system",
    demo: "https://skillpath-ai-delta.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Dashboard Analisis Job Requirement",
    description:
      "End-to-end data analytics project using 8,600+ IT job postings. The project covers data collection, preprocessing, skill normalization, exploratory data analysis, network analysis, and an interactive Streamlit dashboard for career intelligence and machine learning dataset exploration.",
    image: dashboardAnalisisImage,
    images: [
      { src: dashboardAnalisisImage, alt: "Dashboard Analisis Job Requirement preview", caption: "Streamlit analytics dashboard" },
    ],
    category: "Data Analytics",
    tags: ["Streamlit", "Python", "Data Analysis", "EDA", "Network Analysis"],
    github: "https://github.com/philip-tzy/career-diagnostic-dashboard",
    demo: "https://career-diagnostic-dashboard.streamlit.app",
    featured: true,
  },
  {
    id: 3,
    title: "UniNeeds",
    description:
      "Full-stack marketplace web application for student needs with buyer and seller roles. UniNeeds supports registration, login, product management, cart, checkout, payment proof upload, seller verification, shipping flow, order timeline, notifications, and responsive role-based interfaces.",
    image: uniNeedsOne,
    images: [
      { src: uniNeedsOne, alt: "UniNeeds marketplace page", caption: "Marketplace product catalog" },
      { src: uniNeedsTwo, alt: "UniNeeds product detail", caption: "Product and order flow" },
      { src: uniNeedsThree, alt: "UniNeeds seller dashboard", caption: "Seller dashboard" },
      { src: uniNeedsFour, alt: "UniNeeds checkout page", caption: "Checkout and transaction flow" },
    ],
    category: "Web Apps",
    tags: ["FastAPI", "React", "MySQL", "JWT", "SQLAlchemy"],
    github: "https://github.com/philip-tzy/unineeds",
    demo: null,
    featured: true,
  },
  {
    id: 4,
    title: "CleanSort Game",
    description:
      "Web-based educational waste sorting game built for a social project. The game teaches children waste classification through an interactive drag-and-drop mechanism and was implemented directly at a local community reading park.",
    image: cleanSortOne,
    images: [
      { src: cleanSortOne, alt: "CleanSort gameplay screen", caption: "Interactive waste sorting gameplay" },
      { src: cleanSortTwo, alt: "CleanSort result screen", caption: "Learning result and feedback" },
    ],
    category: "Game",
    tags: ["React", "Tailwind CSS", "Vite", "Supabase", "Drag and Drop"],
    github: "https://github.com/philip-tzy/clean-sort",
    demo: "https://cleansort.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "ERP Implementation menggunakan Epicor",
    description:
      "Academic bootcamp project focused on designing and implementing business process solutions in Epicor ERP. The implementation covers procurement, sales, and production processes, including master data setup, purchase cycle, sales order flow, BOM, BOO, MRP, and business process analysis documentation.",
    image: epicorOne,
    images: [
      { src: epicorOne, alt: "Epicor ERP procurement process", caption: "Procurement process configuration" },
      { src: epicorTwo, alt: "Epicor ERP purchase order flow", caption: "Purchase order flow" },
      { src: epicorThree, alt: "Epicor ERP sales process", caption: "Sales order process" },
      { src: epicorFour, alt: "Epicor ERP production setup", caption: "Production setup" },
      { src: epicorFive, alt: "Epicor ERP MRP process", caption: "MRP and planning process" },
      { src: epicorSix, alt: "Epicor ERP implementation result", caption: "Implementation result" },
    ],
    category: "ERP Analysis",
    tags: ["Epicor ERP", "Procurement", "Sales", "Production", "MRP"],
    github: null,
    demo: null,
    featured: false,
  },
  {
    id: 6,
    title: "MyRP",
    description:
      "Full-stack Material Requirements Planning web application for production planning. MyRP combines React 18, Vite, Express.js, Supabase PostgreSQL, and a custom MRP engine with netting, lot sizing, offsetting, BOM explosion, purchase suggestions, and job recommendations.",
    image: myRpOne,
    images: [
      { src: myRpOne, alt: "MyRP dashboard page", caption: "MRP dashboard" },
      { src: myRpTwo, alt: "MyRP master data page", caption: "Master data management" },
      { src: myRpThree, alt: "MyRP MRP engine result", caption: "MRP engine suggestions" },
    ],
    category: "Web Apps",
    tags: ["React", "Express.js", "Supabase", "PostgreSQL", "MRP"],
    github: "https://github.com/philip-tzy/MyRP",
    demo: null,
    featured: false,
  },
  {
    id: 7,
    title: "AIChemy",
    description:
      "Cloud-native AI-driven predictive maintenance platform for food and beverage manufacturing. AIchemy combines IoT sensor data, LSTM-based Remaining Useful Life prediction, XGBoost anomaly classification, real-time dashboards, maintenance alerts, simulator modules, OEE tracking, and SCADA/MES/ERP synchronization concepts.",
    image: aiChemyOne,
    images: [
      { src: aiChemyOne, alt: "AIChemy predictive maintenance dashboard", caption: "Predictive maintenance dashboard" },
      { src: aiChemyTwo, alt: "AIChemy equipment monitoring page", caption: "Equipment monitoring" },
      { src: aiChemyThree, alt: "AIChemy alert and simulation page", caption: "Alerts and simulator module" },
    ],
    category: "AI/ML",
    tags: ["Next.js", "FastAPI", "Supabase", "LSTM", "XGBoost", "IoT"],
    github: "https://github.com/Fahran666/kerry-predictive-pulse",
    demo: "https://kerry-predictive-pulse.vercel.app",
    featured: true,
  },
];

function getCategoryIcon(category: string) {
  switch (category) {
    case "Web Apps":
      return Globe;
    case "Data Analytics":
      return BarChart3;
    case "Game":
      return Gamepad2;
    case "ERP Analysis":
      return Boxes;
    case "AI/ML":
      return Bot;
    case "Academic":
      return GraduationCap;
    case "ERP Projects":
      return Server;
    default:
      return Globe;
  }
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building great software
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category !== "All" && <Icon className="h-4 w-4" />}
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <TiltCard
              key={project.id}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => setSelectedProject(project)}
                className="glass-morphism rounded-2xl overflow-hidden group cursor-pointer h-full"
              >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-contain bg-white p-2 transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/30"
                  whileHover={{ opacity: 0.8 }}
                />
                {project.featured && (
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-accent to-teal-light text-accent-foreground text-xs font-medium shadow-lg"
                  >
                    ✨ Featured
                  </motion.div>
                )}
                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/70 flex items-center justify-center gap-4"
                >
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-background/20 text-primary-foreground hover:bg-background/30 transition-colors backdrop-blur-sm"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-background/20 text-primary-foreground hover:bg-background/30 transition-colors backdrop-blur-sm"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {(() => {
                    const Icon = getCategoryIcon(project.category);
                    return <Icon className="h-4 w-4 text-accent" />;
                  })()}
                  <span className="text-xs text-muted-foreground">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 text-xs rounded-full bg-muted/80 text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
            </TiltCard>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} project details`}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
              className="glass-morphism max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl p-4 shadow-2xl sm:p-6 lg:p-8"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    {(() => {
                      const Icon = getCategoryIcon(selectedProject.category);
                      return <Icon className="h-4 w-4 text-accent" />;
                    })()}
                    {selectedProject.category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-border/50 bg-background/80 text-foreground transition hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                <ImageCarousel
                  images={selectedProject.images}
                  imageClassName="h-64 sm:h-80 lg:h-[28rem]"
                  imageFitClassName="object-contain"
                  className="bg-white"
                />

                <div className="space-y-5">
                  <p className="text-muted-foreground">
                    {selectedProject.description}
                  </p>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs rounded-full bg-muted/80 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                    {selectedProject.github && (
                      <Button variant="outline" className="rounded-full" asChild>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {selectedProject.demo && (
                      <Button className="rounded-full" asChild>
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
