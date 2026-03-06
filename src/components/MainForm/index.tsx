import { PlayCircleIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  const [taskName, setTaskName] = useState("");
  const number = useRef(0);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    number.current += 1;
    console.log("Deu certo", taskName);
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <h1>O formulario foi enviado {number.current}x</h1>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
