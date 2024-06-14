import React, { ReactNode } from 'react';
import { AuroraBackground } from './UI/aurora-background';
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex w-full justify-center items-center min-h-screen ">
          {children}
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Layout;