"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
class novaTarefa {
    constructor(titulo, descricao, prioridade) {
        (this.titulo = titulo),
            (this.descricao = descricao),
            (this.concluida = false),
            (this.prioridade = prioridade);
    }
}
function criarTarefa(titulo, descricao, prioridade) {
    return new novaTarefa(titulo, descricao, prioridade);
}
let tarefa1 = criarTarefa("Estudar", "Estudar 1 hora de typescript e fazer os exercícios", enums_1.Prioridade.ALTA);
console.log(tarefa1);
function exibirTarefa(tarefa) {
    console.log(`O título da tarefa é ${tarefa.titulo}. A prioridade é ${tarefa.prioridade}. Atualmente esta tarefa encontra-se ${tarefa.concluida ? "concluída." : "não concluída."}`);
}
exibirTarefa(tarefa1);
function concluirTarefa(tarefa) {
    return (tarefa.concluida = true);
}
concluirTarefa(tarefa1);
exibirTarefa(tarefa1);
