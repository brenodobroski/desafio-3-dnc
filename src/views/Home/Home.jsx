/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Tasks from "../../components/Tasks/Tasks";
import "./index.scss";

const Home = ({ data }) => {
  return (
    <div className="home">
      <Header />

      <div className="home__tasks">
        <div className="home__titles">
          <h4>Tarefas</h4>
          <h4>Status</h4>
          <h4>Opções</h4>
        </div>

        {data.map((product) => (
          <Tasks key={product.id} data={product} id={product.id} />
        ))}

        <div className="home__newTask">
          <Link to={`/new`}>
            <h5 className="home__newTask-title">Nova tarefa...</h5>
          </Link>
          <Link to={`/new`}>
            <span className="home__newTask-plus">+</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
