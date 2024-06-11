interface Props{
    completedTasks: number;
    totalTasks: number;
};

export const Hero: React.FC<Props>= ({completedTasks,totalTasks}) => {

    return (
        <>
    <section>
        <p>Tasks done</p>
        <div>{completedTasks}/{totalTasks}</div>
    </section>
    </>)
}