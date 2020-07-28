import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

let obs = {
    next: (res)=>{console.log('res', res)},
    complete: ()=>{console.log('complete')}
}

const miGenerador = function *() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();
from(miIterable).subscribe(obs);
// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from(
//     fetch('https://api.github.com/users/klerith')
// );

// source$.subscribe( async (res)=>{
//     let dataResp = await res.json();
//     console.log('res', res);
// });