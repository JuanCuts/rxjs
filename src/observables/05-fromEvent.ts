import { fromEvent } from 'rxjs';

const src1$ = fromEvent <MouseEvent>(document, 'click');
const src2$ = fromEvent <KeyboardEvent>(document, 'keyup');

const obs = {
    next: (res)=> console.log('res', res)
}

src1$.subscribe(({x,y})=>{
    console.log(x,y);
});
src2$.subscribe((res)=>{
    console.log('res.key',res.key)
});