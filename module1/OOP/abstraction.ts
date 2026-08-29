{
    // Abstraction
// Here we are using interface to use abstraction
    interface Vehicle1  {
        startEngine() : void;
        stopEngine() : void;
        move() : void
    }

    class Car implements Vehicle1 {
        startEngine(): void {
            console.log(
                'Starting the car'
            )
        }
        stopEngine(): void {
            console.log('Stopping the car')
        }
        move(): void {
            console.log('moving the car')
        }
    }

    const Toyota = new Car();
    Toyota.startEngine();

    // Here we are using abstract class to use abstraction

  abstract class Vehicle2 {
        abstract startEngine(): void 
        abstract stopEngine(): void 
        abstract move(): void 
    }

    class ToyotaCar extends Vehicle2 {
        startEngine(): void {
            console.log(
                'Starting the car'
            )
        }
        stopEngine(): void {
            console.log('Stopping the car')
        }
        move(): void {
            console.log('moving the car')
        }
    }

    const Honda = new ToyotaCar()
}