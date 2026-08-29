{
    // Constraints in Typescript using Generic with Key of

    type Vehicle = {
        bike: string,
        car: string,
        ship: string
    }

    type Owner = keyof Vehicle

    const person1 : Owner = "bike"

    const getPropertyValue = <X,Y extends keyof X> (obj: X, key: Y) => {
         return obj[key];
    }

    const user = {
        name: "Fatin",
        age: 26,
        address: "1/1 Dhaka"
    }

    const res1 = getPropertyValue(user,"address")
    console.log(res1)

}