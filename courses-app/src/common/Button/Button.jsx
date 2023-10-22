import "./Button.css";
const Button = (props) => {
  const { text, onClick, disabled } = props;
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
export default Button;
