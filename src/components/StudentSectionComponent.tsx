import { SxProps } from "@mui/system";
import {
  AppBar,
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
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import {studentSectionMockData} from "../mockData/studentSectionMockData";
import {Messages} from "../Messages"
const textFieldStyles: SxProps<Theme> = {
  width: "250px",
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
 // backgroundColor: "yellow",
  padding: "10px",
  height: "100px",
  width: "750px",
};
const subcontainer_2: SxProps<Theme> = {
  display: "flex",
  marginTop: "50px",
  flexDirection: "row",
  justifyContent: "space-around",
 // backgroundColor: "grey",
  padding: "10px",
  height: "250px",
  minWidth: "500px",
};

export type StudentDetailsComponentProps = {
  rollNo?:number;  
  name?: string;
  department?: string;
}[];

export const StudentSectionComponent: React.FC<{
 StudentDetails: StudentDetailsComponentProps}
> = ({StudentDetails}) => {
  return (
    <Box sx={container}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Typography variant="inherit" fontWeight="bold">
              Book_Section
            </Typography>
          </Button>
          <Button color="inherit">
            <Typography variant="inherit" fontWeight="bold">
              StudentSection
            </Typography>
          </Button>
          <Button color="inherit">
            <Typography variant="inherit" fontWeight="bold">
              IssueBook
            </Typography>
          </Button>
          <Button color="inherit">
            <Typography variant="inherit" fontWeight="bold">
              ReturnBook
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={subcontainer}>
        <Button variant="contained" sx={buttonStyles} color="inherit">
          Add New Student
        </Button>
        <TextField
          id="outlined-basic"
          label="Type here to search"
          variant="outlined"
          color="secondary"
          sx={textFieldStyles}
        />
        <Button variant="contained" sx={buttonStyles_1} color="inherit">
          Filter
        </Button>
      </Box>
      <Box sx={subcontainer_2}>
        <TableContainer component={Paper}>
          <Table sx={{ width: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Roll No</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Department</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {studentSectionMockData.map((studentDetails)=>(    
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
