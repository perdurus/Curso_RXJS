import { fromEvent } from 'rxjs';
import {map, tap} from 'rxjs/operators'

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut elementum tellus, quis iaculis nibh. Ut eu odio vel erat porta tempor. Nullam auctor magna ut orci elementum gravida. Integer vulputate sollicitudin sem, non suscipit lacus hendrerit id. Suspendisse potenti. Aliquam dictum imperdiet ornare. Nullam bibendum interdum leo, quis malesuada nulla egestas vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id orci hendrerit, accumsan turpis a, aliquam neque. Curabitur eu magna massa. Morbi blandit tellus urna, et pulvinar massa convallis sit amet. Donec id mattis nisl. Nulla pulvinar orci mauris, sed pretium felis luctus ut. Praesent lacus lacus, dignissim id libero in, tristique viverra erat.
<br/><br/>
In hac habitasse platea dictumst. Nunc in bibendum lectus. Sed a quam laoreet metus iaculis venenatis nec et felis. Sed a tortor ultricies, auctor orci a, pretium lacus. Aenean et lectus fermentum, auctor lorem ac, finibus lectus. Nam pharetra ac mauris eget condimentum. Integer sollicitudin, dui sed porttitor tempor, velit sem gravida nulla, ac luctus purus nisi id augue. Curabitur ac lacus libero. Integer fermentum, dolor nec consequat placerat, tortor ligula vehicula augue, eget lacinia ipsum nisi ac ex. Cras eleifend, felis ultricies dignissim finibus, augue libero elementum lectus, in bibendum risus orci a justo. Phasellus facilisis placerat leo, non sagittis est lacinia in. Nunc dictum erat vitae neque feugiat dignissim.
<br/><br/>
Nam pellentesque ultricies eros, nec sodales tellus luctus non. Donec luctus enim in mi tempor, id dignissim nisl ultrices. Morbi eu lacus hendrerit, vehicula libero non, dictum nibh. Maecenas congue fringilla felis eget finibus. Nullam volutpat eleifend ultricies. Duis sit amet consectetur nulla. Donec id varius felis. Donec tempor tempus mi id rutrum. Morbi mattis orci eget velit feugiat varius.
<br/><br/>
Donec congue, nunc ut accumsan auctor, ligula massa bibendum orci, id lobortis metus ligula quis libero. Nulla ac sagittis nibh. Donec efficitur, orci et malesuada facilisis, metus turpis eleifend arcu, sit amet finibus urna erat blandit nisi. Nunc ut elit eu libero laoreet euismod eget eu purus. Vestibulum gravida nisl vel congue scelerisque. Vestibulum et enim ultrices, sagittis dui feugiat, condimentum augue. Nulla maximus a ex ut pretium. Donec pulvinar sapien suscipit elit feugiat, at pellentesque nisi facilisis. Proin faucibus facilisis ligula, quis dignissim ipsum sollicitudin id. Curabitur vel urna urna. Etiam ac ultrices lectus. Nulla dictum placerat pulvinar. Suspendisse quis felis dui.
<br/><br/>
In hac habitasse platea dictumst. Vivamus vel dapibus diam, facilisis lacinia sapien. Ut non orci orci. Mauris blandit, nisi sed pretium placerat, arcu risus vestibulum purus, vitae tempor urna mauris vel lacus. Sed lobortis sem eu malesuada sollicitudin. Sed porttitor, lacus sed porttitor gravida, erat elit luctus nunc, non mattis magna dolor eget massa. Nam vehicula, ipsum sit amet ultricies feugiat, lacus nunc sodales leo, eget molestie neque neque sit amet metus. Aliquam id erat ac lacus accumsan fermentum a vitae ipsum.
<br/><br/>
Ut dignissim diam sem, at porttitor lacus suscipit vitae. Aenean facilisis quis mauris eget posuere. Pellentesque ornare auctor nisi a feugiat. Praesent vestibulum venenatis eleifend. Sed fringilla turpis vitae aliquet bibendum. Donec gravida vitae orci a iaculis. Proin pellentesque mollis tincidunt. Nulla vitae tempus nulla, sit amet egestas augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Donec viverra fringilla enim, vel eleifend justo mattis non. Aliquam placerat gravida eros, vel vestibulum erat gravida sed. In nulla nunc, commodo sed ultrices id, elementum nec magna. Nulla dapibus augue eget ligula feugiat, eu iaculis metus mattis. Nullam eget lacus pellentesque, facilisis augue sed, sodales ex. Sed venenatis vitae ex eu interdum. Fusce facilisis est justo, eget egestas nibh commodo vitae. Phasellus ac accumsan ipsum. Donec ac posuere mi. Pellentesque venenatis leo quis felis interdum, vel mattis ante rutrum. Sed id porta justo, lacinia scelerisque libero. Nam nisl quam, dictum id finibus at, vehicula id mi.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui massa, varius at purus ut, accumsan consectetur libero. Pellentesque mattis, velit non tempor malesuada, mi leo cursus massa, laoreet ullamcorper turpis sapien a justo. Mauris metus massa, blandit et varius sed, ornare id metus. Integer gravida risus sit amet metus commodo, quis sollicitudin lacus sollicitudin. Donec a pretium sem, vitae faucibus velit. Nulla ipsum tellus, dignissim at dictum in, blandit eu elit. Proin pharetra pellentesque lectus. Etiam id mauris purus. Phasellus varius eros vel ex suscipit semper. Ut auctor risus elit, vitae fermentum magna pellentesque at. Donec lacus nunc, mattis vitae ligula nec, tristique fermentum dolor. In quis convallis metus. Curabitur in ante dolor.
<br/><br/>
Cras est nibh, maximus eget condimentum quis, tempus et odio. Ut nec augue nulla. Donec condimentum velit a sodales blandit. Mauris vestibulum sed odio a viverra. Proin pharetra quam sed eleifend molestie. Nam luctus vitae tortor vel rutrum. Nam ornare ante vel dui cursus commodo. Sed in laoreet orci, in tincidunt mi. Nulla a mi et sapien commodo egestas non in lorem. Mauris euismod dolor ut massa volutpat volutpat. In hac habitasse platea dictumst. Aenean auctor dui et ipsum rhoncus, et fermentum leo facilisis. Sed elementum sapien non leo maximus, id mollis mauris pulvinar. Vestibulum faucibus leo eu nibh luctus pellentesque.
<br/><br/>
Donec felis purus, mollis id est in, lobortis consequat quam. Aenean cursus vehicula varius. Nunc ut metus commodo, varius diam vel, vehicula nunc. Phasellus at aliquet nisl. Quisque condimentum, lectus at pretium volutpat, felis ante lacinia elit, a feugiat dolor velit quis lacus. Aliquam cursus maximus ligula scelerisque posuere. Curabitur dignissim enim elit, sit amet efficitur lorem luctus sit amet. Pellentesque ullamcorper ac ex iaculis tincidunt. Maecenas et dignissim urna, sed suscipit augue. Integer aliquet lobortis eros at volutpat. Cras tempor lacinia nibh, eget iaculis ligula maximus et. Nulla commodo magna lectus, nec hendrerit ante scelerisque eget. Suspendisse tincidunt cursus ipsum, et mollis ex efficitur et. Vestibulum vel nulla urna. Curabitur accumsan neque eget ligula tincidunt, eget tempus massa semper. Aliquam ultricies odio id enim semper maximus.
<br/><br/>
Nam nunc risus, egestas et turpis sagittis, tincidunt elementum dui. In hac habitasse platea dictumst. Cras a dui vitae sem posuere varius. Aliquam erat volutpat. Proin varius, nisi porta malesuada sagittis, mi mauris laoreet erat, in gravida ipsum metus vel velit. Nullam imperdiet, nisi a scelerisque vulputate, magna ex pretium tortor, eget ornare neque sapien a neque. Donec orci dui, placerat eget erat non, aliquam venenatis nibh. Aenean eu dapibus ex. Morbi commodo odio vel enim condimentum, sed venenatis sapien volutpat.
<br/><br/>
Ut sit amet purus in ipsum volutpat facilisis vel vel urna. Donec sed augue leo. Nullam tristique orci arcu, ut auctor turpis finibus a. Donec sed libero eros. Pellentesque molestie rhoncus tincidunt. Quisque mollis pretium arcu. Nullam dignissim scelerisque risus, sit amet molestie neque rutrum et. Vestibulum a scelerisque velit, nec vehicula est. Proin libero ante, placerat ac elit eget, scelerisque scelerisque est. Aenean quis leo tempor, accumsan sapien a, facilisis diam. Morbi id mattis risus. Quisque quis justo eget felis feugiat placerat non nec lacus.
<br/><br/>
Donec id est porta metus maximus posuere. Sed nisl nulla, bibendum in justo non, aliquet imperdiet neque. Proin vel urna quis libero congue consequat sit amet eu nulla. Fusce quis felis quis nisi scelerisque euismod. Maecenas ut nisl sed est ultricies commodo. Nulla aliquet placerat pretium. In nibh sem, lacinia vel semper in, dictum id nulla. Etiam ut tortor id ligula pretium iaculis mattis in felis. Nullam facilisis dapibus auctor. Phasellus feugiat, ex ac eleifend aliquam, urna eros gravida libero, quis consequat magna ipsum a ex. Curabitur nec consectetur est. Integer sed sem maximus, faucibus tortor nec, dignissim dolor. In blandit tellus a elit faucibus tempor. Proin viverra a justo sit amet aliquam. Fusce sollicitudin suscipit fermentum.
<br/><br/>
Maecenas feugiat quis dolor sed fermentum. Integer enim velit, lobortis vel rhoncus vel, ullamcorper sed nunc. Sed vel tellus id risus suscipit tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a urna ut erat facilisis viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget mauris ac turpis lobortis ullamcorper maximus et diam.
<br/><br/>
Mauris porttitor venenatis nulla. Maecenas nec pellentesque massa, eget ultricies tortor. Phasellus ex magna, sagittis laoreet finibus eu, finibus quis purus. Donec a vulputate nibh. Morbi gravida fringilla malesuada. Cras quis orci feugiat, tristique ipsum ut, fermentum metus. Ut posuere lacus vel urna tempus dictum. Nam elementum dapibus suscipit. Integer nisl justo, euismod eget iaculis vel, blandit ut neque.
<br/><br/>
Nulla commodo tempus sagittis. In laoreet ipsum et lobortis accumsan. Ut lobortis odio eget lectus malesuada, ut ultrices tortor pretium. Nunc id nisi eu mi vulputate gravida blandit non urna. Pellentesque auctor nulla sit amet lorem cursus, eget elementum turpis tincidunt. Ut placerat varius est, vitae tempor nunc pretium ut. Praesent vitae finibus nunc. Ut lacinia porttitor odio sit amet pretium. Nulla ultricies arcu vel massa gravida vehicula. Fusce vel augue nec turpis egestas luctus ac a eros. Nunc justo odio, ornare a dapibus eget, dapibus sed arcu. Curabitur at odio molestie, dictum erat eu, vestibulum nulla.
<br/><br/>
Suspendisse non eleifend nisi. Aenean pulvinar fermentum elit non ultricies. Praesent in consequat urna. Pellentesque porta magna ut nulla consectetur semper. Nam ut varius erat. Etiam ultrices semper ante eu laoreet. Donec neque libero, pretium ut velit sit amet, ultricies gravida metus. Suspendisse imperdiet tincidunt turpis ut dapibus. Aenean faucibus dolor tortor, at dictum sapien porttitor sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/><br/>
Mauris id ligula quis ante placerat porttitor ac vel lacus. Suspendisse ullamcorper massa nulla, sed volutpat justo tincidunt at. Proin dictum, urna non mollis placerat, ante dolor ultricies turpis, eu sollicitudin turpis libero in est. Sed tristique neque ut libero tempor, in sagittis velit ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam imperdiet ullamcorper commodo. Phasellus laoreet nisi et odio porttitor placerat. Morbi a lectus quis dui ullamcorper lacinia. Etiam eget purus id erat auctor eleifend nec eget nulla. Cras et elit gravida, vehicula ex vel, rhoncus mi. Maecenas a mi eleifend, rhoncus nibh nec, convallis est. Fusce molestie lectus quis dolor mattis dictum. Nam est felis, volutpat ac posuere vel, semper a tellus.
<br/><br/>
Morbi ornare blandit lectus, in malesuada metus consequat at. In quis dui scelerisque, tincidunt urna a, tincidunt metus. Nunc eleifend diam eu cursus tincidunt. Morbi sed augue tortor. Sed consectetur convallis turpis, a aliquam eros venenatis quis. Proin dapibus efficitur nunc, suscipit dictum orci hendrerit ac. Curabitur ultricies varius risus at sagittis. Aliquam vitae mauris posuere, convallis leo in, vehicula quam.
<br/><br/>
Curabitur facilisis blandit libero, non dictum sem vulputate a. Praesent suscipit, est in sodales venenatis, purus purus cursus quam, a lobortis arcu lectus in ipsum. Cras ipsum metus, blandit sed rutrum sed, sagittis ultricies lacus. Suspendisse scelerisque mattis neque non vehicula. Suspendisse mattis tincidunt nisi eget euismod. Sed molestie elit sed venenatis bibendum. Sed ultrices in massa et pellentesque. Nam molestie, leo sit amet tristique blandit, dui nulla placerat purus, quis facilisis ligula massa ac nunc. Nullam venenatis molestie ornare. Etiam vel felis ac quam venenatis pellentesque sed id tellus.
<br/><br/>
Aliquam tincidunt dapibus urna vel mollis. Nulla at lobortis purus. Etiam ligula quam, rhoncus vel suscipit sodales, dapibus id lorem. Etiam blandit purus sit amet velit eleifend, sit amet interdum magna imperdiet. Fusce maximus finibus erat. Donec fermentum nisi dictum aliquet consectetur. Mauris rhoncus lectus lectus, a auctor magna lacinia eget.
<br/><br/>
Aliquam eget eros in urna sollicitudin tempus et non mi. Cras semper, lacus nec finibus iaculis, sem libero blandit magna, at finibus ante elit at arcu. Suspendisse viverra posuere scelerisque. Suspendisse tortor arcu, sollicitudin ut felis nec, consectetur efficitur nulla. Ut eget urna pharetra, placerat lacus non, hendrerit lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras efficitur varius turpis, non mattis eros. Donec mollis ornare nibh eu vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//Función que me haga el cálculo
const calcularPorcentajeScroll =  (event) =>{
    //console.log(event);

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    //console.log({scrollTop, scrollHeight,clientHeight});

    return (scrollTop/(scrollHeight - clientHeight)) * 100;
} 


//Me suscribo al scroll del html
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    //map( event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll), 
    //tap(console.log)
);

progress$.subscribe(porcentaje => {
    console.log(porcentaje);
    //progressBar.style.width = `${ porcentaje }`;
    progressBar.style.width = `${porcentaje}%`;
});




