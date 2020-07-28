import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';
let numeros$ = range(1,5);
numeros$.pipe(
    tap((x)=>{console.log('antes', x);}),
    map((x)=>{return x*10}),
    tap({
        next: (x)=>{console.log('despues', x);},
        complete: ()=>{console.log('Se acabaron las frunas');}
    }),
).subscribe((res)=>{console.log('res', res)});