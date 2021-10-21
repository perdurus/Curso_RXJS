import { of, from, fromEvent, interval } from 'rxjs';
import {first, map, reduce, scan, skip, take, takeUntil, takeWhile, tap} from 'rxjs/operators'


//Creamos un botón(
const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);


const counter$ = interval(1000);
//const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(t => console.log('Tap antes', t)),
    skip(3),
    tap(t => console.log('Tap despues', t))
);

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});
