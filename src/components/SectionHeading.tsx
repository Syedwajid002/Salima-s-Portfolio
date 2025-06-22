import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle,
  center = false
}) => {
  return (
    <div className={`section-title ${center ? 'text-center' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;