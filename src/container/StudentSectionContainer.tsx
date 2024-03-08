import{StudentSectionComponent} from "../components/StudentSectionComponent"
import { studentSectionMockData } from "../mockData/studentSectionMockData";



export const StudentSectionContainer:React.FC = () =>{
    return(
       <StudentSectionComponent StudentDetails={studentSectionMockData} />
    );
    }