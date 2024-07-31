"use client";
import { motion } from "framer-motion";

const ShinyButton = () => {
  return (
    // motion.button is a Framer Motion component for animated buttons
    <motion.button
      // Initial state of the animation
      initial={{ "--x": "100%", scale: 1 }}
      // Animation to be applied
      animate={{ "--x": "-100%" }}
      // Animation applied when the button is tapped
      whileTap={{ scale: 0.97 }}
      // Transition properties for the animations
      transition={{
        repeat: Infinity, // Animation repeats infinitely
        repeatType: "loop", // Type of repeat is a loop
        repeatDelay: 1, // 1 second delay between each repeat
        type: "spring", // Using spring type animation for smooth motion
        stiffness: 20, // Controls the stiffness of the spring
        damping: 15, // Controls the damping of the spring
        mass: 2, // Controls the mass of the animated object
        scale: {
          // Specific transition properties for the scale animation
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      // Tailwind CSS classes for styling
      className="px-6 py-2 rounded-xl relative radial-gradient"
    >
      {/* Button text */}
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        Start now
      </span>
      {/* Overlay element for additional visual effects */}
      <span className="block absolute inset-0 rounded-xl p-px linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;
