import { fromEvent, asyncScheduler } from 'rxjs';
import { pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';

const click$ = fromEvent <MouseEvent>(document, 'click');
click$
.pipe(
    throttleTime(3000)
)
// .subscribe(console.log)


const input = document.createElement('input');
input.setAttribute('placeholder', 'ingrese aquí');
document.querySelector('body').append(input);


const input$ = fromEvent <KeyboardEvent>(input, 'keyup');
input$
.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    // Asi lo hice yo
    // map <KeyboardEvent, string>((res)=>{
    //     return res.target['value']
    // })
    // Asi lo hizo el man 
    pluck<KeyboardEvent, string>('target', 'value'),
    distinctUntilChanged(),

)
.subscribe(console.log)
