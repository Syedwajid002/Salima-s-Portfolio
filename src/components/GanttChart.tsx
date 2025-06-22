import React from 'react';
import { motion } from 'framer-motion';

interface Task {
  id: number;
  name: string;
  startWeek: number;
  duration: number;
  category: string;
  completed: number;
}

interface GanttChartProps {
  tasks: Task[];
  weeks: number;
}

const GanttChart: React.FC<GanttChartProps> = ({ tasks, weeks }) => {
  const categories = {
    planning: 'bg-primary-500',
    development: 'bg-secondary-500',
    testing: 'bg-accent-500',
    deployment: 'bg-success-500',
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        {/* Header */}
        <div className="flex">
          <div className="w-60 p-3 font-bold bg-gray-100">Task</div>
          <div className="flex flex-1">
            {Array.from({ length: weeks }, (_, i) => (
              <div key={i} className="w-16 p-3 text-center font-medium bg-gray-100 border-l border-gray-200">
                Week {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Tasks */}
        {tasks.map((task) => (
          <div key={task.id} className="flex border-t border-gray-200">
            <div className="w-60 p-3 font-medium">{task.name}</div>
            <div className="flex flex-1 items-center relative">
              {Array.from({ length: weeks }, (_, i) => (
                <div key={i} className="w-16 h-full border-l border-gray-200"></div>
              ))}
              
              <motion.div
                className={`absolute h-6 rounded-md ${categories[task.category as keyof typeof categories] || 'bg-gray-500'}`}
                style={{
                  left: `${(task.startWeek - 1) * 64}px`,
                  width: `${task.duration * 64 - 8}px`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className="h-full bg-white bg-opacity-30 rounded-r-md"
                  style={{
                    width: `${100 - task.completed}%`,
                  }}
                ></div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;