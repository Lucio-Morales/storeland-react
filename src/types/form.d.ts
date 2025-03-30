export interface FormValues {
  name: string;
  email: string;
  password: string;
}

export interface FormErrors extends Partial<FormValues> {}
