import { fromEvent } from 'rxjs';
import { tap, map, takeWhile } from 'rxjs/operators';


interface Coordenadas{
    x: Number,
    y: Number
}
const click$ = fromEvent <MouseEvent>(document, 'click');
click$
.pipe(
    tap <MouseEvent>( val => console.log('tap', val.clientY)),
    map ( ({x, y}) =>({x,y})),
    takeWhile <Coordenadas> ((val)=> val.y > 150, true)
)
.subscribe({
    next: val=> console.log('val', val),
    complete: ()=>console.log('Completado')
})