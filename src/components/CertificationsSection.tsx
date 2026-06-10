import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ImageCarousel } from "./ImageCarousel";
import dasarDataScience from "@/assets/certificate/dasar-data-science_page.jpg";
import dasarVisualisasiData from "@/assets/certificate/dasar-visualisasi-data_page.jpg";
import fundamentalAnalisisData from "@/assets/certificate/fundamental-analisis-data_page.jpg";
import fundamentalPemrosesanData from "@/assets/certificate/fundamental-pemrosesan-data_page.jpg";
import juniorWebDeveloper from "@/assets/certificate/junior-web-developer-bpptik.jpeg";
import machineLearningUntukPemula from "@/assets/certificate/machine-learning-untuk-pemula_page.jpg";
import matematikaUntukDataScience from "@/assets/certificate/matematika-untuk-data-science_page.jpg";
import pemrogramanDenganPython from "@/assets/certificate/pemrograman-dengan-python_page.jpg";

const certifications = [
  {
    id: 1,
    title: "Dasar Data Science",
    issuer: "Certificate",
    image: dasarDataScience,
  },
  {
    id: 2,
    title: "Dasar Visualisasi Data",
    issuer: "Certificate",
    image: dasarVisualisasiData,
  },
  {
    id: 3,
    title: "Fundamental Analisis Data",
    issuer: "Certificate",
    image: fundamentalAnalisisData,
  },
  {
    id: 4,
    title: "Fundamental Pemrosesan Data",
    issuer: "Certificate",
    image: fundamentalPemrosesanData,
  },
  {
    id: 5,
    title: "Junior Web Developer",
    issuer: "BPPTIK",
    image: juniorWebDeveloper,
  },
  {
    id: 6,
    title: "Machine Learning untuk Pemula",
    issuer: "Certificate",
    image: machineLearningUntukPemula,
  },
  {
    id: 7,
    title: "Matematika untuk Data Science",
    issuer: "Certificate",
    image: matematikaUntukDataScience,
  },
  {
    id: 8,
    title: "Pemrograman dengan Python",
    issuer: "Certificate",
    image: pemrogramanDenganPython,
  },
];

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const certificationSlides = certifications.map((cert) => ({
    src: cert.image,
    alt: `${cert.title} certificate`,
    caption: `${cert.title} - ${cert.issuer}`,
  }));

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Certifications & Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Certifications, workshops, and competitions that have shaped my skills
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto max-w-5xl"
        >
          <ImageCarousel
            images={certificationSlides}
            imageClassName="h-[24rem] sm:h-[34rem] lg:h-[42rem]"
            imageFitClassName="object-contain"
            className="border-accent/20 bg-white shadow-2xl shadow-primary/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
