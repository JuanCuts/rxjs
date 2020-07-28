/**
 * Sincrono o Asyncrono con (asyncScheduler)
 */
import { of, range, asyncScheduler } from 'rxjs';
// const obs$ = range(-5,10);
const obs$ = range(1,5, asyncScheduler);
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