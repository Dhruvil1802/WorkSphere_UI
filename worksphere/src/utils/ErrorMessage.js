import "./ErrorMessage.css";
import caution from "./caution.png";

function ErrorMessage({ message, onClick }) {
  return (
    <div className="error-container">
      <img src={caution} alt="Caution" className="caution-icon" />

      <div className="error-content">
        <button className="close-button" onClick={onClick}>
          ✖
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
