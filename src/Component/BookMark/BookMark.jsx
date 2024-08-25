import Bookmarks from "../BookMarks/Bookmarks";


const BookMark = ({bookMarks, readingTime }) => {
    // console.log(bookMarks)
    return (
        <div>

            <div>
                <h1>Reading Time:{readingTime}</h1>
            </div>
            <h1>Book Mark Section:{bookMarks.length}</h1>

            {
               bookMarks.map(books =><Bookmarks  Bookmarks={books}
                
               ></Bookmarks>)
            }
            
        </div>
    );
};

export default BookMark;