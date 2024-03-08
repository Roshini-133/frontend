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
import {homePageMockData} from "../mockData/bookSectionMockData";
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
  bookId?:number;  
  bookName?: string;
  authorName?: string;
  quantity?: number;
}[];

export const HomePageComponent: React.FC<{
 BookDetails: BookDetailsComponentProps}
> = ({BookDetails}) => {
  return (
    <Box sx={container}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Typography variant="inherit" fontWeight="bold">
              BookSection
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
          Add New Book
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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Book Id</TableCell>
                <TableCell>Book Name</TableCell>
                <TableCell>Author-Name</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {homePageMockData.map((bookDetails)=>(    
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
