
//Ejercicio 1
import { combineLatest, fromEvent, merge, pluck } from "rxjs";

/*
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<PointerEvent>(document, 'click');

combineLatest(
    keyup$.pipe(pluck('type')), 
    click$.pipe(pluck('type'))
).subscribe(console.log);
*/

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@email.com';
input2.placeholder = '****';
input2.type = 'password';
document.querySelector('body').append(input1, input2);


//Helper
const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        pluck('target', 'value')
    )
}

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log);

