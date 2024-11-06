{
    //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model,
                this.year = year
        }
    }

    const car = new Car('Honda', 'CIVIC', 2054);
    const carManufactureYear: number = car.year

    const getCarAge = (year: number) => {
        const date = new Date().getFullYear();
        const ageOfCar = date - year;
        if (ageOfCar >= 0) {
            return ageOfCar;
        }
        else {
            return "Please write the Authentic Year of Car";
        }
    }
    // console.log(getCarAge(carManufactureYear));





}