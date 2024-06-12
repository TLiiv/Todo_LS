import React, { ReactNode } from 'react';

interface Props{
    children: ReactNode
}


const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full justify-center items-center min-h-screen "> 
      {children}
    </div>
  );
};

export default Layout;