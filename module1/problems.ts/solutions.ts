//
// Description: Create a function that takes a string and an optional boolean. If the boolean is true or not provided, return the string in uppercase. If the boolean is false, return the string in lowercase. //

function takeInput(input: string, toUpper?:boolean) : string {
    if(toUpper === false){
        input.toLowerCase();
    }
    
       return input.toUpperCase();
    
}
console.log(takeInput("hello", false))

// Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more. //

interface Book {
    title: string;
    rating: number;
}

function getRating (items: Book[]) : Book[] {
    return items.filter(item => item.rating >= 4);
}

//Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters//

