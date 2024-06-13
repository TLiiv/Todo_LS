import { Button } from "./UI/moving-border";

interface Props{
    completedTasks: number;
    totalTasks: number;
    handleTaskClearCompletedClick: () => void;
};



export const Hero: React.FC<Props>= ({completedTasks,totalTasks,handleTaskClearCompletedClick}) => {

  return (
      
    <div className="flex flex-col w-full h-auto items-center justify-center bg-background content-center py-3 ax-w-7xl px-6 rounded-xl shadow-md ">
      <div>
         <h1 className="relative  w-fit h-auto py-0 justify-center flex bg-gradient-to-r items-center from-sky-800 via-secondary to-sky-500  bg-clip-text  text-[52px] font-extrabold text-transparent text-center select-auto">
           Tasks done {completedTasks}/{totalTasks}
          </h1>
      </div>
      <div className='flex w-full justify-center'>
        <Button
        onClick={handleTaskClearCompletedClick}
        borderRadius="1.75rem"
        className="bg-background hover:text-primary  text-secondary text-lg  font-medium border-neutral-200 p-1 max-w-sm "
        >Clear Completed</Button>
      </div>
    </div>
    
  )
}
