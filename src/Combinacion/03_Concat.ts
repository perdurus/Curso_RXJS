import { concat, interval, of, take } from "rxjs";


const inteval$ = interval(1000);

concat(
    inteval$.pipe( take(3)),
    inteval$.pipe( take(2)),
    of('texto')
).subscribe(console.log);