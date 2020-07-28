import { interval, fromEvent } from 'rxjs';
import { sample, tap } from 'rxjs/operators';

const interval$ = interval(1000);
const click$ = fromEvent <MouseEvent>(document, 'click');
interval$
.pipe(
    tap(console.log),
    sample(click$),
).subscribe({
    next: (val)=>{console.log('val nex', val)},
    complete: ()=>console.log('Comletado')
})