import {range} from 'rxjs';
import {map, tap} from 'rxjs/operators'


const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => console.log('tap1', x)), 
    map( val => val *10),
    tap( {
        next: valor=> console.log('tap2', valor),
        complete: () =>console.log('Se terminó todo')
    })
)
.subscribe(
    val => console.log('subs', val)
);
