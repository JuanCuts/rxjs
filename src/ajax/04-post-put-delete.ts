import { ajax } from 'rxjs/ajax';
const url = 'https://httpbin.org/delay/1';
let datapeticion = {
    id: 1,
    nombre: 'Andres'
}
// ajax
// .post(url, datapeticion, {'mi-token': 'ABC'})
// .put(url, datapeticion, {'mi-token': 'ABC'})
// .delete(url, {'mi-token': 'ABC'})
// .subscribe(console.log)

ajax({
    url,
    method: 'DELETE',
    headers: {
        'mi-token': 'ABC'
    },
    body: datapeticion
})
.subscribe(console.log)
