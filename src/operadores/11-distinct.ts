import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of(1,1,1,1,2,2,2,4,5,5,3,3,1);
numeros$
.pipe(
    distinct()
)
// .subscribe(console.log)

interface Personaje{
    nombre:string
}
const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Falcao'
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
        nombre: 'Megaman'
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
    distinct( (val) => val.nombre)
)
.subscribe(console.log)