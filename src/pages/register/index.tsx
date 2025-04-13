import Form from '../../components/ui/form/Form';
import { useForm } from '../../hooks/auth/useForm';
import { FormValues } from '../../types/form';

const fields = [
  {
    label: 'Nombre',
    type: 'text',
    name: 'name',
    placeholder: 'Ingresa tu nombre.',
  },
  {
    label: 'Correo electronico.',
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

const RegisterPage = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    password: '',
  });

  return (
    <div className="p-8 bg-white mt-8">
      <h1 className="text-3xl mb-4">Crear cuenta</h1>
      <Form<FormValues>
        fields={fields}
        values={values}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitLabel="Crear cuenta"
      />
    </div>
  );
};

export default RegisterPage;
