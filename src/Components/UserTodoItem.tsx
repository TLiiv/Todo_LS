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
            
            <ListItem divider>
                
                <input type="checkbox" checked={task.completed} onChange={handleTaskCompletedChange(task)} />
                {isEditing ? (
                    <>
                        <TextField type="text" value={editTaskTitle} onChange={handleEditTaskChange}  size="small"
                    style={{ marginRight: '10px' }}/>
                        <IconButton onClick={handleEditTaskSave(task)}><Save /></IconButton>
                        <IconButton onClick={handleEditTaskCancel}> <Cancel /></IconButton>
                    </>
                ) : (
                    <>
                        {task.title}
                        <IconButton onClick={handleEditButtonClick(task)}><Edit /></IconButton>
                        <IconButton onClick={handleTaskDeleteClick(task)}><Delete /></IconButton>
                    </>
                )}
               
            </ListItem>
            
        );
}
