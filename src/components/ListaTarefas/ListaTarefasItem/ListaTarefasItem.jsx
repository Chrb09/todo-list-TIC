import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { Botao, TIPO_BOTAO } from "../../Botao";
import style from "./ListaTarefasItem.module.css";
import { CampoTexto } from "../../../components";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const [estaEditando, setEstaEditando] = useState(false);

  const { removerTarefa, editarTarefa } = useAppContext();
  return (
    <li className={style.ListaTarefasItem}>
      {estaEditando && (
        <CampoTexto
          defaultValue={nome}
          onBlur={() => setEstaEditando(false)}
          onChange={(event) => editarTarefa(id, event.currentTarget.value)}
          autoFocus
        />
      )}
      {!estaEditando && <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>}
      <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} onClick={() => removerTarefa(id)} />
    </li>
  );
};

export { ListaTarefasItem };
