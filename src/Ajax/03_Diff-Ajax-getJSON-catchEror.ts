import { catchError, of } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax'

const url= 'https://httpbinxx.org/delay/1';
//const url = 'https://api.github.com/users?per_page=5';

const manejaError = (error: AjaxError) =>{
    console.warn('ERROR ManejaError', error.message);
    return of({
        ok: false,
        usuario: []
    });
}

//const obs$ = ajax.getJSON(url).pipe(catchError(manejaError)); //Solo respuesta
//const obs2$ = ajax(url).pipe(catchError(manejaError)); //Toda la petición

const obs$ = ajax.getJSON(url); //Solo respuesta
//const obs2$ = ajax(url); //Toda la petición



obs$.pipe(
    catchError(manejaError)
)
.subscribe( {
    next: val=>console.log('next', val),
    error: err=>console.warn('error subscriber', err),
    complete: ()=>console.log('complete')
})
//obs2$.subscribe( data => console.log('Data AJAX:', data))