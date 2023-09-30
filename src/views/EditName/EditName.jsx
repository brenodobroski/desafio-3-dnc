/* eslint-disable react/prop-types */

import "./index.scss";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

const EditName = ({ data }) => {
  return (
    <div className="editname">
      <Header />
      <Modal title="editar" data={data} />
    </div>
  );
};

export default EditName;
