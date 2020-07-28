import { Observable, Observer, Subject } from 'rxjs';
const obse: Observer <any> = {
    next: res=> console.log('[next]', res),
    error: err=> console.warn('[error]', err),
    complete: ()=> console.info('[complete]')
};

const intervalo$ = new Observable <Number> (subs=>{
    let settime = setInterval(()=>{
        subs.next(Math.random())
    },3000);
    return ()=>{
        clearInterval(settime);
        console.log('Intervalo destruido');
    };
});

/**
 * 1 - Casteo múltiple
 * 2 - Tambien es Observer
 * 3 - Devuelve next, error, complete
 */

let subject$ = new Subject <Number> ();
let suscription = intervalo$.subscribe(subject$);



// let intervalsus = subject$.subscribe( (res)=> {console.log('res1', res)} );
// let intervalsus2 = subject$.subscribe( (res)=> {console.log('res2', res)} );

let intervalsus = subject$.subscribe( obse );
let intervalsus2 = subject$.subscribe( obse );


setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    suscription.unsubscribe();
}, 3500);
