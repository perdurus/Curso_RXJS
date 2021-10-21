import { of, from, fromEvent, interval } from 'rxjs';
import {first, map, reduce, scan, take, tap} from 'rxjs/operators'
import { EnvironmentPlugin } from 'webpack';

const clicks$ = fromEvent<PointerEvent>(document, 'click');


clicks$.pipe(
    tap(val=>console.log('Tap', val)),
 //   map(event => ({
 //       clientY: event.clientY,
 //       clientX: event.clientX
 //   }))
    map(({clientY, clientX}) => ({clientY, clientX })),
    first( ({clientY, clientX}) => clientY >= 250)
)
.subscribe({
    next: val=>console.log('next', val), 
    complete: ()=>console.log('complete') 

});