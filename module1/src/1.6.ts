// Function

const newUser = {
    name: 'A',
    balance : 10,
    addBalance(balance:number) : number{
        return this.balance + balance
    }
}

const arr : number[] = [1,2,3]
const newArr : number[] = arr.map((elem : number) : number =>elem*elem)