import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export const Footer = () => {
  const { theme, setTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Copyright */}
          <motion.div
            className="flex items-center space-x-4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-xl font-space-grotesk font-bold bg-gradient-to-r from-primary to-ai-highlight bg-clip-text text-transparent">
              AI Automaton
            </div>
            <div className="text-muted-foreground">
              © 2024 Alex Chen
            </div>
          </motion.div>

          {/* Made with love */}
          <motion.div
            className="flex items-center space-x-2 text-muted-foreground mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm">Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-sm">and AI automation</span>
          </motion.div>

          {/* Scroll to top button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.div
          className="text-center mt-8 pt-8 border-t"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            Transforming businesses through intelligent automation • Available for new projects
          </p>
        </motion.div>
      </div>
    </footer>
  );
};