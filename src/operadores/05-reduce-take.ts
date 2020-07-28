import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';
let totalReducer = (acu:number, current:number)=>{
    return acu + current;
}
interval(500)
.pipe(
    take(4),
    tap (console.log),
    reduce(totalReducer)
)
.subscribe({
    next: (res)=>{
        console.log('next', res);
    },
    complete:()=> console.log('Completado')
})
