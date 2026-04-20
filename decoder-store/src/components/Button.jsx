import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  showArrow = true, 
  className = "", 
  ...props 
}) {
  
  // Base styles matching the tight, uppercase, premium typography
  const baseStyles = "relative px-10 py-4 uppercase text-[10px] tracking-[0.3em] font-bold transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden";
  
  const variants = {
    // White background, black text (e.g., Shop Now on Hero)
    primary: "bg-white text-black hover:bg-neutral-200",
    
    // Transparent with border (e.g., Our Story / About Decode)
    outline: "border border-white/30 text-white hover:bg-white hover:text-black",
    
    // Dark background (e.g., Explore the Shop)
    dark: "bg-black text-white hover:bg-neutral-800"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {showArrow && (
        <motion.span 
          className="relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg 
            width="14" 
            height="10" 
            viewBox="0 0 14 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M8.5 1L12.5 5M12.5 5L8.5 9M12.5 5H1" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      )}
    </motion.button>
  );
}