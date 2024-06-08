import { nanoid } from 'nanoid';
import * as React from 'react';
import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Props {
}


 type Task = {
    //userId: number,
    title: string,
    id: string,
    //completed: boolean
}

 export const Todos: React.FC<Props> = (props: Props) => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const handleNewTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.target.value);
    };

    //For input enter key press with input field reset
    const handleNewTaskKeyDown =(e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter' && newTaskTitle != ''){
            setTasks(tasks =>[...tasks,{title: newTaskTitle,id:nanoid()}]);
            setNewTaskTitle('');
        }
    }

    const taskListItems = tasks.map((task)=>
    <li key={task.id}>{task.title}</li>
    )

  return (
    <div>
        <ul>
            {taskListItems}
        </ul>
      <input 
      value={newTaskTitle} 
      onChange={handleNewTaskTitleChange}
      onKeyDown={handleNewTaskKeyDown}
       />
    </div>
  );
}

