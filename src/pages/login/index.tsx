import Form from '../../components/ui/form/Form';
import { useForm } from '../../hooks/auth/useForm';
import { FormValues } from '../../types/form';

const LoginPage = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    email: '',
    password: '',
  });

  const fields = [
    {
      label: 'Correo electronico',
      type: 'email',
      name: 'email',
      placeholder: 'Ingresa tu correo electronico.',
    },
    {
      label: 'Contraseña',
      type: 'password',
      name: 'password',
      placeholder: 'Ingresa tu contraseña.',
    },
  ];
  return (
    <div className="p-8 bg-white mt-8">
      <h1 className="text-3xl mb-4">Iniciar sesion</h1>
      <Form<FormValues>
        fields={fields}
        values={values}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitLabel="Ingresar"
      />
    </div>
  );
};

export default LoginPage;
