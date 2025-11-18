import { motion } from "framer-motion";
import { memo } from "react";

export const TimelineContent = memo(function TimelineContent({
  children,
  className,
  as: Component = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  ...props
}) {
  const MotionComponent = motion[Component] || motion.div;
  
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: animationNum * 0.1 }
    }
  };

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={customVariants || defaultVariants}
      custom={animationNum}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
});
