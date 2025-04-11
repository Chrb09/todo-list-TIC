import { CampoTexto, Botao } from "../../components";
import Style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = () => {
  return (
    <form className={Style.FormCriarTarefa}>
      <CampoTexto />
      <Botao texto="+" />
    </form>
  );
};

export { FormCriarTarefa };
