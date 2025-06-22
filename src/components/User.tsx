import React from 'react';
import { UserIcon } from 'lucide-react';

const User = ({ size = 24, className = '', ...props }) => {
  return <UserIcon size={size} className={className} {...props} />;
};

export default User;