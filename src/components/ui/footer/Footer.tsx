const Footer = () => {
  return (
    <footer className="w-full py-6 bg-[#F2F2F2] text-center text-sm text-gray-600">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Gym E-commerce. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
