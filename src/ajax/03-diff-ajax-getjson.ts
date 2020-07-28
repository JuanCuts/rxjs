import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbin.org/delay/1XXXX';

const manejaError = (err : AjaxError)=> {
    console.log('error en:', err.message);
    return of({
        status: 'fail',
        usuarios:[]
    });
}

// const obs$ = ajax.getJSON(url).pipe(catchError(manejaError));
// const obs2$ = ajax(url).pipe(catchError(manejaError));

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs$.subscribe(data=> console.log('getjson', data))
// obs2$.subscribe(data=> console.log('ajax', data))

obs$
.pipe(catchError(manejaError))
.subscribe({
    next: data=> console.log('getjson', data),
    error: err=> console.log('error ', err),
    complete: ()=> console.log('Completado')
})
