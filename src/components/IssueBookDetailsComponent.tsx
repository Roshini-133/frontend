import { Box } from '@mui/material';
import React from 'react'
import {SxProps} from '@mui/system'
import { Theme } from '@mui/joy';
 
const container : SxProps<Theme> ={
    display:'flex',
    backgroundColor:'green'
}

type IssueBookDetailsComponentProps ={
    rollNo ?: number;
    bookId ?: number;
    issueDate ?: Date;
    rentalDays ?: number;
    onRollNoChange?:(rollNo:number)=>void
    onbookIdChange?:(bookId:number)=>void
    onIssueDateChange?:(issueDate:Date)=>void
    onRentalDaysChange?:(rentalDays:number)=>void
    onSubmitClick?:()=>void
}

export const IssueBookDetailsComponent: React.FC<
  IssueBookDetailsComponentProps
> = ({}) => {
  return (
      <Box >

      </Box>
  )}