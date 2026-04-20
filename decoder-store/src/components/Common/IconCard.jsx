import * as Icons from 'lucide-react';
 
export default function IconCard({ icon, title, description, variant = 'dark' }) {
  const Icon = Icons[icon];
  
  const isBorder = variant === 'border';
  
  return (
    <div className={`flex flex-col items-center text-center p-8 ${isBorder ? 'border border-gray-300' : ''}`}>
      {Icon && (
        <div className={`mb-6 p-4 ${variant === 'dark' ? 'border border-gray-500' : 'border border-gray-300'}`}>
          <Icon size={32} className={variant === 'dark' ? 'text-white' : 'text-black'} />
        </div>
      )}
      <h3 className="text-2xl font-serif font-semibold mb-3">
        {title}
      </h3>
      <p className={`text-base leading-relaxed ${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}
 