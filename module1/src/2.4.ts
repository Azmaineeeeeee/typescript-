{

// Generic Interface

interface Developer<T,Y = null> {
    name: string,
    computer: {
        brand: string,
        model: string,
        release: number
    }
    smartWatch: T,
    bike ?:  Y
    //Here we are trying to make smartWatch dynamic with Generic Type and here we have declared the type for Developer.
}

type asusWatch = {
    brand: string,
        model: string,
        display: string
}


interface appleWatch {
  
    brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack: boolean
}

interface bikeHave {
    model: string,
        engine: string
}

const poorDev: Developer<asusWatch> = {
   name: 'Fatin',
    computer: {
        brand: 'Asus',
        model: 'X2',
        release: 2020
    },
    smartWatch: {
        brand: 'Apple',
        model: 'Aws',
        display: 'oled'
    }
}

const richDev: Developer<appleWatch, bikeHave> = {
   name: 'Fatina',
    computer: {
        brand: 'Asusa',
        model: 'X2a',
        release: 2021
    },
    smartWatch: {
        brand: 'Apple1',
        model: 'Aws1',
        heartTrack: true,
        sleepTrack: true
    },
    bike: {
        model: 'BMW',
        engine: '100cc'
    }
}

}

// In this whole video we have learned about how we can use Generic type as interface and how we can dynamically add values to a variable.