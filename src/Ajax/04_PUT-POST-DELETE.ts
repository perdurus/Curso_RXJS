import {ajax} from 'rxjs/ajax'


const url= 'https://httpbin.org/delay/1';

//ajax.post(url, {id:1, nombre:'Sergio'}, {'mi-token':'abc123'}).subscribe(console.log);
//ajax.put(url, {id:1, nombre:'Sergio'}, {'mi-token':'abc123'}).subscribe(console.log);
//ajax.delete(url, {'mi-token':'abc123'}).subscribe(console.log);


ajax({
    url: url,
    method: 'POST',
    headers: {'mi-token': 'ABC123'},
    body: {id:1, nombre:'Sergio'}
}).subscribe(console.log);