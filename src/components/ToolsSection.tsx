import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const tools = [
  {
    name: "OpenAI",
    description: "GPT-4, DALL-E, Embeddings",
    emoji: "🧠",
    category: "AI/ML"
  },
  {
    name: "n8n",
    description: "Workflow Automation",
    emoji: "🔄",
    category: "Automation"
  },
  {
    name: "Make.com",
    description: "Visual Automation Platform",
    emoji: "⚙️",
    category: "Automation"
  },
  {
    name: "Zapier",
    description: "App Integration",
    emoji: "⚡",
    category: "Automation"
  },
  {
    name: "Vapi",
    description: "Voice AI Integration",
    emoji: "🎤",
    category: "Voice AI"
  },
  {
    name: "Supabase",
    description: "Backend as a Service",
    emoji: "🗄️",
    category: "Backend"
  },
  {
    name: "Python",
    description: "Data Processing & AI",
    emoji: "🐍",
    category: "Programming"
  },
  {
    name: "React",
    description: "Frontend Development",
    emoji: "⚛️",
    category: "Frontend"
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript",
    emoji: "🟢",
    category: "Backend"
  },
  {
    name: "PostgreSQL",
    description: "Relational Database",
    emoji: "🐘",
    category: "Database"
  },
  {
    name: "Docker",
    description: "Containerization",
    emoji: "🐳",
    category: "DevOps"
  },
  {
    name: "AWS",
    description: "Cloud Infrastructure",
    emoji: "☁️",
    category: "Cloud"
  }
];

export const ToolsSection = () => {
  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-4">
            My Arsenal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The powerful tools and technologies I use to build intelligent automation systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="ai-card h-full text-center transition-all duration-300 group-hover:ai-glow">
                <CardContent className="p-6">
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tool.emoji}
                  </motion.div>
                  <h3 className="font-space-grotesk font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {tool.description}
                  </p>
                  <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                    {tool.category}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-ai-highlight animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-ai-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-sm font-medium">Always exploring new tools and technologies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};