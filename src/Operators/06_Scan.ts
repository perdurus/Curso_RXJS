import { from, fromEvent, interval } from 'rxjs';
import {map, reduce, scan, take, tap} from 'rxjs/operators'


const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur)=> acc + cur;

//Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0)
)
.subscribe(console.log);

//Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
)
.subscribe(console.log);

//Scan base de patron REDUX
interface Usuario {
    id: string;
    autenicado: boolean;
    token?:string;
    edad?:number;
}

const user:Usuario[] = [
    {id:'scanal', autenicado: false, token:null},
    {id:'scanal', autenicado: true, token:'ABC'},
    {id:'scanal', autenicado: true, token:'1234'},
    {id:'scanal', autenicado: true, token:'ZUUV'}
];

const states$ = from(user).pipe(
   scan<Usuario>( (acc, cur) => {
       return {...acc, ...cur}
   }) 
);

const id$ = states$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);

