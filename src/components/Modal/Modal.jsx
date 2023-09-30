/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./index.scss";

const Modal = ({ title }) => {
  return (
    <div className="modal">
      <h3 className="modal__title">Deseja {title} esse item?</h3>
      <p className="modal__subtitle">Colocar as descrições das tarefas aqui.</p>

      <div className="modal__buttons">
        <Link to={`/`}>
          <button className="modal__btnNot">Não</button>
        </Link>
        <Link to={`/`}>
          <button className="modal__btnYes">Sim</button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
