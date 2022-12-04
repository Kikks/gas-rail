export default interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outline' | 'border' | 'white' | 'black';
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}

export interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon: string;
  buttonClassName?: string;
}
