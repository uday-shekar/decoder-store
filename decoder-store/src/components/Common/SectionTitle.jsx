export default function SectionTitle({ 
  label, 
  title, 
  subtitle, 
  centered = true,
  dark = false 
}) {
  return (
    <div className={`space-y-4 ${centered ? 'text-center' : ''}`}>
      {label && (
        <p className={`text-xs font-semibold tracking-widest ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
          {label}
        </p>
      )}
      {title && (
        <h2 className={`text-4xl md:text-5xl font-serif font-bold ${dark ? 'text-white' : 'text-black'}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-lg ${dark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
 