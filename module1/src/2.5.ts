{
    // Generic with function

    const createArray = (param: string) : string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T> (param: T) : T[] => {
        return [param]
    }

    type User = {id:number, name: string}
    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<boolean>(true)
    const resGenericObj = createArrayWithGeneric <User> ({id: 111, name: 'Fatin'})



    const createArrayWithTuple = <T,Y> (param1: T, param2: Y) : [T,Y] => {
        return [param1, param2]
    }

    type User1 = {id:number, name: string}
  
    const resTuple = createArrayWithTuple<string,number>('Fatin',111)
    const resTupleObj = createArrayWithTuple <string,{id:number, name: string}> ('Fatin', {id: 111, name: 'Fatin'})


    const addCourse = <T>(student: T) => {
        const details = 'Next Level Development'

        return {
            ...student,details
        }
    }

    const student1 = addCourse({name: 'Fatin', email: 'x@gmail.com', devType :'NLWD'})
    const student2 = addCourse({name: 'Fatina', email: 'y@gmail.com', watchHas : true})

    console.log(student1)

}