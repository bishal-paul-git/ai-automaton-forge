import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Workflow Review",
    description: "Perfect for getting started with AI automation",
    price: "$99",
    duration: "one-time",
    popular: false,
    features: [
      "1-hour consultation call",
      "Current workflow analysis",
      "AI automation recommendations",
      "Implementation roadmap",
      "Tool recommendations",
      "Email follow-up report"
    ],
    cta: "Book Review",
    icon: Star
  },
  {
    name: "Custom Workflow Build",
    description: "Complete automation solution tailored to your needs",
    price: "$499",
    duration: "per workflow",
    popular: true,
    features: [
      "Custom workflow development",
      "Integration with your tools",
      "Testing & optimization",
      "Documentation & training",
      "30-day support included",
      "Performance monitoring setup",
      "Backup & recovery plan"
    ],
    cta: "Get Started",
    icon: Zap
  }
];

export const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold mb-4">
            Work With Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need a quick consultation or a complete automation solution, 
            I have flexible options to fit your needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-ai-highlight text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`ai-card h-full ${plan.popular ? 'ai-glow ring-2 ring-primary/20' : ''}`}>
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-space-grotesk">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {plan.duration}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-ai-highlight mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="ai-card inline-block p-6">
            <p className="text-muted-foreground mb-4">
              Need something more complex? Let's discuss your specific requirements.
            </p>
            <Button variant="glow" onClick={scrollToContact}>
              Schedule Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};