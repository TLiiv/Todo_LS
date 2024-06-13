import { ChangeEvent } from "react";

import { TextField,ListItem, IconButton} from '@mui/material';
import { Edit, Delete, Save, Cancel } from '@mui/icons-material';

interface UserTodoItemProps {
    task: Task;
    isEditing: boolean;
    editTaskTitle: string;
    handleTaskCompletedChange: (task: Task) => (e: ChangeEvent<HTMLInputElement>) => void;
    handleTaskDeleteClick: (task: Task) => () => void;
    handleEditButtonClick: (task: Task) => () => void;
    handleEditTaskChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleEditTaskSave: (task: Task) => () => void;
    handleEditTaskCancel: () => void;
}

type Task = {
    userId: string,
    title: string,
    id: string,
    completed: boolean
}



export const UserTodoItem: React.FC<UserTodoItemProps> =
    ({ task, isEditing, editTaskTitle, handleTaskCompletedChange, handleTaskDeleteClick, handleEditButtonClick, handleEditTaskChange, handleEditTaskSave, handleEditTaskCancel }) => {
        return (     

            <div className="px-6 py-4" >

                <div className="flex space-x-2   items-center float-right ">
                    <input type="checkbox" checked={task.completed} onChange={handleTaskCompletedChange(task)} />
                    {isEditing ? (
                        <>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                                type="text" value={editTaskTitle} onChange={handleEditTaskChange} />
                            <IconButton className="py-1" onClick={handleEditTaskSave(task)}><Save /></IconButton>
                            <IconButton className="py-1" onClick={handleEditTaskCancel}> <Cancel /></IconButton>
                        </>
                    ) : (
                        <>
                            <div className="float-start">
                                <h3 className="  text-lg leading-6 font-medium text-primary"> {task.title}</h3>
                            </div>
                            <div >
                                <IconButton className="py-1 " onClick={handleEditButtonClick(task)} ><Edit /></IconButton>

                                <IconButton className="py-1 " onClick={handleTaskDeleteClick(task)} ><Delete /></IconButton>
                            </div>
                        </>
                    )}
                </div>
            </div>

        );
    }

  
            // <div>    
            //     <div className="w-full">
            //         <div className="bg-background rounded flex p-2 h-full w-full items-center">
            //     <input  type="checkbox" checked={task.completed} onChange={handleTaskCompletedChange(task)} />
            //     {isEditing ? (
            //         <>
            //                     <input
            //                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            //                         type="text" value={editTaskTitle} onChange={handleEditTaskChange} /> 
            //             <IconButton onClick={handleEditTaskSave(task)}><Save /></IconButton>
            //             <IconButton onClick={handleEditTaskCancel}> <Cancel /></IconButton>
            //         </>
            //     ) : (
            //         <>
            //            <h3 className="text-lg leading-6 font-medium text-primary mr2"> {task.title}</h3>
            //             <IconButton onClick={handleEditButtonClick(task)} ><Edit /></IconButton>
            //             <IconButton onClick={handleTaskDeleteClick(task)} className="self-end"><Delete /></IconButton>
            //         </>
            //             )}
            //             </div>
            //    </div>
            // </div>