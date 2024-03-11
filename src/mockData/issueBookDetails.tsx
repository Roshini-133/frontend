import {IssueBookDetailsComponentProps} from "../components/IssueBookDetailsComponent"


export const issueBookDetailsMockData :IssueBookDetailsComponentProps={
    rollNo: 121,
    bookId:112,
   issueDate:new Date(2024,2,15),
    rentalDays:4,
    onRollNoChange:() =>{},
    onbookIdChange:()=>{},
    onIssueDateChange:()=>{},
    onRentalDaysChange:()=>{},
    onSubmitClick:()=>{},
    rollNumbersList :[101, 102, 103, 104,105],
    bookIdList :[201, 202, 203, 204,205],
}