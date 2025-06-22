import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface WorkflowCardProps {
  title: string;
  steps: Step[];
  delay?: number;
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({ 
  title, 
  steps,
  delay = 0
}) => {
  return (
    <motion.div 
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            {index !== steps.length - 1 && (
              <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gray-200 z-0"></div>
            )}
            <div className="relative z-10 flex">
              <div className="flex-shrink-0 bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                {step.id}
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkflowCard;