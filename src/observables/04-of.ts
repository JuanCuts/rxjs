/**
 * Sincrono
 */
import { of } from 'rxjs';
const obs$ = of<Number>(1,2,3,4,5,6);
// const obs$ = of([1,2], {nombre: 'pepe'}, function () {}, true, Promise.resolve());

console.log('Inicio obs');
obs$.subscribe(
    (res)=>{
        console.log('res', res);
    },
    null,
    ()=>{
        console.log('Final de la secuencia');
    }
)
console.log('Fin obs');