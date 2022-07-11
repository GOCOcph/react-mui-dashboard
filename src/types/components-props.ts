export type InputProps = {
  setValue: (value: string) => void;
  value: string,
  label: string,
  fullWidth?: boolean,
  disabled?: boolean,
  required?: boolean,
  error?: boolean,
}
