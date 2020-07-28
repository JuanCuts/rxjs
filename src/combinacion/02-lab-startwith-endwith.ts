import { ajax } from 'rxjs/ajax';
import { startWith, endWith } from 'rxjs/operators';


const body = document.querySelector('body');
const loading = document.createElement('div');
loading.classList.add('loading');
loading.innerHTML = 'Cargando...';


//Stream
ajax
.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
    startWith(true),
    endWith(false)
)
.subscribe( (res) => {
    if(res === true) body.append(loading);
    if(res === false) body.querySelector('.loading').remove();
    console.log('res', res);
})
