import { useState, useCallback } from 'react';
import { FormValues, FormErrors } from '../../types/form';
import validationRules from '../../validations/validationRules';

export const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string) => {
    const validator = validationRules[name];
    return validator ? validator(value) : null;
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));

      const error = validateField(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error || '',
      }));
    },
    [validateField]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const newErrors: FormErrors = {};

      Object.keys(values).forEach((key) => {
        const error = validateField(key, values[key as keyof FormValues]);
        if (error) newErrors[key as keyof FormValues] = error;
      });

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        console.log('Formulario enviado correctamente:', values);
      }
    },
    [values, validateField]
  );

  return { values, errors, handleChange, handleSubmit };
};
