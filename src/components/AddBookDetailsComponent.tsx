import React from "react";
import {
  Box,
  TextField,
  Theme,
  Typography,
  Button,
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
  backgroundColor: "yellow",
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
  backgroundColor: "",
};
const content_4: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  width: "750px",
};

export type AddBookDetailsComponentProps = {
  bookName: string;
  authorName: string;
  quantity: number;
  isLoading: boolean;
  isDetailsAdded: boolean;
  onBookName: (bookName: string) => void;
  onAuthorName: (authorName: string) => void;
  onQuantityChange: (quantity: number) => void;
  onSubmitClick: () => void;
};

export const AddBookDetailsComponent: React.FC<
  AddBookDetailsComponentProps
> = ({bookName,authorName,quantity,isLoading}) => {
  return (
    <Box sx={container}>
      <Box sx={heading}>
        <Typography sx={heading_1}>{messages.add_book_details}</Typography>
      </Box>
      <Box sx={subcontainer}>
        <Box sx={content_1}>
          <TextField
            label="Book Name"
            variant="outlined"
            color="secondary"
            sx={textFieldStyles}
            defaultValue={bookName}
          />
        </Box>
        <Box sx={content_1}>
          <TextField
            label="Author Name"
            variant="outlined"
            color="secondary"
            sx={textFieldStyles}
            defaultValue={authorName}
          />
        </Box>
        <Box sx={content_1}>
          <TextField
            label="Quantity"
            variant="outlined"
            color="secondary"
            sx={textFieldStyles}
            defaultValue={quantity}
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
