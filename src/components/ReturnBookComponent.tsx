import React from "react";
import {
  Box,
  Theme,
  Typography,
  Button,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { SxProps } from "@mui/system";
import { returnBookMockData } from "../mockData/returnBookMockData";


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
    rollNo?: number;
    bookId?: number;
    isFineAmount?:boolean;
    rollNumbersList?: number[];
    bookIdList?: number[];
    onRollNoChange?: (rollNo: number) => void;
    onBookIdChange?: (bookId: number) => void;
    onSubmitClick?: () => void;
  };
  

export const ReturnBookComponent: React.FC<
  ReturnBookComponentProps
> = ({}) => {
    function handleChange(): void {
    }

  return (
    <Box sx={container}>
      <Box sx={heading}>
        <Typography sx={heading_1}>Return Book Details</Typography>
      </Box>
      <Box sx={subcontainer}>
        <Box sx={content_1}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Roll No</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Roll No"
              onChange={handleChange}
              sx={textFieldStyles}
            >
              <MenuItem value="" disabled>
                Select the roll no
              </MenuItem>
              {returnBookMockData.rollNumbersList?.map((rollNo) => (
                <MenuItem key={rollNo} value={rollNo}>
                  {rollNo}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={content_1}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Book Id</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Book Id"
              onChange={handleChange}
              sx={textFieldStyles}
            >
              <MenuItem value="" disabled>
                Select the book id
              </MenuItem>
              {returnBookMockData.bookIdList?.map((bookId) => (
                <MenuItem key={bookId} value={bookId}>
                  {bookId}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={content_4}>
          <Button variant="contained" sx={buttonStyles} color="inherit">
            Submit
          </Button>
          {/* {returnBookMockData.isFineAmount ? (
            <Alert variant="filled" severity="error" sx={alertStyles} >
                You have fine
            </Alert>
          ) : (
            <Alert variant="filled" severity="success"sx={alertStyles}>
                You don't have fine
            </Alert>
          )} */}
        </Box>
      </Box>
    </Box>
  );
};
