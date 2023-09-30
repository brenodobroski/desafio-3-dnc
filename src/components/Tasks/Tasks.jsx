/* eslint-disable react/prop-types */
import "./index.scss";
import edit from "../../assets/editor.svg";
import trash from "../../assets/trash.svg";
import { Link } from "react-router-dom";

const Tasks = ({ data }) => {
  return (
    <div className="tasks">
      <h5 className="tasks__title">{data.title}</h5>

      <div className="tasks__checkboxs">
        <input type="checkbox" />
      </div>

      <div className="tasks__icons">
        <Link to={`/editname`}>
          <img src={edit} alt="ERROR" />
        </Link>
        <Link to={`/delete`}>
          <img className="tasks__trash" src={trash} alt="ERROR" />
        </Link>
      </div>
    </div>
  );
};

export default Tasks;
