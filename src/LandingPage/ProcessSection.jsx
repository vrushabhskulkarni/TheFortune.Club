import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, PenTool, Terminal, Server, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const steps = [
    {
      "number": "01",
      "title": "Discovery",
      "description": "We analyze your requirements and define project scope.",
      "icon": <Search className='h-6 w-6 text-yellow-500' />,
      "color": "from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20",
      "detailedDescription": "We research your business goals, audience, and competitors to create a project roadmap with clear milestones.",
      "tasks": ["Stakeholder Interviews", "Requirements Gathering", "Market Research", "Technical Analysis", "Project Planning"]
    },
    {
      "number": "02",
      "title": "Design",
      "description": "We craft intuitive interfaces and seamless experiences.",
      "icon": <PenTool className='h-6 w-6 text-yellow-500' />,
      "color": "from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/20",
      "detailedDescription": "We design user-friendly interfaces with wireframes, prototypes, and cohesive design systems for consistency.",
      "tasks": ["UX Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"]
    },
    {
      "number": "03",
      "title": "Development",
      "description": "We build scalable solutions with cutting-edge tech.",
      "icon": <Terminal className='h-6 w-6 text-yellow-500' />,
      "color": "from-green-50 to-green-100 dark:from-green-950/40 dark:to-green-900/20",
      "detailedDescription": "Our engineers write high-performance code, following best practices and agile sprints for continuous improvement.",
      "tasks": ["Frontend & Backend Dev", "Database Architecture", "API Development", "Quality Testing"]
    },
    {
      "number": "04",
      "title": "Deployment",
      "description": "We launch and support your solution.",
      "icon": <Server className='h-6 w-6 text-yellow-500' />,
      "color": "from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/20",
      "detailedDescription": "We deploy your solution, provide documentation, training, and ongoing maintenance for optimal performance.",
      "tasks": ["Production Deployment", "Optimization", "User Training", "Documentation", "Support"]
    }
  ]
  

  return (
    <section id="process" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-1 border-yellow-500 text-yellow-500 mb-4">
            OUR DEVELOPMENT PROCESS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 hero">
            We follow a streamlined approach
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-lg">
            To deliver exceptional results on time and within budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-700 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative z-10"
            >
              <Card 
                className={`h-full border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br ${step.color} overflow-hidden`}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-md">
                      {step.icon}
                    </div>
                    <motion.span 
                      className="text-5xl font-bold text-yellow-500/20"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mt-4 text-zinc-900 dark:text-zinc-100">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    {step.description}
                  </p>
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                  >
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
                      {step.detailedDescription}
                    </p>
                    <div className="bg-white/50 dark:bg-zinc-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Key Activities:</h4>
                      <ul className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <motion.li 
                            key={taskIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * taskIndex }}
                            className="flex items-center space-x-2 text-sm text-zinc-700 dark:text-zinc-300"
                          >
                            <ChevronRight className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                            <span>{task}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
              
              {/* Step Connector Circle */}
              <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-zinc-800 border-4 border-yellow-500 z-20"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl p-12 shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your project needs.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-8 py-6 text-lg">
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;