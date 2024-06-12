
interface Props{

}

export const Header: React.FC<Props> = (props: Props) => {
    return (
        //     <div className="content-center py-3 ax-w-7xl px-6 block mx-auto bg-background w-full h-32 rounded-t-xl shadow-xl ">
        //    <p className="drop-shadow-[35px_0px_35px_rgba(22,121,171,0.9)] font-sans  text-center text-secondary  mb-4 text-3xl font-semibold tracking-tight leading-none md:text-4xl xl:text-5xl">To Do <br /> Or Not To Do </p>
            // </div>
<div className="flex h-32 w-full items-center justify-center bg-secondary content-center py-3 ax-w-7xl px-6 rounded-t-xl shadow-xl ">
    <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white via-teal-100 to-purple-100  bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
    To Do Or Not To Do
  </span>
    <h1
        className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white via-teal-100 to-purple-100 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        To Do Or Not To Do
                    </h1>
      
</div>
)
}



//    <div className="flex h-32 w-full items-center justify-center bg-secondary ">
//     <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white via-white to-white  bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
//     To Do Or Not To Do
//   </span>
//     <h1
//         className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white via-white to-white bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
//         To Do Or Not To Do
//     </h1>
// </div>