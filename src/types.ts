import { Prioridade } from "./enums";

export type Tarefa = {
  titulo: string;
  descricao: string;
  concluida: boolean;
  prioridade: Prioridade;
};
