import { from } from 'rxjs';
import { reduce, filter } from 'rxjs/operators';

/**
* Ejercicio: 
* Sume todos los números del arreglo usando un reduce.
* Debe de filtrar para que sólo números sean procesados
* La salida debe de ser 32
* 
* Tip:
* isNan() es una función de JavaScript para determinar si es número
* Usar filter<any>(...) para no tener problemas de tipado.
*/

(() =>{
    
    let totalReducer = (acu:number, current:number)=>{
        return acu + current;
    }

    let onlynumber = (val)=>{
        let numbers = new RegExp('^[-+]?[0-9]*\.?[0-9]*.');
        val = parseFloat(val);
        if(numbers.test(val.toString())) return val
    }
    
    const datos= [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];
    
    from(datos).pipe(
        filter(onlynumber),
        reduce(totalReducer),
    ).subscribe( console.log ) // La salida debe de ser 32
})();