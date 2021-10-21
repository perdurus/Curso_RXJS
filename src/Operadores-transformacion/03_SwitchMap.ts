import { debounceTime, fromEvent, map, pluck, Observable, mergeMap, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GitHubUsers, User } from '../Interfaces/github-users.interface';


const url = 'https://api.github.com/search/users?q=';

const body = document.querySelector('body');

const textInput = document.createElement('input');
const orderList = document.createElement('ol');


body.append(textInput, orderList);

//Helpers
const mostrarUser = (usuarios: User[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';
        
        li.append(img); 
        li.append(usuario.login + ' ' );
        li.append(anchor);

        orderList.append(li);
    }
    
}


//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(1000),
    pluck('target', 'value'),
    mergeMap<unknown, Observable<GitHubUsers>>( texto => ajax.getJSON(url+texto)),
    //mergeAll(),
    //pluck<any, GitHubUsers[]>('items')
    map<GitHubUsers, User[]>( ({items}) => items)
)
//.subscribe(mostrarUser);

const url2 = 'https://httbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    switchMap(texto => ajax.getJSON(url + texto))
)
.subscribe(console.log);