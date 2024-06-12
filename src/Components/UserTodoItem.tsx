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
              
                
                    <th className="bg-background h-full w-full text-2xl px-6 py-3 flex" >
                <input  type="checkbox" checked={task.completed} onChange={handleTaskCompletedChange(task)} />
                {isEditing ? (
                    <>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                                    type="text" value={editTaskTitle} onChange={handleEditTaskChange} /> 
                        <IconButton onClick={handleEditTaskSave(task)}><Save /></IconButton>
                        <IconButton onClick={handleEditTaskCancel}> <Cancel /></IconButton>
                    </>
                ) : (
                    <>
                       <h3 className="text-lg leading-6 font-medium text-primary mr2"> {task.title}</h3>
                        <IconButton onClick={handleEditButtonClick(task)} ><Edit /></IconButton>
                        <IconButton onClick={handleTaskDeleteClick(task)} ><Delete /></IconButton>
                    </>
                        )}
                        </th>
               
          
            
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