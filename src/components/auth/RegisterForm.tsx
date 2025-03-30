import { useForm } from '../../hooks/auth/useForm';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const RegisterForm: React.FC = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    password: '',
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={values.name}
        onChange={handleChange}
        error={errors.name || ''}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        error={errors.email || ''}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        error={errors.password || ''}
      />

      <Button label="Submit" type="submit" />
    </form>
  );
};

export default RegisterForm;
