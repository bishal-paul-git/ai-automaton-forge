import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Zap, Code, Brain } from "lucide-react";

const skills = [
  { name: "OpenAI API", category: "AI/ML" },
  { name: "Make.com", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "n8n", category: "Automation" },
  { name: "Vapi", category: "Voice AI" },
  { name: "Supabase", category: "Backend" },
  { name: "Python", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
];

const certifications = [
  { name: "AWS Certified", icon: Award },
  { name: "OpenAI API Expert", icon: Brain },
  { name: "Make.com Partner", icon: Zap },
  { name: "Full-Stack Developer", icon: Code },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate AI automation engineer with 5+ years of experience building 
            intelligent systems that streamline business processes and boost productivity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="ai-card h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-space-grotesk font-semibold mb-6">
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Started as a software developer, I discovered the transformative power 
                    of AI automation when I built my first workflow using Zapier. That 
                    simple automation saved our team 20 hours per week.
                  </p>
                  <p>
                    Since then, I've helped 50+ businesses implement AI-driven solutions 
                    using cutting-edge tools like OpenAI's GPT models, n8n workflows, 
                    and voice AI with Vapi.
                  </p>
                  <p>
                    My mission is to bridge the gap between complex AI technology and 
                    practical business solutions that deliver real ROI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Certifications */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Skills */}
            <Card className="ai-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-space-grotesk font-semibold mb-6">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="ai-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-space-grotesk font-semibold mb-6">
                  Certifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <cert.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{cert.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};