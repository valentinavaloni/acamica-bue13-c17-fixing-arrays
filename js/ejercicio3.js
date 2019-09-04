console.log('Ejercicio 3: ');

var listaDeReproduccion = [];

console.log('Mi lista de reproduccion por ahora tiene ' + listaDeReproduccion.length + ' canciones porque esta vacia.');

listaDeReproduccion.push('En la ciudad de la furia');
listaDeReproduccion.push('En rito');
listaDeReproduccion.push('Hombre al agua');
listaDeReproduccion.push('En el septimo dia');

console.log('Ahora ya tengo mi album de Soda listo para reproducirse.' + listaDeReproduccion + ' con un total de ' + listaDeReproduccion.length + ' canciones.');

var proximaCancion = listaDeReproduccion.pop();

console.log('La proxima cancion a reproducir es ' + proximaCancion );

console.log('Y restan en mi lista: ' + listaDeReproduccion);
