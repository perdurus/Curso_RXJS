import { catchError, map, of } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax'

/* Con este fetch podemos recuperar los datos de una URL. Al pasar los datos en el primer then por
un json() tenemos que ejecutar otra vez el then (al ser el json una promesa también). El problema
viene cuando la URL es incorrecta o recibimos un error, ya que no se gestiona bien */

//fetchPromesa
//    .then( resp => resp.json() )
//    .then( data => console.log('Data: ', data) )
//    .catch( err => console.warn('Error en usuarios: ', err) )


const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (resp:Response) =>{
    if (!resp.ok){
        throw new Error(resp.statusText)
    }

    return resp;
}

const atrapaError = (err: AjaxError) => {
    console.warn('Error en:', err.message)
    return of([]);
}

const fetchPromise = fetch(url); //Nos devuelve promesa y eso es problematico
/*
fetchPromise
.then(resp => resp.json() )
.then(data => console.log('Data: ', data))
.catch(err => console.warn('Error usuarios', err));

fetchPromise
.then(manejaErrores)
.then(resp => resp.json() )
.then(data => console.log('Data: ', data))
.catch(err => console.warn('Error usuarios', err));
*/


ajax(url).pipe(
    map( ({response}) => response ),
    catchError( atrapaError )
)
.subscribe(users => console.log('Usuarios:', users));