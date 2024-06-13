import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props{
    completedTasks: number;
    totalTasks: number;
    handleTaskClearCompletedClick: () => void;
};



export const Hero: React.FC<Props>= ({completedTasks,totalTasks,handleTaskClearCompletedClick}) => {

    return (
        <div className="flex h-32 w-full items-center justify-center bg-background content-center py-3 ax-w-7xl px-6 rounded-xl shadow-md ">
                        {/* <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-sky-800 via-secondary to-sky-500  bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
                               Tasks done {completedTasks}/{totalTasks}
                        </span> */}
                        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-sky-800 via-secondary to-sky-500  bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                              Tasks done {completedTasks}/{totalTasks}
                        </h1>
                </div>)
}

    //  <>
    // <section>
    // <Box sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
    //     Tasks done
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //     {completedTasks}/{totalTasks}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //   <Button  variant="contained" color="primary" onClick={handleTaskClearCompletedClick}>Clear Completed Tasks</Button>
    //   </CardActions>
    // </Card>
    // </Box>
    // </section>
// </>)


//
//  return (
//         <div className="flex h-32 w-full items-center justify-center bg-secondary content-center py-3 ax-w-7xl px-6 rounded-t-xl shadow-xl ">
//                         <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white via-teal-100 to-purple-100  bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
//                                Tasks done {completedTasks}/{totalTasks}
//                         </span>
//                         <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white via-teal-100 to-purple-100 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
//                               Tasks done {completedTasks}/{totalTasks}
//                         </h1>
//                 </div>)