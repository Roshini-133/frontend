import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookDetailsContainer } from "./container/BookSectionContainer";
import { AddBookDetailsContainer } from "./container/AddBookDetailsContainer";
import { StudentSectionContainer } from "./container/StudentSectionContainer";
import { AddStudentDetailsContainer } from "./container/AddStudentDetailsContainer";
import { IssueBookDetailsContainer } from "./container/IssueBookDetailsContainer";
import { ReturnBookContainer } from "./container/ReturnBookContainer";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<BookDetailsContainer/>}></Route>
      <Route path="/addNewBook" element={<AddBookDetailsContainer/>}></Route>
      <Route path="/studentSection" element={<StudentSectionContainer/>}></Route>
      <Route path="/addNewStudent" element={<AddStudentDetailsContainer/>}></Route>
      <Route path="/issueBook" element={<IssueBookDetailsContainer/>}></Route>
      <Route path="/returnBook" element={<ReturnBookContainer/>}></Route>
    </Routes>
  </Router>;
}

export default App;
