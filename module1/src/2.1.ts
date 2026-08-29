{
//Type Assertion


let anything : any;
anything = "Next Level";

(anything as string)


const kgToGm = (value:string | number) : string | number | undefined  => {
    if (typeof value === 'string') {
        const convertedString = parseFloat(value)
        return convertedString
    }

    if (typeof value === "number") {
        return value*1000
    }
}

const result1 = kgToGm(1000) as number










}