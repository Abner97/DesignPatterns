type Engines = "diesel" | "gas";

class Car {
  private seats: number = 1;
  private engine: Engines = "diesel";

  set setSeats(seats: number) {
    this.seats = seats;
  }

  set setEngine(engine: Engines) {
    this.engine = engine;
  }

  get getSeats(): number {
    return this.seats;
  }

  get getEngine(): Engines {
    return this.engine;
  }
}

interface Builder {
  reset: () => void;
  setSeats: (seats: number) => void;
  setEngine: (engine: Engines) => void;
  getProduct: () => Car;
}

class CarBuilder implements Builder {
  private car: Car = new Car();

  getProduct(): Car {
    const product = this.car;
    this.reset();
    console.info("Seats", product.getSeats);
    console.info("Engine", product.getEngine);
    return product;
  }
  reset = () => {
    this.car = new Car();
  };
  setSeats = (seats: number) => {
    this.car.setSeats = seats;
  };
  setEngine = (engine: Engines) => {
    this.car.setEngine = engine;
  };
}

class Director {
  constructSportsCar(builder: Builder) {
    builder.reset();
    builder.setEngine("gas");
    builder.setSeats(2);
  }

  constructPickUp(builder: Builder) {
    builder.reset();
    builder.setEngine("diesel");
    builder.setSeats(5);
  }
}

const director = new Director();
const carBuilder = new CarBuilder();
director.constructSportsCar(carBuilder);
const car: Car = carBuilder.getProduct();
director.constructPickUp(carBuilder);
const pickup = carBuilder.getProduct();
