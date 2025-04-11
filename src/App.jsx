import { Inicial } from "./pages";
import { Cabecalho, Conteudo, Rodape } from "./components";
import "./App.css";

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Juan" />
      <Conteudo>
        <Inicial />
      </Conteudo>

      <Rodape criadorProjeto="Nicole" />
    </>
  );
};

export { App };
