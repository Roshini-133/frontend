import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import { SxProps } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {messages} from "../Messages"
import { AppBarComponent } from "./AppBarComponent";

const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  background: `linear-gradient(45deg, #fbd49d, #f7a5cb)`,
  minHeight: "98vh",
  width: "100%",
  alignItems: "center",

};
const heading_1: SxProps<Theme> = {
  fontSize: "40px",
  marginTop: "80px",
  fontFamily: "fantasy",
};
const heading: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-start",
};
const subcontainer: SxProps<Theme> = {
  display: "flex",
  flex: 1,
  marginTop: "120px",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "10px",
};
const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "100px",
  width: "450px",
};
const content_1: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100px",
  width: "750px",
  backgroundColor: "",
};
const textFieldStyles: SxProps<Theme> = {
  width: "750px",
};
const datePickerStyles: SxProps<Theme> = {
  display: "flex",
  flex: 1,
  width: "750px",
};
const buttonStyles: SxProps<Theme> = {
  width: "200px",
  height: "50px",
};
export type IssueBookDetailsComponentProps = {
  rollNo: number;
  bookId: number;
  issueDate: Date;
  rentalDays: number;
  rollNumbersList: number[];
  bookIdList: number[];
  onRollNoChange: (rollNo: number) => void;
  onbookIdChange: (bookId: number) => void;
  onIssueDateChange: (issueDate: Date) => void;
  onRentalDaysChange: (rentalDays: number) => void;
  onSubmitClick: () => void;
};
type IssueBookProps ={
  issueBook:IssueBookDetailsComponentProps
  handleStudentSection :()=>void;
  handleIssueBook:()=>void;
  handleReturnBook:() =>void;
  handleBookSection:()=>void;
}
export const IssueBookDetailsComponent: React.FC<
  IssueBookProps
> = ({issueBook,handleBookSection,handleIssueBook,handleReturnBook,handleStudentSection}) => {
  return (
    <Box sx={container}>
            <AppBarComponent  handleStudentSection ={handleStudentSection} 
                        handleIssueBook={handleIssueBook}
                        handleReturnBook={handleReturnBook}
                        handleBookSection={handleBookSection}/>
      

      <Box sx={heading}>
        <Typography sx={heading_1}>{messages.issue_book_details}</Typography>
      </Box>
      <Box sx={subcontainer}>
        <Box sx={content}>
          <FormControl fullWidth>
            <InputLabel >{messages.roll_no}</InputLabel>
            <Select
              value={issueBook.rollNo}
              label="Roll No"
        
            >
              <MenuItem value={issueBook.rollNo} disabled>
                {messages.select_the_roll_no}
              </MenuItem>
              {issueBook.rollNumbersList?.map((rollNo) => (
                <MenuItem key={rollNo} value={rollNo}>
                  {rollNo}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={content}>
          <FormControl fullWidth>
            <InputLabel >{messages.book_id}</InputLabel>
            <Select
              
              value={issueBook.bookId}
              label="Book Id"
            >
              <MenuItem value={issueBook.bookId} disabled>
                {messages.select_the_bookid}
              </MenuItem>
              {issueBook.bookIdList?.map((bookId) => (
                <MenuItem key={bookId} value={bookId}>
                  {bookId}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={content}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Issued Date" sx={datePickerStyles}  />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box sx={content}>
          <TextField
            label="Rental days"
            variant="outlined"
            sx={textFieldStyles}
            defaultValue={issueBook.rentalDays}
          />
        </Box>
        <Box sx={content_1}>
          <Button variant="contained" sx={buttonStyles}>
            {messages.submit_button}{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
