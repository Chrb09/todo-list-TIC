import style from "./Rodape.module.css";

const Rodape = (props) => {
  const { criadorProjeto } = props;
  const dataAtual = new Date();
  return (
    <div className={style.Rodape}>
      React Básico - {dataAtual.getFullYear()} - {criadorProjeto}
    </div>
  );
};

export { Rodape };
