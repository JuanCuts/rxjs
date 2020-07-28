/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

(() =>{

    const nombres$ = of('batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa');
    const capitalizar = (nombre) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    nombres$
    .pipe(
        map(capitalizar)
    )
    .subscribe(console.log)
})();