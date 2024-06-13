import { ChangeEvent } from "react";

import { ArchiveBoxXMarkIcon, CheckIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";

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

            <tbody >
                <tr className="border border-gray-200 border-solid border-l-0 border-r-0 border-b-0 h-16">
                    <td className="px-4 py-4 align-middle"> <input className={`${isEditing ? "hidden" : "px-6 py-3 w-5 h-5  rounded-full  accent-primary focus:accent-primary align-middle"}`} type="checkbox" checked={task.completed} onChange={handleTaskCompletedChange(task)} /></td>


                    {isEditing ? (
                        <>
                            <td className="w-full px-4 py-4">
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    type="text" value={editTaskTitle} onChange={handleEditTaskChange} />
                            </td>
                            <td className="flex items-center justify-end space-x-2 px-4 py-4">
                                <button className="px-2 py-3 mx-1" onClick={handleEditTaskSave(task)}><CheckIcon className="size-6 text-primary hover:text-hover" /></button>
                                <button className="px-2 py-3 mx-1" onClick={handleEditTaskCancel}><XMarkIcon className="size-6 text-primary hover:text-hover" /></button>
                            </td>

                        </>
                    ) : (
                        <>
                            <td className="text-lg px-6 py-3 text-primary ">
                                <h3 className={`text-xl leading-6 font-medium text-primary ${task.completed ? "line-through text-gray-400" : ""}`}> {task.title}</h3>
                            </td>

                            <td className="flex items-center justify-end space-x-2 px-4 py-4">
                                <button className="px-2 py-3 mx-1" onClick={handleEditButtonClick(task)}><PencilIcon className="size-6 text-primary hover:text-hover" /></button>
                                <button className="px-2 py-3 mx-1" onClick={handleTaskDeleteClick(task)}> <ArchiveBoxXMarkIcon className="size-6 text-primary hover:text-hover" /></button>
                            </td>
                        </>
                    )}
                </tr>
            </tbody>
        );
    }

