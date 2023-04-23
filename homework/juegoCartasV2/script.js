const misPersonajesDatos = [
{
    "name": "Naruto: Shippuuden",
    "description": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
    "rating": "8.16",
    "img": "https://i.ibb.co/LYxnX5Z/narutoshipuden.png",
    
},
{
    "name": "One Piece",
    "description": "Gol D. Roger was known as the 'Pirate King',the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.",
    "rating": "8.54",
    "img": "https://i.ibb.co/3zHnWsS/onepiece.png",
    
},
{
    "name": "Attack on Titan",
    "description": "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.",
    "rating": "8.50",
    "img": "https://i.ibb.co/g6y5fH5/attacktitan.png",
    
},
{
    "name": "Monster",
    "description": "La serie constaba inicialmente de 128 capítulos, sin embargo, se decidió ampliarla hasta un total de 153capítulos. La serie trata sobre un niño llamado Genki, que acaba atrapado en el Mundo Monster Rancher después de probar un nuevo videojuego. Aunque no se encontrará solo, ya que pronto, encontrará nuevos amigos (y enemigos). En su aventura, no sólo descubrirán los secretos que rodean el Mundo Monster Rancher, sino que además se enfrentarán al villano llamado Moo, que planea conquistar el mundo de Monster Rancher.",
    "rating": "8.16",
    "img": "https://i.ibb.co/yfX9pb1/monster.png",
    
},
{
    "name": "Death Note",
    "description": "Light Yagami es un excelente estudiante japonés que ha tenido una vida aburrida. Esto cambia radicalmente cuando encuentra tirado en el suelo un cuaderno conocido como Death Note (Libreta de la Muerte), un cuaderno perdido por Ryuk, un Shinigami (Dios de la muerte). Cualquier humano cuyo nombre esté escrito en el cuaderno morirá, y ahora Light ha decidido utilizar este poder para crear un mundo perfecto sin criminales. Pero cuando los criminales comienzan a morir de forma masiva, las autoridades envían al legendario detective L en busca del asesino. Con L pisándole los talones, Podrá mantener Light su noble propósito incluso arriesgando su vida.",
    "rating": "8.16",
    "img": "https://i.ibb.co/3pgxbF1/deathnote.jpg",
    
},
{
    "name": "Violet Evergarden",
    "description": "There are words Violet heard on the battlefield, which she cannot forget. These words were given to her by someone she holds dear, more than anyone else. She does not yet know their meaning.A certain point in time, in the continent of Telesis. The great war which divided the continent into North and South has ended after four years, and the people are welcoming a new generation.",
    "rating": "8.39",
    "img": "https://i.ibb.co/B6MRYF4/Violet-Evergarden.jpg",
    
},
{
    "name": "Tokyo Ghoul",
    "description": "Extraños asesinatos se están sucediendo uno tras otro en Tokyo. Debido a las pruebas encontradas en las escenas, la policía concluye que los ataques son obra de ghouls que se comen a las personas. Kaneki y Hide, dos compañeros de clase, llegan a la conclusión de que si nadie ha visto nunca a esos necrófagos es porque toman la apariencia de seres humanos para ocultarse. Poco sabían entonces de que su teoría sería más cierta de lo que pensaban cuando Kaneki es herido de gravedad por un monstruo y comienza a atraerle cada vez más la carne humana…",
    "rating": "8.01",
    "img": "https://i.ibb.co/QpnVX5h/Tokyo-Ghoul.jpg",
    
},
{
    "name": "Black Clover",
    "description": "Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the Wizard King—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically.",
    "rating": "6.55",
    "img": "https://i.ibb.co/sFC2HBf/Black-Clover.jpg",
    
},
{
    "name": "Sword Art Online",
    "description": "In the year 2022, virtual reality has progressed by leaps and bounds, and a massive online role-playing game called Sword Art Online (SAO) is launched. With the aid of NerveGear technology, players can control their avatars within the game using nothing but their own thoughts.",
    "rating": "7.66",
    "img": "https://i.ibb.co/c39LqW7/Sword-Art-Online.jpg",
    
},
{
    "name": "Nanatsu no Taizai",
    "description": "Los “Siete Pecados Capitales”, un grupo de caballeros malignos que conspiraron para derrocar al Reino de Britania, se dice que fueron erradicados por los Caballeros Sagrados, aunque algunos dicen que aún viven. Diez años después, los Caballeros Sagrados dieron un golpe de estado y asesinaron al rey, convirtiéndose en los nuevos y tiránicos regidores del reino. Elizabeth, la única hija del rey, emprende un viaje para encontrar a los “Siete Pecados Capitales” y conseguir su ayuda para recuperar el reino.",
    "rating": "8.30",
    "img": "https://i.ibb.co/3CjG3YN/Nanatsu-no-Taizai.jpg",
    
}
]


