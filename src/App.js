import React, { useState } from "react";
import Tarefas from "./components/Tarefas";

import "./App.css";

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
  ]);

  return (
      <>
          <div className="container">
              <Tarefas tarefas={tarefas}/>
          </div>
      </>
  );
}; 

export default App;