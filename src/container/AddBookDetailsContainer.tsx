import{AddBookDetailsComponent} from "../components/AddBookDetailsComponent"
import { addBookDetailsMockData } from "../mockData/addBookDetails";



export const AddBookDetailsContainer:React.FC = () =>{
    return(
       <AddBookDetailsComponent  
       {...addBookDetailsMockData}  />
    );
    }