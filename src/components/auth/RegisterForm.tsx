import { useForm } from '../../hooks/auth/useForm';
import Form from '../ui/form/Form';

const RegisterForm: React.FC = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const fields = [
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      placeholder: 'Enter your name',
    },
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
      placeholder: 'Enter your password',
    },
  ];

  return (
    <Form
      fields={fields}
      values={values}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      submitLabel="Register"
    />
  );
};

export default RegisterForm;
