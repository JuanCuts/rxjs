import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, timeout);
// setInterval(()=>{}, time);

// const saludar = ()=>{console.log('Hola bb!');}
// asyncScheduler.schedule(saludar, 2000);
// const saludar2 = (nombre)=>{console.log('Hola '+nombre+'!');}
// asyncScheduler.schedule(saludar2, 2000, 'juan');

let async$ = asyncScheduler.schedule(
    function (state:number) {
        console.log('state', state);
        this.schedule(state+1,1000)
    },
    3000,
    0
);

// setTimeout(() => {
//     async$.unsubscribe();
// }, 6000);

asyncScheduler.schedule(()=>async$.unsubscribe(), 6000);

