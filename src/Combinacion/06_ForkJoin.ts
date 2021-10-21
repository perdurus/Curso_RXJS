import { delay, forkJoin, interval, of, take } from "rxjs";


const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a','b','c').pipe(delay(3500));

/*
forkJoin(
    numeros$, 
    intervalo$, 
    letras$
).subscribe(console.log);


forkJoin(
    numeros$, 
    intervalo$, 
    letras$
).subscribe(resp => {
    console.log('Numeros: ', resp[0]);
    console.log('Intervalo: ', resp[1]);
    console.log('Letras: ', resp[2]);
});



forkJoin({
    numeros$, 
    intervalo$, 
    letras$
}
).subscribe(resp => {
    console.log('Objeto:', resp);
    console.log('Numeros: ', resp.numeros$);
    console.log('Intervalo: ', resp.intervalo$);
    console.log('Letras: ', resp.letras$);
});
*/

forkJoin({
    num: numeros$, 
    int: intervalo$, 
    let: letras$
}
).subscribe(resp => {
    console.log('Objeto:', resp);
    console.log('Numeros: ', resp.num);
    console.log('Intervalo: ', resp.int);
    console.log('Letras: ', resp.let);
});