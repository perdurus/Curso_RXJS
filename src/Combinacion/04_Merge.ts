import { fromEvent, merge, pluck } from "rxjs";


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<PointerEvent>(document, 'click');

merge(
    keyup$.pipe(pluck('type')), 
    click$.pipe(pluck('type'))
).subscribe(console.log);