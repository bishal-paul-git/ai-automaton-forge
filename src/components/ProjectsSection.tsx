import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const projects = [
  {
    title: "AI Lead Qualifier with Vapi",
    description: "Voice AI system that qualifies leads through natural conversations, reducing manual screening by 90%.",
    image: "🎤",
    tech: ["Vapi", "OpenAI", "Supabase", "n8n"],
    features: ["Voice Recognition", "Lead Scoring", "CRM Integration"],
    demoUrl: "#",
    caseStudyUrl: "#"
  },
  {
    title: "E-commerce Order Automation",
    description: "Complete order processing pipeline from payment to fulfillment using Make.com and multiple APIs.",
    image: "🛒",
    tech: ["Make.com", "Shopify", "Slack", "PostgreSQL"],
    features: ["Payment Processing", "Inventory Sync", "Notifications"],
    demoUrl: "#",
    caseStudyUrl: "#"
  },
  {
    title: "Content Generation Pipeline",
    description: "Automated content creation system that generates, reviews, and publishes blog posts across platforms.",
    image: "✍️",
    tech: ["OpenAI", "n8n", "WordPress", "Buffer"],
    features: ["AI Writing", "SEO Optimization", "Multi-platform"],
    demoUrl: "#",
    caseStudyUrl: "#"
  },
  {
    title: "Customer Support Chatbot",
    description: "Intelligent chatbot handling 80% of customer inquiries with escalation to human agents when needed.",
    image: "🤖",
    tech: ["OpenAI", "Supabase", "React", "Webhooks"],
    features: ["NLP Processing", "Knowledge Base", "Escalation Logic"],
    demoUrl: "#",
    caseStudyUrl: "#"
  },
  {
    title: "Data Pipeline Orchestrator",
    description: "Real-time data processing system that transforms and syncs data across multiple business tools.",
    image: "📊",
    tech: ["n8n", "Python", "PostgreSQL", "Redis"],
    features: ["Real-time Sync", "Data Validation", "Error Handling"],
    demoUrl: "#",
    caseStudyUrl: "#"
  },
  {
    title: "Social Media Automation",
    description: "AI-powered social media manager that creates, schedules, and optimizes posts for maximum engagement.",
    image: "📱",
    tech: ["OpenAI", "Zapier", "Twitter API", "Instagram"],
    features: ["Content Generation", "Optimal Timing", "Analytics"],
    demoUrl: "#",
    caseStudyUrl: "#"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of the AI automation systems I've built that are transforming 
            how businesses operate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="ai-card h-full group hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4 text-center">{project.image}</div>
                  <CardTitle className="text-xl font-space-grotesk text-center">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-1">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" className="flex-1 group/btn">
                      <Play className="w-4 h-4 mr-2 group-hover/btn:text-primary" />
                      Demo
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1 group/btn">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:text-primary" />
                      Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button variant="glow" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};