import React from 'react';
import { MailIcon } from 'lucide-react';

const Mail = ({ size = 24, className = '', ...props }) => {
  return <MailIcon size={size} className={className} {...props} />;
};

export default Mail;