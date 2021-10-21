import { fromEvent, interval } from 'rxjs';
import { concatMap, switchMap, take } from 'rxjs/operators';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    //switchMap( () => interval$)
    concatMap( () => interval$)
).subscribe(console.log);