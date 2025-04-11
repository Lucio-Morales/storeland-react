import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

type Field = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
};

type FormProps<T extends Record<string, string>> = {
  fields: Field[];
  values: T;
  errors: Partial<Record<keyof T, string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitLabel?: string;
};

const Form = <T extends Record<string, string>>({
  fields,
  values,
  errors,
  onChange,
  onSubmit,
  submitLabel = 'Submit',
}: FormProps<T>) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {fields.map((field) => (
        <div key={field.name}>
          <Input
            label={field.label}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={values[field.name]}
            onChange={onChange}
            error={errors[field.name] || ''}
          />
        </div>
      ))}
      <Button label={submitLabel} type="submit" />
    </form>
  );
};

export default Form;