const repartir = document.getElementById('btn-card')
const tablero = document.getElementById('tablero')

/*Plantilla para crear objetos (personajes) */
class CartaPersonaje {

    constructor(nombre, rating, img) {
        this.nombre = nombre;
        this.rating = rating;
        this.img = img;
    }

}

/* crear primer pesonaje manualmente */
/* const personaje1 = new CartaPersonaje("Naruto: Shippuuden","8.16","https://i.ibb.co/LYxnX5Z/narutoshipuden.png") */

/*Creamos la lista donde guardaremos los objetos creados por el forEach */
const cartasPersonajesObjetos = []

/*: Notación flecha */
misPersonajesDatos.forEach(personajeDeLaLista => {

    /* cada vez que se crea un objeto se agrega a la lista misPersonajesDatos */

    //forma corta
    // cartasPersonajesObjetos.push(new CartaPersonaje(personajeDeLaLista.name, personajeDeLaLista.rating, personajeDeLaLista.img))

    //forma larga
    const unName =  personajeDeLaLista.name
    const unRating = personajeDeLaLista.rating
    const unImg = personajeDeLaLista.img

    const unObjetoPersonaje = new CartaPersonaje (unName,unRating,unImg)

    cartasPersonajesObjetos.push(unObjetoPersonaje)

})

/*Notación antigua */
/* misPersonajesDatos.forEach(function (personajeDeLaLista) {
    const personajeAuxObjeto = new CartaPersonaje(personajeDeLaLista.name, personajeDeLaLista.rating, personajeDeLaLista.img)
    cartasPersonajesObjetos.push(personajeAuxObjeto)
}) */

/*Queremos agarrar un objeto de la lista cartasPersonajesObjetos (random) y ponerla en el tablero */
const repartoTresCartas = () => {

    tablero.innerHTML = ""
    /* Acceder a un objeto aleatorio del array  */

    var misTresCartasRandomSinRepetir = [] 
    while(misTresCartasRandomSinRepetir.length <3 ) {
        const cartaRandom = cartasPersonajesObjetos[Math.floor(Math.random() * cartasPersonajesObjetos.length)]
        if (!misTresCartasRandomSinRepetir.includes(cartaRandom))
        misTresCartasRandomSinRepetir.push(cartaRandom)
    } 
    for (i=0; i<misTresCartasRandomSinRepetir.length; i++){
        var cartaRandom = misTresCartasRandomSinRepetir[i]
        tablero.innerHTML += `<div> <img src=${cartaRandom.img} alt=""> <p>${cartaRandom.nombre}</p> <p>${cartaRandom.rating}</p> </div>`

    }
    
}

repartir.addEventListener('click', repartoTresCartas)

/* Siguiente: modificar para que reparta 3 cartas random y que no se repitan. Y guardarlas en una lista de variables de cartas repartidas
 3 cartas para cada jugador y cada jugador podra jugar y comparar quien gana*/






//<div>
/* <img src="" alt="">
<p></p>
</div> */