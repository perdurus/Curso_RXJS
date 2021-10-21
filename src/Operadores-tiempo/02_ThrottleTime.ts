import { asyncScheduler, debounceTime, fromEvent, map } from 'rxjs';
import { pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({x, y})=> ({x, y})),
    throttleTime(3000)
)
.subscribe(console.log);

//Ejemlo 2

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');


input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged(),
)
.subscribe(console.log);
