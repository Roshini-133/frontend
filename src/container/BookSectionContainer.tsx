import{BookDetailsComponent} from "../components/BookSectionComponent"
import { bookDetailsMockData } from "../mockData/bookSectionMockData";



export const BookDetailsContainer:React.FC = () =>{
    return(
       <BookDetailsComponent BookDetails={bookDetailsMockData} />
    );
    }