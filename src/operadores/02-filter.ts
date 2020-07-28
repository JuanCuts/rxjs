import { range, of, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
// let obs$ = range(1,5).pipe(
//     filter(val => val % 2 === 1)
// )
// let obs$ = range(1,5).pipe(
//     filter((val, i) => {
//         console.log('index', i);
//         return val % 2 === 1
//     })
// )

interface Personaje {
    tipo: string;
    nombre: string;
}
let personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman',
    },
    {
        tipo: 'villano',
        nombre: 'joker',
    },
    {
        tipo: 'heroe',
        nombre: 'el chapulin',
    },
];
/**
 * Asi lo hice yo
 */
let obs$ = of(...personajes).pipe(
    filter((val)=>{
        return val['tipo'] == 'heroe';
    })
);
obs$.subscribe(console.log);

/**
 * Asi lo hizo el vale
 */
let obs2$ = from(personajes).pipe(
    filter((val)=>{
        return val['tipo'] == 'heroe';
    })
);
obs2$.subscribe(console.log);


let keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(
    map<KeyboardEvent, string>(event=>event.code), // Recibe un KeyboardEvent
    filter(key=> key === 'Enter')
).subscribe(console.log)