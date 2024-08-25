

const Bookmarks = ({Bookmarks}) => {
    // console.log(Bookmarks)
    const {title}=Bookmarks;
    return (
        <div  className="bg-gray-400 ml-6 p-2 mt-10">
            <div className=" bg-yellow-300 rounded-xl p-3 text-2xl text-white">
                <h1>{title}</h1>
            </div>


            
        </div>
    );
};

export default Bookmarks;