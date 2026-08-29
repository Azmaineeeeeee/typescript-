// Spread Operator
// Rest
// Destructuring

const bros1 : string [] = ['A', 'B', 'C']

const bros2 : string [] = ['D', 'E', 'F']

bros1.push(...bros2)


const mentors1 ={
    typescript: 'Ab',
    redux: 'Mir',
    dbms: 'Abul'
}

const mentors2 ={
    typescript: 'A1',
    redux: 'Mir1',
    dbms: 'Abul1'
}

const mentorsList = {
    ...mentors1, mentors2
}


// Rest Operator
const greetOne = (...friends : string[]) =>{
    friends.forEach((friend: string) => console.log(friend))
}
greetOne('A', 'B', 'C')

// destructuring
// Object and Array

const user1= {
 id :345,
 name: {
    first:'Az',
    second: 'Mu'
 },
 roll: 'SWE'

}

const {
    id,
    name: {first},
} = user1;