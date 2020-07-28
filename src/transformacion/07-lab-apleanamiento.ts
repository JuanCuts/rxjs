import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

const url  = 'https://reqres.in/api'
//Helper funcion auxiliar
const atrapaerror = (err : AjaxError)=> {
    console.warn('error en:', err.message);
    let response = null;
    return of(response);
}
const peticionhttplogin = (array)=> 
ajax
.post(url+'/login?delay=1', array)
.pipe(
    pluck('response', 'token'),
    catchError(atrapaerror)

)

// Creando formulario
const body = document.querySelector('body');
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'ejemplo@correo.com';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'contraseña';
inputPass.value = 'cityslicka';

submitBtn.textContent = 'Iniciar sesión';

// Inyectar html
form.append(inputEmail, inputPass, submitBtn)
body.append(form);

// Streams
const submitfrom$ = fromEvent<Event>(form, 'submit');
submitfrom$
.pipe(
    tap( ev => ev.preventDefault()),
    map( ev =>({
      email: ev.target[0].value,
      password: ev.target[1].value,
    })),
    // mergeMap(peticionhttplogin)
    // switchMap(peticionhttplogin)
    exhaustMap(peticionhttplogin)
)
.subscribe((token)=>{
    console.log('token', token)
})
// Funciona para cuando hacen muchas peticiones sin querer,en vez de bloquear el boton se puede usar este exhaustMap