
interface Props {

}

export const Header: React.FC<Props> = (props: Props) => {
        return (
                <div className="flex h-32  w-full items-center justify-center bg-secondary content-center py-3 ax-w-7xl px-6 rounded-xl shadow-md mb-8">
                       <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white via-teal-100 to-purple-100 bg-clip-text md:text-6xl text-4xl font-extrabold text-transparent text-center select-auto">
                               To Do <br className="md:hidden"/> Or Not To Do
                        </h1>
                </div>
        )
}


