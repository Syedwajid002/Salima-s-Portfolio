import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  delay?: number;
}

const KpiCard: React.FC<KpiCardProps> = ({ 
  title, 
  value, 
  change, 
  changeLabel = 'vs last period',
  icon,
  delay = 0
}) => {
  const getTrendIcon = () => {
    if (!change) return <Minus className="h-4 w-4" />;
    return change > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />;
  };

  const getTrendColor = () => {
    if (!change) return 'text-gray-500';
    return change > 0 ? 'text-success-500' : 'text-error-500';
  };

  return (
    <motion.div 
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        {icon && (
          <div className="text-primary-500">
            {icon}
          </div>
        )}
      </div>
      <p className="text-3xl font-bold mb-2">{value}</p>
      {change !== undefined && (
        <div className={`flex items-center text-sm ${getTrendColor()}`}>
          {getTrendIcon()}
          <span className="ml-1">
            {Math.abs(change)}% {changeLabel}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default KpiCard;