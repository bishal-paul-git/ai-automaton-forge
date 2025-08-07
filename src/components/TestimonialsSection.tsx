import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    content: "Alex transformed our customer support with an AI chatbot that handles 80% of inquiries. Our response time went from hours to seconds!",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Michael Chen",
    title: "Operations Director, E-commerce Plus",
    content: "The automation system Alex built saves us 40 hours per week on order processing. ROI was immediate and substantial.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Manager, Growth Co.",
    content: "Our content pipeline now runs completely automated. Alex's solution generates, optimizes, and publishes content while we sleep!",
    rating: 5,
    avatar: "👩‍🎨"
  },
  {
    name: "David Park",
    title: "Founder, SaaS Solutions",
    content: "Working with Alex was game-changing. His n8n workflows integrated all our tools and eliminated manual data entry entirely.",
    rating: 5,
    avatar: "👨‍🚀"
  },
  {
    name: "Lisa Thompson",
    title: "COO, FinTech Innovations",
    content: "The voice AI system Alex implemented revolutionized our lead qualification process. Conversion rates increased by 35%.",
    rating: 5,
    avatar: "👩‍💼"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients who transformed their businesses with AI automation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Card className="ai-card relative">
              <CardContent className="p-8 lg:p-12">
                <Quote className="w-12 h-12 text-primary mb-6 opacity-50" />
                
                <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <div className="font-space-grotesk font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].title}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-ai-highlight text-ai-highlight" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Preview Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials
              .filter((_, index) => index !== currentIndex)
              .slice(0, 3)
              .map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    const realIndex = testimonials.findIndex(t => t.name === testimonial.name);
                    setCurrentIndex(realIndex);
                    setIsAutoPlaying(false);
                  }}
                  className="cursor-pointer"
                >
                  <Card className="ai-card hover:scale-105 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-2xl">{testimonial.avatar}</div>
                        <div>
                          <div className="font-semibold text-sm">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};