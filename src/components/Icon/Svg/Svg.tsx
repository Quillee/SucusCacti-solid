const Svg = ({ children, ...rest }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      {...rest}
    >
      {children}
    </svg>
  );
};

export default Svg;
