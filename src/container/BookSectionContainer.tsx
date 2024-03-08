import{HomePageComponent} from "../components/BookSectionComponent"
import { homePageMockData } from "../mockData/bookSectionMockData";



export const HomePageContainer:React.FC = () =>{
    return(
       <HomePageComponent BookDetails={homePageMockData} />
    );
    }