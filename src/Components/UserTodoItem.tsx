import { ChangeEvent } from "react";

import { TextField,ListItem, IconButton} from '@mui/material';
import { Edit, Delete, Save, Cancel } from '@mui/icons-material';
import { blue,blueGrey } from "@mui/material/colors";

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

const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-primary hover:text-hover">
  <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
  <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>;

const editIcont = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-primary hover:text-hover">
    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
</svg>;




export const UserTodoItem: React.FC<UserTodoItemProps> =
    ({ task, isEditing, editTaskTitle, handleTaskCompletedChange, handleTaskDeleteClick, handleEditButtonClick, handleEditTaskChange, handleEditTaskSave, handleEditTaskCancel }) => {
        return (     

            <tbody >
                <tr className="border border-gray-200 border-solid border-l-0 border-r-0 border-b-0 h-16">
                    <td className="px-4 py-4 align-middle"> <input className={`${isEditing ? "hidden" : "px-6 py-3 w-5 h-5  rounded-full  accent-primary focus:accent-primary align-middle"}`} type="checkbox" checked={task.completed} onChange={handleTaskCompletedChange(task)} /></td>
                             

                    {isEditing ? (
                        <>
                        <td className="w-full px-4 py-4">
                            <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    type="text" value={editTaskTitle} onChange={handleEditTaskChange} />
                               <td className="w-full px-4 py-4"> <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input></td>
                            </td>
                          
                        </>
                    ) : (
                        <>
                                <td className="text-lg px-6 py-3 text-primary ">
                                    <h3 className={`text-xl leading-6 font-medium text-primary ${task.completed ? "line-through text-gray-400" : ""}`}> {task.title}</h3>
                                </td>
                           
                                <td>
                                    <button className="px-2 py-3 mx-1" onClick={handleEditButtonClick(task)}>{ editIcont}</button>
                                    <button className="px-2 py-3 mx-1" onClick={handleTaskDeleteClick(task)}>{deleteIcon}</button>   
                                </td>
                        </>
                    )}
                </tr>
            </tbody>
        );
    }

//  <td className="flex items-center justify-end space-x-2 px-4 py-4">
//                                 <IconButton className="px-6 py-3 mx-1" onClick={handleEditButtonClick(task)} ><Edit /></IconButton>
//                                 <IconButton className="px-6 py-3 mx-1" onClick={handleTaskDeleteClick(task)} ><Delete /></IconButton>
//                                 </td>

