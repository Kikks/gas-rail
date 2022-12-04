import type { HTMLProps } from 'react';

export default interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  label?: string;
}
