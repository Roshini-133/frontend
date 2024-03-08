import {AddStudentDetailsComponentProps} from "../components/AddStudentDetailsComponent"


export const addStudentDetailsMockData :AddStudentDetailsComponentProps={
    isLoading :false,
    isDetailsAdded:false,
    rollNo: 121,
    name: "John Doe",
    department: "MCA",
    onrollNoChange:() =>{},
    onNameChange:()=>{},
    onDepartmentChange:()=>{},
    onSubmitClick:()=>{}
}