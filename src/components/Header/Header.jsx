import "./index.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <h2 className="header__noactive">Organização</h2>
        <h2 className="header__active">Tarefas</h2>
      </div>
      <h2 className="header__title">
        Otimize seu tempo e se organize com o nosso Planejador Diário.
      </h2>
    </>
  );
};

export default Header;
