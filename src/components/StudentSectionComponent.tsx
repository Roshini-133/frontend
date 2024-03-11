import { SxProps } from "@mui/system";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Theme,
} from "@mui/material";
import React from "react";
import {messages} from "../Messages"
import { AppBarComponent } from "./AppBarComponent";
const textFieldStyles: SxProps<Theme> = {
  width: "250px",
};
const tableStyles: SxProps<Theme> = {
  "&:last-child td, &:last-child th": { border: 0 },
  minWidth: 650,
};
const buttonStyles: SxProps<Theme> = {
  width: "150px",
  height: "50px",
};
const buttonStyles_1: SxProps<Theme> = {
  width: "100px",
  height: "50px",
};

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  background: `linear-gradient(45deg, #fbd49d, #f7a5cb)`,
  minHeight: "98vh",
  width: "100%",
  alignItems: "center",
};
const subcontainer: SxProps<Theme> = {
  display: "flex",
  marginTop: "80px",
  flexDirection: "row",
  justifyContent: "space-around",
  padding: "10px",
  height: "100px",
  width: "750px",
};
const subcontainer_2: SxProps<Theme> = {
  display: "flex",
  marginTop: "50px",
  flexDirection: "row",
  justifyContent: "space-around",
  padding: "10px",
  height: "250px",
  minWidth: "500px",
};

export type StudentDetailsComponentProps = {
  rollNo:number;  
  name: string;
  department: string;
  
}[];
export type StudentDetailsProps ={
  StudentDetails: StudentDetailsComponentProps
  handleBookSection :()=>void;
  handleIssueBook:()=>void;
  handleReturnBook:() =>void;
  handleAddNewStudent:() => void;
  handleStudentSection:() =>void;
}
export const StudentSectionComponent: React.FC<StudentDetailsProps
> = ({StudentDetails,handleAddNewStudent,handleIssueBook,handleReturnBook,handleBookSection,handleStudentSection}) => {
  return (
    <Box sx={container}>
      <AppBarComponent handleReturnBook={handleReturnBook}
      handleIssueBook={handleIssueBook}  
       handleBookSection={handleBookSection} handleStudentSection={handleStudentSection}/>
      <Box sx={subcontainer}>
        <Button variant="contained" sx={buttonStyles} color="inherit" onClick={handleAddNewStudent}>
          {messages.add_new_student}
        </Button>
        <TextField
          label="Type here to search"
          variant="outlined"
          color="secondary"
          sx={textFieldStyles}
        />
        <Button variant="contained" sx={buttonStyles_1} color="inherit">
          {messages.filter}
        </Button>
      </Box>
      <Box sx={subcontainer_2}>
        <TableContainer component={Paper}>
          <Table sx={tableStyles} >
            <TableHead>
              <TableRow>
                <TableCell align="center">{messages.roll_no}</TableCell>
                <TableCell align="center">{messages.name}</TableCell>
                <TableCell align="center">{messages.department}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {StudentDetails.map((studentDetails)=>(    
              <TableRow
                sx={tableStyles}
              >
                <TableCell align="center">{studentDetails.rollNo}</TableCell>
                <TableCell align="center">{studentDetails.name}</TableCell>
                <TableCell align="center">{studentDetails.department}</TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
