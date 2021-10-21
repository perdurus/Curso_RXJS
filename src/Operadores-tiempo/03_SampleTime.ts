import { asyncScheduler, debounceTime, fromEvent, map } from 'rxjs';
import { pluck, distinctUntilChanged, throttleTime, sampleTime } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),
    map(({x, y})=> ({x, y}))
    
)
.subscribe(console.log);
