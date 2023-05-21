
// Solución:
const lanzarMoneda = () => Math.random() > 0.5 ? 'cara' : 'cruz';

const cincoVecesSeguidasCara = () => {
  return new Promise((resolve, reject) => {
    let contador = 0;
    let tiempo = 0;

    const interval = setInterval(() => {
      tiempo++;
      const resultado = lanzarMoneda();

      if(resultado === 'cara') {
        contador++;
      } else {
        contador = 0;
      }

      if(contador === 5) {
        clearInterval(interval);
        resolve(tiempo);
      }
    }, 1000);
  });
}
//
const main = async () => {
  const tiempo = await cincoVecesSeguidasCara();
  console.log(tiempo);
}
//
main();