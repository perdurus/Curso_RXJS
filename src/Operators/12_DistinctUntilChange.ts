import { of, from, fromEvent, interval } from 'rxjs';
import {distinct, distinctUntilChanged, first, map, reduce, scan, skip, take, takeUntil, takeWhile, tap} from 'rxjs/operators'

const numeros$ = of(1,1,1,'1',1,3,3,2,2,4,4,5,3,1,'1');

numeros$.pipe(
    distinctUntilChanged()
)
.subscribe(
console.log

);

interface Personaje{
    nombre:string;
}

const personajes:Personaje[] = [
    {nombre:'Megaman'},
    {nombre:'Megaman'},
    {nombre:'X'},
    {nombre:'Zero'},
    {nombre:'X'},
    {nombre:'X'},
    {nombre:'Megaman'}
]

from (personajes).pipe(distinctUntilChanged((ant, act)=>ant.nombre === act.nombre)).subscribe(console.log);