import { nanoid } from 'nanoid';
import * as React from 'react';
import { useState, ChangeEvent, KeyboardEvent,useEffect } from 'react';
import  axios  from 'axios';
import { useParams } from 'react-router-dom';

interface Props {
}


 type Task = {
    userId: string,
    title: string,
    id: string,
    completed: boolean
}



 export const UserTodos: React.FC<Props> = (props: Props) => {

   
    // Get the userId param from the URL.
    let { id } = useParams();
    const todoUrl = `https://jsonplaceholder.typicode.com/todos?userId=${id}`;
    
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
  


    //Get user tasks based on userId
    useEffect(()=>{
        axios.get(todoUrl)
        .then((response)=>{
            setTasks(response.data);
            setIsLoading(false);
            console.log(`User tasks ${JSON.stringify(response.data)}`)
        })
        .catch((error)=>{
            console.log(error)})
            setIsLoading(false);
    },[id])

  

 

    //Add new task
    const handleNewTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.target.value);
    };

    //Task complete managment with checkbox value
    const handleTaskCompletedChange = (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
        setTasks(tasks=>(tasks.map((task)=>{
            if(task.id === handledTask.id){ 
                return {...task,completed: e.target.checked} 
            }return task;
        })))
    }
       
    console.log(tasks);

    //Add new task with enter key
    const handleNewTaskKeyDown =(e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter' && newTaskTitle !== ''){
            setTasks(tasks =>[...tasks,{title: newTaskTitle,id:nanoid(),completed:false}]);
            setNewTaskTitle('');
        }
    }

    //Clear completed tasks
    const handleTaskClearCompletedClick = () => {
        setTasks(tasks => tasks.filter(task=>!task.completed))
    }

    //Delete tasks
    const handleTaskDeleteClick = (handledTask: Task) =>() =>{
        setTasks( tasks=> tasks.filter(task => task.id !== handledTask.id))
    };

    const taskListItems = tasks.map((task)=>
    <li key={task.id}>
        <input type="checkbox" checked={task.completed} onChange={handleTaskCompletedChange(task)} />
        {task.title}
        <button onClick={handleTaskDeleteClick(task)}>Delete</button>
        </li>
    )

  return (
    <div>
     {isLoading ? (
      <p>Loading tasks...</p>
    ) : (
      <ul>
        {taskListItems}
      </ul>
        )}
      <input 
      value={newTaskTitle} 
      onChange={handleNewTaskTitleChange}
      onKeyDown={handleNewTaskKeyDown}
       />
       <div>
       <button className='text-primary border-black border-2' onClick={handleTaskClearCompletedClick}>Clear Completed Tasks</button>
       </div>
    </div>
  );
}
