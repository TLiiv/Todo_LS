import { nanoid } from 'nanoid';
import * as React from 'react';
import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Props {
}


 type Task = {
    //userId: number,
    title: string,
    id: string,
    completed: boolean
}

 export const Todos: React.FC<Props> = (props: Props) => {

    //Add new task
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const handleNewTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.target.value);
    };

    //Task complete managment with checkbox value
    const handleCompletedChange = (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
        setTasks(tasks=>(tasks.map((task)=>{
            if(task.id === handledTask.id){ 
                return {...task,completed: e.target.checked} 
            }return task;
        })))
    }
       
    console.log(tasks);

    //Add new task with enter key
    const handleNewTaskKeyDown =(e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter' && newTaskTitle != ''){
            setTasks(tasks =>[...tasks,{title: newTaskTitle,id:nanoid(),completed:false}]);
            setNewTaskTitle('');
        }
    }

    const taskListItems = tasks.map((task)=>
    <li key={task.id}>
        <input type="checkbox" checked={task.completed} onChange={handleCompletedChange(task)} />
        {task.title}
        </li>
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

