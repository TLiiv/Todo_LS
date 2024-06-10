import { nanoid } from 'nanoid';
import * as React from 'react';
import { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



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
    let routeUserId = props.id;
    const tasksUrl = `https://jsonplaceholder.typicode.com/todos?userId=${routeUserId}`;

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [editTask, setEditTask] = useState<string | null>(null);
    const [editTaskTitle, setEditTaskTitle] = useState("");

    //Get user tasks based on userId and save them to local storage
    const getUserTaskData = async () => {
        //Check if there are any stored tasks
        const storedTasks = localStorage.getItem(`tasks_${routeUserId}`);
        //If true set those tasks to state else get data from API
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
            setIsLoading(false);
        } else {
            try {
                const response = await axios.get(tasksUrl);
                setTasks(response.data);
                localStorage.setItem(`tasks_${routeUserId}`, JSON.stringify(response.data));
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        getUserTaskData();
    }, [routeUserId])


    //Add new task
    const handleNewTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.target.value);
    };

    //Task complete managment with checkbox value
    const handleTaskCompletedChange = (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
        const updatedTasks = (tasks.map((task) => {
            if (task.id === handledTask.id) {
                return { ...task, completed: e.target.checked }
            } return task;
        }))
        setTasks(updatedTasks);
        localStorage.setItem(`tasks_${routeUserId}`, JSON.stringify(updatedTasks))
    }

    //Add new task with enter key
    const handleNewTaskKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTaskTitle.trim() !== '') {
            const newTask: Task = {
                title: newTaskTitle, id: nanoid(), completed: false, userId: routeUserId
            };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            localStorage.setItem(`tasks_${routeUserId}`, JSON.stringify(updatedTasks));
            setNewTaskTitle('');
        }
    };


    //Clear completed tasks
    const handleTaskClearCompletedClick = () => {
        const updatedTasks = tasks.filter(task => !task.completed);
        setTasks(updatedTasks);
        localStorage.setItem(`tasks_${routeUserId}`, JSON.stringify(updatedTasks))
    }


    //Delete tasks
    const handleTaskDeleteClick = (handledTask: Task) => () => {
        const updatedTasks = tasks.filter(task => task.id !== handledTask.id)
        setTasks(updatedTasks);
    };

    //Edit tasks
    const handleEditButtonClick = (task: Task) => () => {
        setEditTask(task.id);
        setEditTaskTitle(task.title);
      }

      const handleEditTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEditTaskTitle(e.target.value);
      }
    
      const handleEditTaskSave = (task: Task) => () => {
        const updatedTasks = tasks.map(t => {
          if (t.id === task.id) {
            return { ...t, title: editTaskTitle };
          }
          return t;
        });
        setTasks(updatedTasks);
        localStorage.setItem(`tasks_${routeUserId}`, JSON.stringify(updatedTasks));
        setEditTask(null);
      }


  const handleEditTaskCancel = () => {
    setEditTask(null);
    setEditTaskTitle("");
  }

    //Back button
    const navigate = useNavigate();
    const handleOnBackClick = () => {
        navigate("/");
    }

    // const taskListItems = tasks.map((task) =>
    //     <li key={task.id}>
    //         <input type="checkbox" checked={task.completed} onChange={handleTaskCompletedChange(task)} />
    //         {task.title}
    //         {/* <button onClick={handleEditButtonClick}>Edit</button> */}
    //         <button onClick={handleTaskDeleteClick(task)}>Delete</button>
    //     </li>
    // )
    const taskListItems = tasks.map((task) =>
        <li key={task.id}>
          <input type="checkbox" checked={task.completed} onChange={handleTaskCompletedChange(task)} />
          {editTask === task.id ? (
            <>
              <input type="text" value={editTaskTitle} onChange={handleEditTaskChange} />
              <button onClick={handleEditTaskSave(task)}>Save</button>
              <button onClick={handleEditTaskCancel}>Cancel</button>
            </>
          ) : (
            <>
              {task.title}
              <button onClick={handleEditButtonClick(task)}>Edit</button>
              <button onClick={handleTaskDeleteClick(task)}>Delete</button>
            </>
          )}
        </li>
      );

    return (
        <div>
            <button onClick={handleOnBackClick}>Back to users</button>
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

