import { catchError, debounceTime, exhaustMap, fromEvent, map, mergeMap, of, sampleTime, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

//Helper
const peticonHttpLogin = (userPass) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            map( resp => resp.response['token']),
            catchError( err => of('xxx') )
        );

//Html formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

//Streams

const submitForm$ = fromEvent<SubmitEvent>(form, 'submit')
        .pipe(
            tap( ev => ev.preventDefault()), 
            map( ev => ({
                email: ev.target[0].value,
                password:ev.target[1].value,
            })),
            exhaustMap(peticonHttpLogin)
        ) ;




submitForm$.pipe(

).subscribe( token => console.log(token));


