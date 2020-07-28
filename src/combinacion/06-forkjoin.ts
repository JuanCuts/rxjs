import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const nuneros$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c', 'd').pipe(delay(3000));

forkJoin({
    num: nuneros$,
    int: interval$,
    let: letras$,
})
.subscribe((res)=>{
    console.log(res);
    console.log(res.num);
})
