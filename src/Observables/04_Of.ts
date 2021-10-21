import {of} from 'rxjs'


//const obs$ = of(1,2,3,4,5,6);
// No pilla el tipado const obs$ = of<string>( '1', '2');
const obs$ = of(...[1,2,3,4,5], 1,2,3);

console.log('inicio del obs$');

obs$.subscribe(
    next => console.log('next: ', next), 
    null,
    ()=> console.log('Terminamos la secuencia'));

console.log('fin del obs$');