import { useNavigate } from "react-router-dom";
import { StudentSectionComponent } from "../components/StudentSectionComponent";
import { studentSectionMockData } from "../mockData/studentSectionMockData";

export const StudentSectionContainer: React.FC = () => {
  const navigate = useNavigate();
  const handleAddNewStudent = () => {
    navigate("/addNewStudent");
  };
  const handleBookSection=()=>{
   navigate("/");
  }
  const handleIssueBook = () => {
    navigate("/issueBook");
  };
  const handleReturnBook = () => {
    navigate("/returnBook");
  };
  const handleStudentSection=()=>{
   navigate("/studentSection")
  }
  return (
    <StudentSectionComponent
      StudentDetails={studentSectionMockData}
      handleAddNewStudent={handleAddNewStudent}
      handleIssueBook={handleIssueBook}
      handleReturnBook={handleReturnBook}
      handleBookSection={handleBookSection}
      handleStudentSection={handleStudentSection}
    />
  );
};
