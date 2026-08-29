{
    // We can use type alias to manage a type for an object, string, function etc so that we can use it multiple times

type Student = {
    name: string;
    age: number;
    contact?: string;
    gender: string;
    address: string;
}

const student1: Student = {

    name: 'Azmaine',
    age: 23,
    gender: 'male',
    contact: '01456666',
    address: 'Dhaka',
}

const student2: Student = {

    name: 'Azma',
    age: 25,
    gender: 'male',
    address: 'Dhaka',
}

// Function type alias

type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => {
    return num1 + num2;







}
}
