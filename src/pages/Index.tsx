import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkExperienceSection } from "@/components/WorkExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SectionDivider } from "@/components/SectionDivider";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />
      <main>
        <HeroSection />
        <SectionDivider variant="wave" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AboutSection />
        </motion.div>
        <SectionDivider variant="curve" flip />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WorkExperienceSection />
        </motion.div>
        <SectionDivider variant="wave" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProjectsSection />
        </motion.div>
        <SectionDivider variant="curve" flip />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ExperienceSection />
        </motion.div>
        <SectionDivider variant="wave" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CertificationsSection />
        </motion.div>
        <SectionDivider variant="curve" flip />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
