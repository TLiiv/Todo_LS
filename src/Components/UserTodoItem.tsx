
import { ChangeEvent } from "react";

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
            <li>
                <input type="checkbox" checked={task.completed} onChange={handleTaskCompletedChange(task)} />
                {isEditing ? (
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
}
