{

type User1 = {
    name: string;
    age: number;
}

interface User2{
 name: string;
 age: number;
}

 // type alias and interface are methods of type declaration but we cannot use primitive or number types with interface //

 type UserwithRoll = User1 & {role: string}

 const user1: UserwithRoll = {
     name: 'Fatin',
    age: 25,
    role: 'One'
 }

 // We can also use interface to extend things. We use & to add things into type and we use extends to add things into interface.

 interface UserwithRoll2 extends User2{
    roll: string
 }




type Roll1 = number[];
const Rollnum1 : Roll1 = [1,2,3] //Array

interface Rollnum2{
    [index : number] : number
}

type Add1 = (num1: number,num2: number)  => number
interface Add2{
    (num1: number, num2: number) : number
}

const add: Add1 = (num1, num2) => (num1 + num2)
console.log(add)


    
}