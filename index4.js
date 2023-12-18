//Definição do objeto Lista de Tarefas
const listaDeTarefas = {
    tarefas: [],

    //função para adicionar uma nova tarefa
    adicionarTarefa: function(descricao){
        this.tarefas.push({
            descricao: descricao,
            concluida: false
        });
    },

    //função para listar todas as tarefas
    listarTarefas: function(){
        document.write("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, indice) => {
            const estado = tarefa.concluida ? "Concluida" : "Pendente";
            document.write(`${indice + 1}. [${estado}] ${tarefa.descricao}`);
        });
    },

    //função para marcar uma tarefa como concluída
    marcarTarefaConcluida: function(indice){
        if (indice >= 0 && indice < this.tarefas.length) {
            this.tarefas[indice].concluida = true;
        }
    }
};

//Exemplo de uso do programa de gerenciamento de tarefas.
listaDeTarefas.adicionarTarefa("Estudar JavaScript");
listaDeTarefas.adicionarTarefa("Fazer compras");
listaDeTarefas.adicionarTarefa("Fazer exercícios");

listaDeTarefas.listarTarefas(); //Listar tarefas antes de marcar alguma como concluida.
listaDeTarefas.marcarTarefaConcluida(1); //Marcar a segunda tarefa como concluida.
listaDeTarefas.listarTarefas(); //Lista tarefas novamente após marcação.