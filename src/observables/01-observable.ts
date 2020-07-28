import { Observable, Observer } from 'rxjs';
// const $obs = Observable.create()

/* CLASE 1 UNO */
const obs$ = new Observable<string>( subs => {
    subs.next('hola');
    subs.next('mundo');
    subs.next('hola');
    subs.next('mundo');

    // Forzar error
    // const a = undefined;
    // a.nombre = 'pepe';
    
    
    subs.complete();
});
obs$.subscribe(console.log)
obs$.subscribe(
    (res) =>{
        console.log('res', res);
    },
    (err) =>{
        console.error('err', err);
    },
    ()=> {
        console.info('complete');
    }
    
);

/* CLASE 2 DOS */
const obse: Observer <any> = {
    next: res=> console.log('siguiente [next]', res),
    error: err=> console.warn('error [obs]', err),
    complete: ()=> console.warn('completador [obs]')
};

obs$.subscribe(obse)