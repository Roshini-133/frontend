import React from "react";
import { AppBar, Button ,Toolbar, Typography } from "@mui/material";
import { messages } from "../Messages";

type MenuBarProps = {
  handleBookSection: () => void;
  handleStudentSection: () => void;
  handleIssueBook: () => void;
  handleReturnBook: () => void;
};
export const AppBarComponent: React.FC<MenuBarProps> = ({
  handleBookSection,
  handleStudentSection,
  handleIssueBook,
  handleReturnBook,
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={handleBookSection}>
          <Typography variant="inherit" fontWeight="bold">
            {messages.book_section}
          </Typography>
        </Button>
        <Button color="inherit" onClick={handleStudentSection}>
          <Typography variant="inherit" fontWeight="bold">
            {messages.student_section}
          </Typography>
        </Button>
        <Button color="inherit" onClick={handleIssueBook}>
          <Typography variant="inherit" fontWeight="bold">
            {messages.issue_book}
          </Typography>
        </Button>
        <Button color="inherit" onClick={handleReturnBook}>
          <Typography variant="inherit" fontWeight="bold">
            {messages.return_book}
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
