import { fromEvent, interval } from 'rxjs';
import {map, reduce, take, tap} from 'rxjs/operators'


//REDUCE en javascript 
const numbers = [1,2,3,4,5];

const totalReducer = (acumulador:number, valorAct: number) =>{
    return acumulador + valorAct;
}

const total = numbers.reduce(totalReducer, 0);

console.log('total arr', total);


//REDUCE RXJS
interval(500).pipe(
    take(6), 
    tap(console.log),
    reduce( totalReducer)
)
.subscribe(
    {
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    }
);

