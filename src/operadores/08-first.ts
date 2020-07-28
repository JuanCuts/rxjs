import { fromEvent } from 'rxjs';
import { take, first, tap, map } from 'rxjs/operators';


interface Coordenadas{
    clientX: Number,
    clientY: Number
}
const click$ = fromEvent <MouseEvent>(document, 'click');
click$
.pipe(
    // take(1)
    tap <MouseEvent>( val => console.log('tap', val.clientY)),
    map ( ({clientX, clientY}) =>({clientX,clientY})),
    first <Coordenadas>( event => event.clientY >= 150)
    // first <MouseEvent>( event => event.clientY >= 150)
)
.subscribe({
    next: val=> console.log('val', val),
    complete: ()=>console.log('Completado')
})