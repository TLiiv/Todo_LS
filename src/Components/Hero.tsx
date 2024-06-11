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
        <>
    <section>
    <Box sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        Tasks done
        </Typography>
        <Typography variant="h5" component="div">
        {completedTasks}/{totalTasks}
        </Typography>
      </CardContent>
      <CardActions>
      <Button  variant="contained" color="primary" onClick={handleTaskClearCompletedClick}>Clear Completed Tasks</Button>
      </CardActions>
    </Card>
    </Box>
    </section>
    </>)
}