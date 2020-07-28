import { fromEvent, combineLatest } from "rxjs";
import { pluck } from "rxjs/operators";

// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(
//     keyup$.pipe(pluck('type')),
//     click$.pipe(pluck('type'))
// )
// .subscribe(console.log)

const body = document.querySelector('body');
const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'ejemplo@correo.com';
input2.value = 'cityslicka';
input2.type = 'password';

body.append(input1, input2);

//Helpers

const getinputstrem = 
    (elm: HTMLElement) =>  
        fromEvent<KeyboardEvent>(elm, 'keyup')
        .pipe(
            pluck('target', 'value')
        )

combineLatest(
    getinputstrem(input1),
    getinputstrem(input2),
)
.subscribe(console.log)


