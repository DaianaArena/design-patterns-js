// Object Oriented Programming

class DrinkTS {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    info(): string {
        return this.name + " (DrinkTS)";
    }
}

const waterTS = new DrinkTS("water")
console.log(waterTS.info());

// Interface
interface Product {
    price: number;

    getPrice(): string;
}

// Inheritance
class BeerTS extends DrinkTS implements Product {
    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    info(): string {
        return super.info() + " | Alcohol: " + this.alcohol + "%";
    }

    getPrice(): string {
        return super.info() + ' | Price: $' + this.price;
    }
}

// Interface implementation
class Snack implements Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return this.name + " (Snack) | Price: $" + this.price;
    }
}

const budweiserTS = new BeerTS("Budweiser", 4.8, 20);
console.log(budweiserTS.info());

const productsTS: Product[] = [
    new BeerTS("corona", 4.5, 15),
    new Snack("chips", 5),
    new BeerTS("heineken", 5, 22),
];

function getPrices(items: Product[]) {
    console.log("List prices:");
    for (const item of items) {
        console.log(item.getPrice());
    }
}

getPrices(productsTS);