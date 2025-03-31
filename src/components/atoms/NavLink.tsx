const NavLink: React.FC<{ href: string; label: string; active: boolean }> = ({
  href,
  label,
  active,
}) => {
  return (
    <a href={href} className={active ? 'text-blue-600' : 'text-gray-800'}>
      {label}
    </a>
  );
};

export default NavLink;
