import { interval, forkJoin, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
* Ejercicio: Realizar que los dos observables finales, 
* emitan exactamente el mismo valor
* 
* Tip: Hot Observable? subjects?
*
* No lo hice yo :(
*/

(() =>{
    
    // == NO TOCAR este bloque ====================
    const reloj$ = interval(1000).pipe(
        take(5),
        map( val => Math.round(Math.random() * 100) )
    );
    // No tocar la creación del observable
    // ============================================
    
    
    let subject$ = new Subject <Number> ();
    
    
    // Estos dos observables deben de emitir exactamente los mismos valores
    reloj$.subscribe(subject$);
    subject$.subscribe((res)=>{console.log('res 1', res)})
    subject$.subscribe((res)=>{console.log('res 2', res)})
})();
    
    