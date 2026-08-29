{
    // OOP Classes

    class Animal {
        name: string;      // Properties inside a class
        species: string;
        sound: string

        // parameter properties

        constructor(name: string, species: string, sound: string){ // Constructor helps to call the class later
            this.name = name;
            this.species = species;
            this.sound = sound
        }

        makeSound(){
            console.log(`The ${this.name} make ${this.sound}`) // Function inside a class which is called a method
        }
    }

    const dog = new Animal("GS", "dog", "bark")

    dog.makeSound();
    
}