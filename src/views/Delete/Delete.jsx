/* eslint-disable react/prop-types */
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import "./index.scss";

const Delete = ({ data }) => {
  return (
    <div className="delete">
      <Header />
      <Modal title="deletar" data={data} />
    </div>
  );
};

export default Delete;
