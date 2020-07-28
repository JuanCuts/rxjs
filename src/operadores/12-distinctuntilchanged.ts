import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of(1,1,1,1,2,2,2,4,5,5,3,3,1);
numeros$
.pipe(
    distinctUntilChanged()
)
.subscribe(console.log)

interface Personaje{
    nombre:string
}
const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Messi'
    },
    {
        nombre: 'Pepsiman'
    },
    {
        nombre: 'El bicho'
    },
    {
        nombre: 'Falcao'
    },
    {
        nombre: 'Messi'
    },
    {
        nombre: 'El Bicho'
    }
];
const personajes$ = from(personajes);
personajes$
.pipe(
    distinctUntilChanged( (ant, act)=> ant.nombre === act.nombre )
)
.subscribe(console.log)