import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem";

const ListaTarefas = () => {
  const tarefas = [
    { id: 1, nome: "Teste 1" },
    { id: 2, nome: "Teste 2" },
    { id: 3, nome: "Teste 3" },
  ];
  return (
    <ul className={style.ListaTarefas}>
      {tarefas.map((item) => (
        <ListaTarefasItem key={item.id} nome={item.nome} />
      ))}
    </ul>
  );
};

export { ListaTarefas };
