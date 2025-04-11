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
      label: 'Email',
      type: 'email',
      name: 'email',
      placeholder: 'Enter your email',
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      placeholder: 'Enter your password.',
    },
  ];
  return (
    <div>
      <h1>Login</h1>
      <Form<FormValues>
        fields={fields}
        values={values}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitLabel="Login"
      />
    </div>
  );
};

export default LoginPage;
