class Ninja {
    constructor (nombre, salud,velocidad,fuerza)
    {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
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
        this.salud = this.salud +10
    }
}

const ninja1 = new Ninja ('Hyabusa',10,3,3);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

console.log(ninja1);


// second part
class Sensei extends Ninja {
    constructor(nombre, salud, velocidad,fuerza){
    super (nombre,salud, velocidad,fuerza)
    this.sabiduria= 10
    }

    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
        ninja1.drinkSake()
    }
}
const superSensei = new Sensei ('Master Splinter',200,10,10)
superSensei.speakWisdom()
superSensei.drinkSake()
console.log(superSensei)




