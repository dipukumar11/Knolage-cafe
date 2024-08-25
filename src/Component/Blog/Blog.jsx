
import { MdBookmarkAdd } from "react-icons/md";

const Blog = ({blog, handelBookMark, handelMarkRead}) => {
    const {cover,author_img,author,posted_date,reading_time, title, hashtags}=blog;
    
    return (
        <div className="mt-10">
            <img className="rounded-2xl" src={cover} alt="" />
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img className="w-16" src={author_img} alt="" />
                    <div className="ml-4 text-lg font-bold mt-5">
                        <h1>{author}</h1>
                        <h2>{posted_date} </h2>
                    </div>


                </div>
               <div className="flex text-xl ">
               <h1>{reading_time} min Read  </h1>
               <button onClick={()=>handelBookMark(blog)}  className="ml-2 text-red-500"> < MdBookmarkAdd /></button>
               </div>
            </div>
            
            <h1 className="text-2xl font-bold">{title}</h1>

           <div className="flex">
           {
                hashtags.map(hash => <p><a >#{hash}</a></p>)
            }
           </div>

           <button onClick={()=>handelMarkRead(reading_time)}>mark as read</button>

            
        </div>
    );
};

export default Blog;