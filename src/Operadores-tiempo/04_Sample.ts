import { asyncScheduler, debounceTime, from, fromEvent, interval, map, of } from 'rxjs';
import { pluck, distinctUntilChanged, throttleTime, sampleTime, sample } from 'rxjs/operators';


const interval$ = interval(500);
const click$ = fromEvent(document, 'click');


interval$.pipe(
    sample(click$)
)
.subscribe(console.log);

