import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';
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
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)