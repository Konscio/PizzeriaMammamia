import Button from "react-bootstrap/Button";

function Boton({ colorButton, textButton, onClick }) {
  return (
    <button className={colorButton} onClick={onClick}>
      {textButton}
    </button>
  );
}
export default Boton;
