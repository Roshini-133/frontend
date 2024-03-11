import React from "react";
import {
  Box,
  TextField,
  Theme,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import { SxProps } from "@mui/system";
import CircularProgress from "@mui/joy/CircularProgress";
import { addStudentDetailsMockData } from "../mockData/addStudentDetails";
import {Messages} from "../Messages"
//import background1 from './bgimage.jpeg'
//import bgimage from '../assets/background1.png'
const textFieldStyles: SxProps<Theme> = {
  width: "450px",
 };
const buttonStyles: SxProps<Theme> = {
  width: "200px",
  height: "50px",
};
const alertStyles: SxProps<Theme> = {
 marginTop:"10px"
};
const heading_1: SxProps<Theme> = {
  fontSize: "40px",
  marginTop: "80px",
  fontFamily: "fantasy",
  color: "",
};
const heading: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-start",
};
const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  background: `linear-gradient(45deg, #fbd49d, #f7a5cb)`,
  minHeight: "98vh",
  width: "100%",
  alignItems: "center",
 // backgroundImage:`url(${background1})`
};

const subcontainer: SxProps<Theme> = {
  display: "flex",
  marginTop: "120px",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "10px",
  height: "400px",
  width: "750px",
};
const content_1: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-around",
  height: "100px",
  width: "750px",
};
const content_4: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  width: "750px",
};

export type AddStudentDetailsComponentProps = {
  rollNo?: number;
  name?: string;
  department?: string;
  onrollNoChange?: (rollNo: number) => void;
  onNameChange?: (name: string) => void;
  onDepartmentChange?: (department: string) => void;
  onSubmitClick?: () => void;
  isLoading?: boolean;
  isDetailsAdded?: boolean;
};

export const AddStudentDetailsComponent: React.FC<
  AddStudentDetailsComponentProps
> = ({}) => {
  return (
    <Box sx={container}>
       {addStudentDetailsMockData.isDetailsAdded ? (
            <Alert variant="filled" severity="success" sx={alertStyles} >
              {Messages.Success_Message}
            </Alert>
          ) : (
            <Alert variant="filled" severity="error"sx={alertStyles}>
              {Messages.Error_Message}
            </Alert>
          )}
      <Box sx={heading}>
     
        <Typography sx={heading_1}>{Messages.Add_Student_Details}</Typography>
      </Box>
      <Box sx={subcontainer}>
        <Box sx={content_1}>
          <TextField
            id="outlined-basic"
            label="Roll No"
            variant="outlined"
            color="secondary"
            sx={textFieldStyles}
            defaultValue={addStudentDetailsMockData.rollNo}
          />
        </Box>
        <Box sx={content_1}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            color="secondary"
            sx={textFieldStyles}
          />
        </Box>
        <Box sx={content_1}>
          <TextField
            id="outlined-basic"
            label="Department"
            variant="outlined"
            color="secondary"
            sx={textFieldStyles}
          />
        </Box>
        <Box sx={content_4}>
          <Button variant="contained" sx={buttonStyles} color="inherit">
            {addStudentDetailsMockData.isLoading ? (
              <CircularProgress size="sm" />
            ) : (
              Messages.Submit_Button
            )}
          </Button>
          
        </Box>
      </Box>
    </Box>
  );
};
