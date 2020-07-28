import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';


const numeros$ = of(1,2,3,4,5).pipe(
    tap( t => console.log('t1', t))
);
numeros$.pipe(
    tap( t => console.log('t2', t)),
    take(2)
).subscribe({
    next: val=> console.log('val', val),
    complete: ()=> console.log('Completado')
})