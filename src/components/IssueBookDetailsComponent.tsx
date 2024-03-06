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
import { issueBookDetailsMockData } from "../mockData/issueBookDetails";
const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  background: `linear-gradient(45deg, #fbd49d, #f7a5cb)`,
  minHeight: "98vh",
  width: "100%",
  // minWidth:"100vh",
  alignItems: "center",

  // backgroundImage:`url(${background1})`
};
const heading_1: SxProps<Theme> = {
  fontSize: "40px",
  marginTop: "80px",
  fontFamily: "fantasy",
};
const heading: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-start",
  //backgroundColor: "green",
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
  //height: "60px""
  backgroundColor: "yellow",
  display: "flex",
  flex: 1,
  width: "750px",
};
const buttonStyles: SxProps<Theme> = {
  width: "200px",
  height: "50px",
};
export type IssueBookDetailsComponentProps = {
  rollNo?: number;
  bookId?: number;
  issueDate?: Date;
  rentalDays?: number;
  rollNumbersList?: number[];
  bookIdList?: number[];
  onRollNoChange?: (rollNo: number) => void;
  onbookIdChange?: (bookId: number) => void;
  onIssueDateChange?: (issueDate: Date) => void;
  onRentalDaysChange?: (rentalDays: number) => void;
  onSubmitClick?: () => void;
};

export const IssueBookDetailsComponent: React.FC<
  IssueBookDetailsComponentProps
> = ({}) => {
  function handleChange(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Box sx={container}>
      <Box sx={heading}>
        <Typography sx={heading_1}>Issue book Details</Typography>
      </Box>
      <Box sx={subcontainer}>
        <Box sx={content}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Roll No</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Roll No"
              onChange={handleChange}
            >
              <MenuItem value="" disabled>
                Select the roll no
              </MenuItem>
              {issueBookDetailsMockData.rollNumbersList?.map((rollNo) => (
                <MenuItem key={rollNo} value={rollNo}>
                  {rollNo}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={content}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">BookId</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Book Id"
              onChange={handleChange}
            >
              <MenuItem value="" disabled>
                Select the bookid
              </MenuItem>
              {issueBookDetailsMockData.bookIdList?.map((bookId) => (
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
              <DatePicker label="Issued Date" sx={datePickerStyles} />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box sx={content}>
          <TextField
            id="outlined-basic"
            label="Rental days"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Box>
        <Box sx={content_1}>
          <Button variant="contained" sx={buttonStyles}>
            Submit{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
