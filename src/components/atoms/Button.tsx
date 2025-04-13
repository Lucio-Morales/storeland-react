import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'submit' | 'button';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  icon = <ArrowRight className="w-4 h-4" />,
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        cursor-pointer group relative inline-flex items-center justify-center overflow-hidden
        rounded-lg bg-blue-500 px-6 py-2 text-sm font-semibold text-white 
        transition-all duration-300 ease-in-out
        hover:bg-blue-600
        ${fullWidth ? 'w-full' : 'w-auto'}
      `}
    >
      {/* Fondo deslizante */}
      <span className="absolute left-0 top-0 h-full w-full bg-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>

      {/* Contenido */}
      <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:translate-x-1">
        {label}
        {icon}
      </span>
    </button>
  );
};

export default Button;
