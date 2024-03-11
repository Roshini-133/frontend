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
import { messages } from "../Messages";
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
  backgroundColor: "grey",
  padding: "10px",
  height: "550px",
  width: "750px",
};

export type BookDetailsComponentProps = {
  bookId?: number;
  bookName?: string;
  authorName?: string;
  quantity?: number;
};

export type BookDetailsProps = {
  bookDetails: BookDetailsComponentProps[];
  handleAddNewBook: () => void;
  handleStudentSection :()=>void;
  handleIssueBook:()=>void;
  handleReturnBook:() =>void;
  handleBookSection:()=>void;
};

export const BookDetailsComponent: React.FC<BookDetailsProps> = ({bookDetails,
   handleAddNewBook,handleStudentSection ,handleIssueBook,handleBookSection,
  handleReturnBook}) => {
  return (
    <Box sx={container}>
      <AppBarComponent  handleStudentSection ={handleStudentSection} 
                        handleIssueBook={handleIssueBook}
                        handleReturnBook={handleReturnBook}
                        handleBookSection={handleBookSection}/>
      
      <Box sx={subcontainer}>
        <Button
          variant="contained"
          sx={buttonStyles}
          color="inherit"
          onClick={handleAddNewBook}
        >
          {messages.add_new_book}
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
                <TableCell>{messages.book_id}</TableCell>
                <TableCell>{messages.book_name}</TableCell>
                <TableCell>{messages.author_name}</TableCell>
                <TableCell>{messages.quantity}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookDetails.map((bookDetail) => (
                <TableRow sx={tableStyles}>
                  <TableCell align="left">{bookDetail.bookId}</TableCell>
                  <TableCell align="left">{bookDetail.bookName}</TableCell>
                  <TableCell align="left">{bookDetail.authorName}</TableCell>
                  <TableCell align="left">{bookDetail.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
