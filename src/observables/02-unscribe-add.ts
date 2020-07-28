import { Observable, Observer } from 'rxjs';
const obse: Observer <any> = {
    next: res=> console.log('[next]', res),
    error: err=> console.warn('[error]', err),
    complete: ()=> console.info('[complete]')
};

let cont = 0;
const intervalo$ = new Observable <Number> (subs=>{
    let settime = setInterval(()=>{
        cont++;
        console.log('cont', cont);
        subs.next(cont)
    },1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    return ()=>{
        clearInterval(settime);
        console.log('Se acabaron las frunas');
    }
});


// const intervalsus = intervalo$.subscribe(obse);
// const intervalsus2 = intervalo$.subscribe(obse);

const intervalsus = intervalo$.subscribe(obse);
const intervalsus2 = intervalo$.subscribe(obse);
const intervalsus3 = intervalo$.subscribe(obse);
intervalsus.add(intervalsus2)
            .add(intervalsus3)
setTimeout(() => {
    intervalsus.unsubscribe();
    // intervalsus2.unsubscribe();
    console.log('FINAL FINAL');
}, 6000);