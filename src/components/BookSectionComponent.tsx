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
import { bookDetailsMockData } from "../mockData/bookSectionMockData";
import { Messages } from "../Messages";
import { useNavigate } from "react-router-dom";
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
  //backgroundColor: "yellow",
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
}[];

export const BookDetailsComponent: React.FC<{
  BookDetails: BookDetailsComponentProps;
}> = ({}) => {
  const navigate = useNavigate();
  const handleAddNewBook = () => {
    navigate("/addNewBook");
  };
  const handleStudentSection = () => {
    navigate("/studentSection");
  };
  const handleIssueBook = () => {
    navigate("/issueBook");
  };
  const handleReturnBook = () => {
    navigate("/returnBook");
  };
  return (
    <Box sx={container}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Typography variant="inherit" fontWeight="bold">
              {Messages.Book_Section}
            </Typography>
          </Button>
          <Button color="inherit" onClick={handleStudentSection}>
            <Typography variant="inherit" fontWeight="bold">
            {Messages.Student_Section}
            </Typography>
          </Button>
          <Button color="inherit" onClick={handleIssueBook}>
            <Typography variant="inherit" fontWeight="bold">
            {Messages.Issue_Book}
            </Typography>
          </Button>
          <Button color="inherit" onClick={handleReturnBook}>
            <Typography variant="inherit" fontWeight="bold">
            {Messages.Return_Book}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={subcontainer}>
        <Button
          variant="contained"
          sx={buttonStyles}
          color="inherit"
          onClick={handleAddNewBook}
        >
          {Messages.Add_New_Book}
        </Button>
        <TextField
          id="outlined-basic"
          label="Type here to search"
          variant="outlined"
          color="secondary"
          sx={textFieldStyles}
        />
        <Button variant="contained" sx={buttonStyles_1} color="inherit">
        {Messages.Filter}
        </Button>
      </Box>
      <Box sx={subcontainer_2}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{Messages.Book_Id}</TableCell>
                <TableCell>{Messages.Book_Name}</TableCell>
                <TableCell>{Messages.Author_Name}</TableCell>
                <TableCell>{Messages.Quantity}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookDetailsMockData.map((bookDetails) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{bookDetails.bookId}</TableCell>
                  <TableCell align="left">{bookDetails.bookName}</TableCell>
                  <TableCell align="left">{bookDetails.authorName}</TableCell>
                  <TableCell align="left">{bookDetails.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
