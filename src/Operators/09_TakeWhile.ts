import { of, from, fromEvent, interval } from 'rxjs';
import {first, map, reduce, scan, take, takeWhile, tap} from 'rxjs/operators'


const click$ = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    map( ({x, y}) => ({x, y}) ), 
    takeWhile( ({y}) => y <=450, true)
)
.subscribe({
    next: val =>console.log('next', val),
    complete: ()=>console.log('complete')
})