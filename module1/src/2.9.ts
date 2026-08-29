{
    // Mapped Type
const arrNum : number[] = [1,4,5];

type areaNumber = {
    height: string;
    width: string
}

type areaString<T> = {
    [key in keyof T] : T[key]
}
const area1: areaString<{height: string;width: number}> = {
    height: "100",
    width: 50
}


// Utility Types
// Pick
// Omit
// Required
// Partial
}