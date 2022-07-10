import { JSX } from 'solid-js';

export type ButtonType = 'primary' | 'secondary' | 'disabled' | 'outline';
interface Props {
  variant: ButtonType;
  children?: JSX.Element;
  handleOnClick?: (event: MouseEvent) => void;
}

const BUTTON_CLASS_MAP: { [key: string]:  string[]} = {
  primary: [
    'bg-languidBlue',
    'text-antiflashWhite',
  ],
  secondary: [
    'bg-amaryllisRed',
    'text-app-white',
  ],
  outline: [
    'bg-antiflashWhite',
    'text-underseasGreen',
    'border-underseasGreen',
    'hover:bg-underseasGreen',
    'hover:text-antiflashWhite',
    'hover:border-antiflashWhite'
  ],
  disabled: [
    'bg-app-dark-grey',
    'text-app-white',
    'border-color-app-white',
  ]
};

const Button = ({ variant, children, handleOnClick, ...rest }: Props) => {
  return (
    <button 
      class={'shadow hover:shadow-lg font-content text-lg px-8 py-2 rounded-sm ' + BUTTON_CLASS_MAP[variant].join(' ')}
      onClick={handleOnClick}
      {...rest}
    >{children}</button>
  );
};

export default Button;
