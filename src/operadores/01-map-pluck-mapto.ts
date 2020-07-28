import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// let obs$ = range(1,5).pipe(
//     map <number, string>((val)=>{return val+'10';})
// )
// obs$.subscribe(console.log);

let keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
let keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>(
        (res)=> {return res.code}
    )
);
let keyupPluck$ = keyup$.pipe(
    pluck<KeyboardEvent, string>('target', 'baseURI')
);
let keyupMapto$ = keyup$.pipe(
    mapTo<KeyboardEvent, string>('Tecla presionada')
);
keyupCode$.subscribe((res)=> console.log('map', res))
keyupPluck$.subscribe((res)=> console.log('pluck', res))
keyupMapto$.subscribe((res)=> console.log('mepTo', res))