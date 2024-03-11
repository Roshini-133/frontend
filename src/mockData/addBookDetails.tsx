import {AddBookDetailsComponentProps} from "../components/AddBookDetailsComponent"


export const addBookDetailsMockData :AddBookDetailsComponentProps={
    
    bookName: "harry potter",
    authorName: "John Doe",
    quantity: 10,
    isLoading :false,
    isDetailsAdded:false,
    onBookName:() =>{},
    onAuthorName:()=>{},
    onQuantityChange:()=>{},
    onSubmitClick:()=>{}
}