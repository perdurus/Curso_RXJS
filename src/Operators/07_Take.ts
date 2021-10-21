import { of, from, fromEvent, interval } from 'rxjs';
import {map, reduce, scan, take, tap} from 'rxjs/operators'

const numeros$ = of(1,2,3,4,5).pipe(tap(t=>console.log('tap 1', t)));

numeros$.pipe(
    tap(t=>console.log('tap2', t)),
    take(3)
)
.subscribe(
    {
        next: val => console.log('next', val),
        complete: ()=>console.log('complete')
    }
);
