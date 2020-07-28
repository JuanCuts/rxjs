import { of, interval, Observable, fromEvent } from 'rxjs';
import { mergeMap, take, map, tap, takeUntil } from 'rxjs/operators';

const letas$ = of('a', 'b', 'c');
letas$
.pipe(
    mergeMap<string, Observable<number>>( 
        (letra)=> 
        interval(1000)
        .pipe(
            tap( i => console.log(letra + i)),
            map( i =>  i ),
            take(3)
        )
    )
)
// .subscribe({
//     next: val => console.log('next: ', val),
//     complete: ()=>console.log('Completado')
// });

const mousedown$ = fromEvent <MouseEvent>(document, 'mousedown');
const mouseup$ = fromEvent <MouseEvent>(document, 'mouseup');
const interval$ = interval();

mousedown$
.pipe(
    mergeMap <MouseEvent, Observable<number>>(()=> interval$.pipe(takeUntil(mouseup$)))
)
.subscribe(console.log)