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
import {messages} from "../Messages"

const textFieldStyles: SxProps<Theme> = {
  width: "450px",
 };
 const circularProgressStyles: SxProps<Theme> = {
  size : "sm",
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
  rollNo: number;
  name: string;
  department: string;
  isLoading: boolean;
  isDetailsAdded: boolean;
  onrollNoChange: (rollNo: number) => void;
  onNameChange: (name: string) => void;
  onDepartmentChange: (department: string) => void;
  onSubmitClick: () => void;
};

export const AddStudentDetailsComponent: React.FC<
  AddStudentDetailsComponentProps
> = ({rollNo,name,department,isDetailsAdded,isLoading}) => {
  return (
    <Box sx={container}>
       {isDetailsAdded ? (
            <Alert variant="filled" severity="success" sx={alertStyles} >
              {messages.success_message}
            </Alert>
          ) : (
            <Alert variant="filled" severity="error"sx={alertStyles}>
              {messages.error_message}
            </Alert>
          )}
      <Box sx={heading}>
     
        <Typography sx={heading_1}>{messages.add_student_details}</Typography>
      </Box>
      <Box sx={subcontainer}>
        <Box sx={content_1}>
          <TextField
            label="Roll No"
            variant="outlined"
            color="secondary"
            sx={textFieldStyles}
            defaultValue={rollNo}
          />
        </Box>
        <Box sx={content_1}>
          <TextField
            label="Name"
            variant="outlined"
            color="secondary"
            sx={textFieldStyles}
            defaultValue={name}
          />
        </Box>
        <Box sx={content_1}>
          <TextField
            label="Department"
            variant="outlined"
            color="secondary"
            sx={textFieldStyles}
            defaultValue={department}
          />
        </Box>
        <Box sx={content_4}>
          <Button variant="contained" sx={buttonStyles} color="inherit">
            {isLoading ? (
              <CircularProgress sx={circularProgressStyles} />
            ) : (
              messages.submit_button
            )}
          </Button>
          
        </Box>
      </Box>
    </Box>
  );
};
