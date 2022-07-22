import React, { useState } from "react";
import Tarefas from "./components/Tarefas";
import { v4 as uuidv4 } from 'uuid';

import "./App.css";
import AdicionarTarefa from "./components/AdicionarTarefa";

const App = () => {
  // const message = 'Mensagem Teste!'
  const [tarefas, setTarefas] = useState([
      {
          id: "1", 
          title: "Estudar programação",
          completed: false,
      },
      {
          id: "2",
          title: "Andar de bicicleta",
          completed: true,
      },
      {
        id: "3",
        title: "Jogar futebol",
        completed: true,
      },
      {
        id: "4",
        title: "Trabalhar",
        completed: true,
      },
      {
        id: "5",
        title: "Treinar musculação",
        completed: true,
      },
      {
        id: "6",
        title: "Assistir séries",
        completed: true,
      },
  ]);

  const handleTaskClick = (tarefaId) => {
    const novaTarefa = tarefas.map( tarefa => {
      if (tarefa.id == tarefaId) return{ ... tarefa, completed: !tarefa.completed};
      
      return tarefa;
    });

    setTarefas(novaTarefa)

  }

  const handleTaskAddition = (tarefaTitulo) => {
      const novaTarefa = [... tarefas, {
          title: tarefaTitulo,
          id: uuidv4(),
          completed: false,
        },
      ];
      setTarefas(novaTarefa);
    };

  return (
      <>
          <div className="container">
              <AdicionarTarefa handleTaskAddition={handleTaskAddition}/>
              <Tarefas tarefas={tarefas}/>
          </div>
      </>
  );
}; 

export default App;