import { interval, timer } from 'rxjs';

let osb = {
    next: (res)=>{console.log('res', res)},
    complete: ()=>{console.log('Complete')}
}

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000); Se parece full al interval
let hoyen5 = new Date();
hoyen5.setSeconds(hoyen5.getSeconds()+5)
const timer$ = timer(hoyen5);

console.log('Inicio');
// interval$.subscribe(osb);
timer$.subscribe(osb);
console.log('Fin');