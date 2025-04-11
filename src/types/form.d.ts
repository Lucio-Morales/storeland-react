export interface FormValues {
  name?: string;
  email: string;
  password: string;
  [key: string]: string;
}

export interface FormErrors extends Partial<FormValues> {}
