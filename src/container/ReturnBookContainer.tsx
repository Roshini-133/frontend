import{ReturnBookComponent} from "../components/ReturnBookComponent"
import { returnBookMockData } from "../mockData/returnBookMockData"
import {useNavigate} from 'react-router-dom'


export const ReturnBookContainer:React.FC = () =>{
   const navigate = useNavigate()
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
       <ReturnBookComponent returnBook={returnBookMockData}handleStudentSection ={handleStudentSection} 
       handleIssueBook={handleIssueBook}
       handleReturnBook={handleReturnBook}
       handleBookSection={handleBookSection}/>
    );
    }