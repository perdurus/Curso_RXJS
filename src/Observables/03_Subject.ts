
import {Observable, Observer, Subject} from 'rxjs'

const observer: Observer<any> = {

    next: value=> console.log('next:' , value),
    error: error=> console.warn('error:' , error),
    complete: ()=> console.info('completado:')

}


const intervalo$ = new Observable<number>(subs =>{

    const intervalId = setInterval(() =>subs.next(Math.random()), 1000);

    return ()=>{ 
        clearInterval( intervalId );
        console.log('Intervalo destruido');
    };
} );



//const subs1 = intervalo$.subscribe( rnd => console.log('subs 1: ', rnd));
//const subs2 = intervalo$.subscribe( rnd => console.log('subs 2: ', rnd));

/**
 * Casteo multiple
 * Tambien es un observer
 * Se puede manejar el next, error y complete
*/
const subject$ = new Subject();

const subscriptions = intervalo$.subscribe(subject$);

//const subs1 = subject$.subscribe( rnd => console.log('subs 1: ', rnd));
//const subs2 = subject$.subscribe( rnd => console.log('subs 2: ', rnd));


const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout(() => {
    subject$.next(10) ;
    subject$.complete();
    subscriptions.unsubscribe();
}, 3500);

