import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-foreground" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-sky-500" },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full border border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-primary/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider"
          >
            Let's Connect
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's work together
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-foreground font-medium hover:text-accent transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Cikampek, West Java, Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-muted text-muted-foreground transition-colors ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="rounded-xl bg-muted/50 border-border focus:border-accent"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="rounded-xl bg-muted/50 border-border focus:border-accent"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className="rounded-xl bg-muted/50 border-border focus:border-accent resize-none"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl bg-primary hover:bg-primary/90"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
