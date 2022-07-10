interface Props {
  placeholder?: string;
}

const Input = ({ placeholder }: Props) => {
  return (
    <input 
      placeholder={placeholder}
      class='p-2 font-content text-base rounded-md border border-spanishGrey' 
    />
  );
};

export default Input;
