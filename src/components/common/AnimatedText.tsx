"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedTextProps = {
  text: ReactNode;
  delay?: number;
};

const AnimatedText = ({ text, delay = 0 }: AnimatedTextProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="inline-block"
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;
