import { debounceTime, fromEvent, map } from 'rxjs';
import { pluck, distinctUntilChanged } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent>(document, 'click');

//click$.pipe(
//    map(({x, y})=> ({x, y})),
//    debounceTime(3000)
//)
//.subscribe(console.log);

//Ejemlo 2

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged(),
)
.subscribe(console.log);
