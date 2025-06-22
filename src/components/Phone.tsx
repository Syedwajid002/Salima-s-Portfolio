import React from 'react';
import { PhoneIcon } from 'lucide-react';

const Phone = ({ size = 24, className = '', ...props }) => {
  return <PhoneIcon size={size} className={className} {...props} />;
};

export default Phone;