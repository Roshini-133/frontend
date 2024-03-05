import React from "react";
import {
  Box,
  SxProps,
  TextField,
  Theme,
  Typography,
  Button,
} from "@mui/material";
//import bgimage from '../assets/background1.png'
const textFieldStyles: SxProps<Theme> = {
  width: "450px",
};
const buttonStyles: SxProps<Theme> = {
  width: "200px",
  height: "50px",
};
const heading_1: SxProps<Theme> = {
  fontSize:"50px",
  marginTop:"50px"
};
const heading: SxProps<Theme> = {
  display:"flex",
  justifyContent: "flex-start",
};
const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100%",
  alignItems: "center",
 // backgroundImage:`url(${bgimage})`
};

const subcontainer: SxProps<Theme> = {
  display: "flex",
  flex:1,
  alignItems:"center",
  justifyContent:"center",
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
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  width: "750px",
};

export type AddBookDetailsComponentProps = {
  bookName?: string;
  authorName?: string;
  quantity?: number;
  onBookName?: (bookName: string) => void;
  onAuthorName?: (authorName: string) => void;
  onQuantityChange?: (quantity: number) => void;
  onSubmitClick?: () => void;
};

export const AddBookDetailsComponent: React.FC<
  AddBookDetailsComponentProps
> = ({ bookName, onQuantityChange}) => {
  return (
    <Box sx={container}>
      <Box sx={heading}>
        <Typography sx={heading_1}>Add Book Details</Typography>
      </Box>
      <Box sx={subcontainer}>
        <Box sx={content_1}>
          <TextField
            id="outlined-basic"
            label="Book Name"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Box>
        <Box sx={content_1}>
          <TextField
            id="outlined-basic"
            label="Author Name"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Box>
        <Box sx={content_1}>
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Box>
        <Box sx={content_4}>
          <Button variant="contained" sx={buttonStyles}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
