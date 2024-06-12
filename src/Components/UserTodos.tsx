import { nanoid } from 'nanoid';
import * as React from 'react';
import { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Hero } from './Hero';
import { UserTodoItem } from './UserTodoItem';


import { Container, Button, TextField, Checkbox, Typography, List, ListItem, IconButton, CircularProgress, Box } from '@mui/material';
import { Edit, Delete, Save, Cancel } from '@mui/icons-material';




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



    //Task tracking for Hero comp
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;



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


    return (
        <>
         <Button variant="contained" color="primary" onClick={handleOnBackClick}>Back to users</Button>
            <Hero
                completedTasks={completedTasks}
                totalTasks={totalTasks}
                handleTaskClearCompletedClick={handleTaskClearCompletedClick}
            />
            <main className="w-full max-w-7xl px-6 bg-background shadow-2xl mb-6 rounded-b-xl mx-auto">
           
                    {isLoading ? (
                        <CircularProgress />
                    ) : (
                       <div>
                        <ul bg-background overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16>
                            {tasks.map((task) => (
                                <UserTodoItem
                                    key={task.id}
                                    task={task}
                                    isEditing={editTask === task.id}
                                    editTaskTitle={editTaskTitle}
                                    handleTaskCompletedChange={handleTaskCompletedChange}
                                    handleTaskDeleteClick={handleTaskDeleteClick}
                                    handleEditButtonClick={handleEditButtonClick}
                                    handleEditTaskChange={handleEditTaskChange}
                                    handleEditTaskSave={handleEditTaskSave}
                                    handleEditTaskCancel={handleEditTaskCancel}
                                />
                            ))}

                        </ul>
                        </div> 
                    )}
                    <TextField
                        value={newTaskTitle}
                        onChange={handleNewTaskTitleChange}
                        onKeyDown={handleNewTaskKeyDown}
                        variant="outlined"
                        size="small">
                        </TextField>
            </main>         
        </>
        
    );
}

