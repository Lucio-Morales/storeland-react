const validationRules: Record<string, (value: string) => string | null> = {
  name: (name) => {
    if (!name) return 'El nombre es requerido.';
    return null;
  },
  email: (email) => {
    if (!email) return 'El correo es requerido.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email';
    return null;
  },
  password: (password) => {
    if (!password) return 'Contraseña requerida.';
    if (password.length < 6) return 'Contraseña demasiado corta.';
    if (!/\d/.test(password)) return 'Debe contener al menos un número.';
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      return 'Debe contener un carácter especial.';
    return null;
  },
  username: (username) => {
    if (!username) return 'Username requerido.';
    if (username.length < 4) return 'Debe tener al menos 4 caracteres.';
    return null;
  },
};

export default validationRules;
