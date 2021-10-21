import { interval, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{

  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) )
  );
  // No tocar la creación del observable
  // ============================================

    
  
  
  // Estos dos observables deben de emitir exactamente los mismos valores
  //Tenemos los observables como Cold porque se activan en el subscribe
  //Esto hace que nos pasen todos los valores tal cual desde el observable
  //reloj$.subscribe( val => console.log('obs1', val) );
  //reloj$.subscribe( val => console.log('obs2', val) );

  //Necesitamos activar antes de la subscripción el obsrvable 'Hot'
  //Tipo especial de observable
  const subject$ = new Subject();
  //creamos una suscripción que nos va a emitir al resto
  reloj$.subscribe(subject$);


  subject$.subscribe( val => console.log('obs1', val) );
  subject$.subscribe( val => console.log('obs2', val) );

})();

		