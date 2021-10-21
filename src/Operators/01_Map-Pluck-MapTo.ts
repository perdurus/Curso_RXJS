import {fromEvent, range} from 'rxjs'
import {map, mapTo, pluck} from 'rxjs/operators'


//range(1,5).subscribe(console.log);
//No convence porque habría que hacerlo en cada suscripción de haber varias.
//range(1,5).subscribe(val => console.log(val*10));

//range(1,5).pipe(
//    map<number, string>(val => {
//        return (val * 10).toString();
//    })
//)
//.subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyUp$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyUp$.pipe(
    pluck('target','baseURI')
);

const keyupMapto$ = keyUp$.pipe(
    mapTo('Tecla presionada')
);


keyUp$.subscribe(console.log);
keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupMapto$.subscribe(code => console.log('mapTo', code));


