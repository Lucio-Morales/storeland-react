interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'submit' | 'button';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
