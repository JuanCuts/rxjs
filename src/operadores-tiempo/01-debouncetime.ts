import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck, distinctUntilChanged, tap } from 'rxjs/operators';

const click$ = fromEvent <MouseEvent>(document, 'click');
click$
.pipe(
    debounceTime(3000)
)
// .subscribe(console.log)


const input = document.createElement('input');
input.setAttribute('placeholder', 'ingrese aquí');
document.querySelector('body').append(input);


const input$ = fromEvent <KeyboardEvent>(input, 'keyup');
input$
.pipe(
    debounceTime(1000),
    // Asi lo hice yo
    // map <KeyboardEvent, string>((res)=>{
    //     return res.target['value']
    // })
    // Asi lo hizo el man 
    pluck<KeyboardEvent, string>('target', 'value'),
    distinctUntilChanged(),

)
.subscribe(console.log)
