import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleField } from "./ParticleField";
import image from "../assets/image.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static particle background */}
      <ParticleField />

      {/* Static gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl" />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--primary)/0.1),transparent_50%)]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism text-accent text-sm font-medium mb-6">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span
                className="gradient-text inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Abdi Fhilipus Tampubolon
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              ERP, Software Developer, Data Science & AI Enthusiast
            </p>

            <p className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 mb-8">
              Passionate about developing digital solutions and exploring ERP systems to improve business processes, data analysis, and operational efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-gradient-to-r from-accent to-teal-light hover:opacity-90 text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>

            </div>
          </div>

          {/* Avatar/Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Static rings */}
              <div className="absolute inset-0 -m-6 rounded-full border border-accent/30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent" />
              </div>

              <div className="absolute inset-0 -m-12 rounded-full border border-primary/20">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="absolute inset-0 -m-20 rounded-full border border-border/40 border-dashed" />

              {/* Main image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-visible">
                {/* Layer 1: lingkaran utama, tetap menutup bagian bawah gambar */}
                <div className="absolute inset-0 rounded-full overflow-hidden glass-morphism">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary/30" />

                  <img
                    src={image}
                    alt="Abdi Fhilipus Tampubolon"
                    className="absolute left-1/2 bottom-0 h-[112%] w-auto max-w-none -translate-x-1/2 object-contain"
                  />
                </div>

                {/* Layer 2: bagian kepala yang keluar dari lingkaran */}
                <img
                  src={image}
                  alt="Abdi Fhilipus Tampubolon"
                  className="absolute left-1/2 bottom-0 z-20 h-[112%] w-auto max-w-none -translate-x-1/2 object-contain pointer-events-none"
                  style={{
                    clipPath: "inset(0 0 68% 0)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
