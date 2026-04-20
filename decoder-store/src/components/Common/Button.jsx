import { ArrowRight } from 'lucide-react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = "px-10 py-5 text-xs font-bold tracking-widest transition-all flex items-center justify-center";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    white: "bg-white text-black hover:bg-gray-200"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {variant === 'primary' && <ArrowRight size={16} className="ml-2" />}
    </button>
  );
}