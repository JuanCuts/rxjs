import { from } from 'rxjs';
import { tap, scan, map } from 'rxjs/operators';

let numeros = [1,2,3,4,5]
let totalReducer = (acu:number, current:number)=> acu + current;
from(numeros)
.pipe(
    tap (console.log),
    scan(totalReducer, 0)
)
.subscribe({
    next: (res)=>{
        console.log('next', res);
    },
    complete:()=> console.log('Completado')
})


// Redux 

interface Ususario {
    id?: string;
    auth?: boolean;
    token?: string;
    edad?: number
}

let user: Ususario[] = [
    {id: 'pepe', auth: false, token: null},
    {id: 'pepe', auth: true, token: 'abc'},
    {id: 'pepe', auth: true, token: 'abc123'}
];

let states$ = from(user).pipe(
    scan <Ususario>((acu, current)=>{
        return {...acu, ...current}
    }, {edad: 33})
)

let id$ = states$.pipe(
    map(state => state)
).subscribe(console.log)
