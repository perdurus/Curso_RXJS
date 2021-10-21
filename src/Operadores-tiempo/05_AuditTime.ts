import { fromEvent, interval, map, of } from 'rxjs';
import { pluck, distinctUntilChanged, throttleTime, sampleTime, sample, auditTime, tap } from 'rxjs/operators';



const click$ = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    map(({x, y})=> ({x, y})),
    tap(val => console.log('tap', val)),
    auditTime(2000)
)
.subscribe(console.log);

