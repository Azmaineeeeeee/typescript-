{
  //typeguard operator in OOP 


class Animal {
    name: string;
    species: string;

constructor(name: string, species: string) {
    this.name = name;
    this.species = species;

}
   makeSound(){
    console.log("I'm making sound")
   }
}

class Dog extends Animal {
    constructor(name:string, species: string){
        super(name,species);
    }

makeBark(){
    console.log("I am barking");
}
}

class Cat extends Animal {
    constructor(name:string, species: string){
        super(name,species);
    }

makeMeow(){
    console.log("I am meowing");
}
}

// smart way to handle we can use function

const isDog = (animal: Animal) => {
    return animal instanceof Dog
}

const isCat = (animal: Animal) => {
    return animal instanceof Cat
}

const getAnimal = (animal : Animal) => {
    if(isDog(animal)) {
        animal.makeBark();
    }
    else if(animal instanceof Cat){
        animal.makeMeow();
    }
    else{
        animal.makeSound();
    }
}

 const dog = new Dog("Dog","dog");
 const cat = new Cat("Cat","cat");

 getAnimal(dog)

}