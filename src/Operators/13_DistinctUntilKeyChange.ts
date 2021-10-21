import { of, from, fromEvent, interval } from 'rxjs';
import {distinctUntilKeyChanged} from 'rxjs/operators'

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

from (personajes).pipe(distinctUntilKeyChanged('nombre')).subscribe(console.log);