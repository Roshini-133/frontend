import{AddStudentDetailsComponent} from "../components/AddStudentDetailsComponent"
import {addStudentDetailsMockData} from "../mockData/addStudentDetails"


export const AddStudentDetailsContainer:React.FC = () =>{
    return(
       <AddStudentDetailsComponent  {...addStudentDetailsMockData}/>
    );
    }