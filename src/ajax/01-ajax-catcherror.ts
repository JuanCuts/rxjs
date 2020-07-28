import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
const url = 'https://api.github.com/users?per_page=5';

// const manejaErrores = (req: Response)=>{
//     if(!req.ok) throw new Error(req.statusText);
//     return req;
// };
// const fetch_promesa = fetch(url);
// fetch_promesa
// .then(manejaErrores)
// .then( res => res.json())
// .then((data)=>console.log('data', data))
// .catch((err)=>console.log('error de peticion', err))


const atrapaerror = (err : AjaxError)=> {
    console.warn('error en:', err.message);
    return of([]);
}
ajax(url)
.pipe(
    // map <AjaxResponse, JSON>( res=> res.response)
    pluck('response'),
    catchError(atrapaerror)
)
.subscribe(users=> console.log('users', users))