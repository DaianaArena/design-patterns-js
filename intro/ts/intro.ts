// Object Oriented Programming

class DrinkTS {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    info(): string {
        return "DrinkTS name: " + this.name
    }
}

const waterTS = new DrinkTS("water")
console.log(waterTS.info());