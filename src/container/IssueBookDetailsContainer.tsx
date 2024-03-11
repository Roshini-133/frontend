import{IssueBookDetailsComponent} from "../components/IssueBookDetailsComponent"
import {issueBookDetailsMockData} from '../mockData/issueBookDetails'
import {useNavigate} from 'react-router-dom'

export const IssueBookDetailsContainer:React.FC = () =>{
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
       <IssueBookDetailsComponent issueBook={issueBookDetailsMockData} handleStudentSection ={handleStudentSection} 
                        handleIssueBook={handleIssueBook}
                        handleReturnBook={handleReturnBook}
                        handleBookSection={handleBookSection}/>
    );
    }