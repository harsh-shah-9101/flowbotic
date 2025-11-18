import { motion } from "framer-motion";
import { memo } from "react";
import { cn } from "@/lib/utils";

export const VerticalCutReveal = memo(function VerticalCutReveal({
  children,
  splitBy = "words",
  staggerDuration = 0.1,
  staggerFrom = "first",
  reverse = false,
  containerClassName,
  transition = { type: "spring", stiffness: 250, damping: 40 },
}) {
  const text = typeof children === "string" ? children : "";
  const elements = splitBy === "words" ? text.split(" ") : text.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDuration,
        staggerDirection: staggerFrom === "last" ? -1 : 1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reverse ? -20 : 20,
      rotateX: reverse ? -90 : 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition,
    },
  };

  return (
    <motion.span
      className={cn("inline-flex flex-wrap gap-1", containerClassName)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ perspective: "1000px" }}
        >
          {element}
        </motion.span>
      ))}
    </motion.span>
  );
});
