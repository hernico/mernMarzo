class Ninja {
    constructor (nombre, salud)
    {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
    }

    sayName() {
        this.name
    }

    showStats() {
        this.name
        this.fuerza
        this.velocidad
        this.salud
    }

    drinkSake(){
        this.salud =10
    }
}

const ninja1 = new Ninja ('Hyabusa');
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

console.log(ninja1)