import {AddBookDetailsComponentProps} from "../components/AddBookDetailsComponent"


export const addBookDetailsMockData :AddBookDetailsComponentProps={
    isLoading :false,
    isDetailsAdded:false,
    bookName: "harry potter",
    authorName: "John Doe",
    quantity: 10,
    onBookName:() =>{},
    onAuthorName:()=>{},
    onQuantityChange:()=>{},
    onSubmitClick:()=>{}
}