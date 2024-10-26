import { Prioridade } from "./enums";
import { Tarefa } from "./types";

class novaTarefa implements Tarefa {
  titulo: string;
  descricao: string;
  concluida: boolean;
  prioridade: Prioridade;

  constructor(titulo: string, descricao: string, prioridade: Prioridade) {
    (this.titulo = titulo),
      (this.descricao = descricao),
      (this.concluida = false),
      (this.prioridade = prioridade);
  }
}

function criarTarefa(
  titulo: string,
  descricao: string,
  prioridade: Prioridade
): Tarefa {
  return new novaTarefa(titulo, descricao, prioridade);
}

let tarefa1 = criarTarefa(
  "Estudar",
  "Estudar 1 hora de typescript e fazer os exercícios",
  Prioridade.ALTA
);

console.log(tarefa1);

function exibirTarefa(tarefa: Tarefa): void {
  console.log(
    `O título da tarefa é ${tarefa.titulo}. A prioridade é ${
      tarefa.prioridade
    }. Atualmente esta tarefa encontra-se ${
      tarefa.concluida ? "concluída." : "não concluída."
    }`
  );
}

exibirTarefa(tarefa1);

function concluirTarefa(tarefa: Tarefa) {
  return (tarefa.concluida = true);
}

concluirTarefa(tarefa1);

exibirTarefa(tarefa1);
