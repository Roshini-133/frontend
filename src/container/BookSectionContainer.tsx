import{BookDetailsComponent} from "../components/BookSectionComponent"
import { bookDetailsMockData } from "../mockData/bookSectionMockData";
import { useNavigate } from "react-router-dom";


export const BookDetailsContainer:React.FC = () =>{
   const navigate = useNavigate();
   const handleAddNewBook = () => {
      navigate("/addNewBook");
    };
    const handleStudentSection = () => {
      navigate("/studentSection");
    };
    const handleIssueBook = () => {
      navigate("/issueBook");
    };
    const handleReturnBook = () => {
      navigate("/returnBook");
    };
    const handleBookSection=()=>{
      navigate("/");
    }
    return(
       <BookDetailsComponent bookDetails={bookDetailsMockData}
        handleAddNewBook={handleAddNewBook}
        handleBookSection={handleBookSection}
        handleStudentSection ={handleStudentSection}
        handleIssueBook={handleIssueBook}
        handleReturnBook={handleReturnBook}/>
    );
    }