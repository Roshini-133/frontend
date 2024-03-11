import React from "react";
import {
  Box,
  Theme,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import { SxProps } from "@mui/system";
import { messages } from "../Messages";
import { AppBarComponent } from "./AppBarComponent";

const textFieldStyles: SxProps<Theme> = {
  width: "450px",
};
const buttonStyles: SxProps<Theme> = {
  width: "200px",
  height: "50px",
};
const alertStyles: SxProps<Theme> = {
  marginTop: "10px",
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
  height: "300px",
  width: "750px",
};
const content_1: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "100px",
  width: "450px",
};
const content_4: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  width: "750px",
};

export type ReturnBookComponentProps = {
  rollNo: number;
  bookId: number;
  isFineAmount: boolean;
  rollNumbersList: number[];
  bookIdList: number[];
  onRollNoChange: (rollNo: number) => void;
  onBookIdChange: (bookId: number) => void;
  onSubmitClick: () => void;
};
type ReturnBookProps = {
  returnBook: ReturnBookComponentProps;
  handleStudentSection: () => void;
  handleIssueBook: () => void;
  handleReturnBook: () => void;
  handleBookSection: () => void;
};

export const ReturnBookComponent: React.FC<ReturnBookProps> = ({
  returnBook,
  handleBookSection,
  handleIssueBook,
  handleReturnBook,
  handleStudentSection,
}) => {
  return (
    <Box sx={container}>
      <AppBarComponent
        handleStudentSection={handleStudentSection}
        handleIssueBook={handleIssueBook}
        handleReturnBook={handleReturnBook}
        handleBookSection={handleBookSection}
      />

      <Box sx={heading}>
        <Typography sx={heading_1}>{messages.return_book_details}</Typography>
      </Box>
      <Box sx={subcontainer}>
        <Box sx={content_1}>
          <FormControl fullWidth>
            <InputLabel>{messages.roll_no}</InputLabel>
            <Select
              value={returnBook.rollNo}
              label="Roll No"
              sx={textFieldStyles}
            >
              <MenuItem value={returnBook.rollNo} disabled>
                {messages.select_the_roll_no}
              </MenuItem>
              {returnBook.rollNumbersList.map((rollNo) => (
                <MenuItem key={rollNo} value={rollNo}>
                  {rollNo}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={content_1}>
          <FormControl fullWidth>
            <InputLabel>{messages.book_id}</InputLabel>
            <Select
              value={returnBook.bookId}
              label="Book Id"
              sx={textFieldStyles}
            >
              <MenuItem value="" disabled>
                {messages.select_the_book_id}
              </MenuItem>
              {returnBook.bookIdList.map((bookId) => (
                <MenuItem key={bookId} value={bookId}>
                  {bookId}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={content_4}>
          <Button variant="contained" sx={buttonStyles} color="inherit">
            {messages.submit_button}
          </Button>
          {returnBook.isFineAmount ? (
            <Alert variant="filled" severity="error" sx={alertStyles}>
              {messages.payable_fine}
            </Alert>
          ) : (
            <Alert variant="filled" severity="success" sx={alertStyles}>
              {messages.no_fine}
            </Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
};
