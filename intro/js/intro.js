/** FIRST-CLASS FUNCTIONS
 * They can behave like variables and 
 * be parsed as arguments to higher-order functions
 */
function add(a, b) {
    return a+b
}

let result = add(1, 2)
console.log(result)

const fnAdd = add
result = fnAdd(5, 6)
console.log(result)

/** HIGHER ORDER FUNCTIONS
 * Functions that return a function 
 * or take in a function as an argument.
 */
function operation(fn, a, b) {
    console.log(fn(a, b))
}

operation(fnAdd, 10, 20)

/** ARROW FUNCTIONS
 * Compact alternative to a traditional function expression
 */
operation((a,b)=>a*b, 7, 5)

// The same functionality but multi-line requires '{}' and a return
operation((a,b)=> {
    const result = a*b
    return result
}, 7, 5)

// for each
const brands = ['Toyota', 'Aston Martin', 'Ferrari']

// Doesn't modify the original array
brands.forEach((brand) => console.log(brand.toUpperCase()))
console.log(brands);

// Modifies the original array
brands.sort();
console.log(brands);

// Map - returns a new array
const brandsUpper = brands.map((brand) => brand.toUpperCase())
console.log(brandsUpper);

// Reduce
const products = [
    {
        "name":"Jeans",
        "price":20
    },
    {
        "name":"Skirts",
        "price": 15
    }
]

const total = products.reduce((sum, product) => {
    return sum + product.price
}, 0)
console.log(total);

// w/ one-line arrow function
const total2 = products.reduce((sum, product) => sum + product.price, 0)
console.log(total2);

// Object Oriented Programming
// CLASS
class Drink {
    constructor(name) {
        this.name = name
    }

    info() {
        return "Drink name: " + this.name
    }
}

const water = new Drink("water")
console.log(water.info());

// Functional Programming
function DrinkV2(name) {
    this.name = name
    this.info = function() {
        return "DrinkV2 name: " + this.name
    }
}

const beer = new Drink("beer")
console.log(beer.info());

// INHERITANCE
class Beer extends Drink {
    constructor(name, alcohol) {
        super(name)
        this.alcohol = alcohol
    }

    info() {
        return super.info() + " | Alcohol: " + this.alcohol + "%"
    }
}

const budweiser = new Beer("budweiser", 4.8)
console.log(erdinger.info());