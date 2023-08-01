class WeekDays {

    constructor (day) {
        if (WeekDays.instance) {
            console.log("YA EXISTE");
            return WeekDays.instance; // Singleton pattern implementation to avoid creating multiple instances of the class and
        }
        console.log(("NO EXISTE Y SE CREA"));
        this.day = day
        // instance no es una palabra reservada sino un atributo de la Clase
        // que guarda la instancia de WeekDays, y la cual usaremos para validar
        // si ya existe o no una instancia de la Clase/Singleton
        WeekDays.instance = this;
    }
}

let today = new WeekDays('Lunes')
console.log(today)
let today2 = new WeekDays('Martes')
console.log(today2)