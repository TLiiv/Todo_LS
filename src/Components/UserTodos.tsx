import { nanoid } from 'nanoid';
import * as React from 'react';
import { useState, ChangeEvent, KeyboardEvent,useEffect } from 'react';
import  axios  from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



interface Props {
    id: string;
}


 type Task = {
    userId: string,
    title: string,
    id: string,
    completed: boolean
}

   export const UserTodos: React.FC<Props> = (props: Props) => {
    let routeUserId = parseInt(props.id);
    const tasksUrl = `https://jsonplaceholder.typicode.com/todos?userId=${routeUserId}`;
    
    const [tasks, setTasks] = useState<Task[]>([]);
   

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    




    //Get user tasks based on userId and save them to local storage
    const  getUserTaskData = async()=>{
        //Check if there are any stored tasks
        const storedTasks = localStorage.getItem(`tasks_${routeUserId}`);
        //If true set those tasks to state else get data from API
        if(storedTasks){
            setTasks(JSON.parse(storedTasks));
            setIsLoading(false);
        }else{
            try{
                const response = await axios.get(tasksUrl);
                setTasks(response.data);
                localStorage.setItem(`tasks_${routeUserId}`,JSON.stringify(response.data));
            }catch(error){
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        }
    }

    useEffect(()=>{
        getUserTaskData();
    },[routeUserId])



      


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
       
   

    //Add new task with enter key
    const handleNewTaskKeyDown =(e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter' && newTaskTitle !== ''){
            setTasks(tasks =>[...tasks,{title: newTaskTitle,id:nanoid(),completed:false,userId:String(props.id)}]);
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
    //Back button
    const navigate = useNavigate();
    const handleOnBackClick =()=> {
        navigate("/");
    }

  return (
    <div>
        <button onClick={handleOnBackClick}>Back to users</button>
        <ul>{taskListItems}</ul>
     {/* {isLoading ? (
      <p>Loading tasks...</p>
    ) : (
      <ul>
        {taskListItems}
      </ul>
        )} */}
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

