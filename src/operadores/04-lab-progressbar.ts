import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

let texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus felis eu metus faucibus tempor et nec nisi. Ut condimentum mi eget placerat ullamcorper. Duis eu lectus sit amet nunc semper gravida quis vel quam. Pellentesque ut porta mauris, et eleifend lorem. Sed eleifend arcu vulputate odio facilisis, eu vestibulum libero efficitur. Morbi imperdiet convallis tristique. Sed pellentesque tellus sodales turpis mattis, nec elementum tellus maximus. Nam laoreet dolor et odio pulvinar, nec vehicula orci vulputate. Curabitur vitae iaculis mauris. Quisque condimentum eu arcu quis venenatis. Proin sit amet cursus nisi. Praesent rutrum eu leo et gravida. Praesent eu lobortis augue. Donec ac finibus lectus. Pellentesque venenatis, nisl et consectetur semper, tortor quam fermentum est, in pellentesque dui ligula sed turpis. Suspendisse sed pharetra eros.
<br><br>
Ut pretium est ut arcu aliquam, eu tristique nisl faucibus. Duis semper augue in vulputate luctus. Nam accumsan feugiat mattis. Duis sodales euismod lacus in tempus. Vivamus vel ex pulvinar, ultricies elit vitae, faucibus sapien. Nulla eget aliquet velit, vel varius eros. Nulla non nisi vel nisi placerat porta sed at lacus.
<br><br>
Nulla suscipit blandit arcu in ullamcorper. Integer vel lacus in sem laoreet placerat ac vitae ligula. Cras tristique rutrum augue sit amet accumsan. Nullam nunc leo, condimentum tempus justo sit amet, porta malesuada diam. Quisque a tempus massa, nec dictum augue. Nunc felis ex, gravida eget lacus a, euismod consectetur nisi. Praesent vitae mollis dui. Quisque vel lectus cursus, interdum sem a, malesuada purus. Donec semper nisl erat, nec molestie nisi tristique ut. Maecenas nec dictum ligula. Vestibulum non felis laoreet enim gravida egestas quis eget est. Nam a ipsum quis est malesuada porttitor. Proin pharetra posuere sollicitudin. Aliquam dictum ac metus in laoreet. Duis metus risus, vehicula ut est at, sagittis blandit tellus. Sed interdum, quam id volutpat ullamcorper, urna est faucibus est, ut rhoncus purus leo eu elit.
<br><br>
Mauris sagittis pretium ultricies. Curabitur ipsum purus, mollis quis sem at, pulvinar auctor mauris. Mauris mi dolor, scelerisque nec quam at, malesuada fermentum lacus. Nullam eu nulla ut diam tincidunt consequat vitae in velit. Morbi libero est, lobortis ac enim nec, dapibus lacinia tellus. Aliquam ac massa sit amet odio vestibulum porta. Sed diam lectus, suscipit sed auctor vitae, cursus eget enim. Sed mollis quam est, at hendrerit velit fringilla vel. Fusce eget tempus tortor. Aliquam velit turpis, pellentesque non feugiat at, dictum sit amet felis.
<br><br>
Nulla facilisi. Nunc felis libero, consequat quis nunc ac, tempor vulputate tortor. Nam maximus odio diam, vitae interdum eros tempor in. Donec pharetra, leo at ultrices vestibulum, erat mi rhoncus turpis, sit amet molestie augue nisi vitae est. Mauris vehicula aliquet mauris, id aliquam libero viverra vel. Proin iaculis luctus velit, sed dictum neque sollicitudin porta. Phasellus hendrerit libero ornare, varius libero nec, sollicitudin justo. Integer eu dictum arcu.
<br><br>
Vivamus porta, dui sed volutpat tincidunt, elit sem tristique est, vel ultricies quam dolor in eros. Fusce aliquam ac velit sed porta. Curabitur ac enim justo. Sed tempor volutpat fringilla. Aenean lacinia lectus ante, nec vestibulum dolor sollicitudin a. Pellentesque metus tortor, porttitor in molestie a, sagittis ac ante. Duis vitae faucibus orci, quis elementum metus. Fusce sagittis gravida turpis gravida blandit. Suspendisse placerat efficitur purus, nec pretium velit. Pellentesque iaculis fermentum lacus, viverra faucibus arcu iaculis ut. Donec metus mi, pellentesque sed sem consequat, vulputate iaculis libero. Nam at libero ipsum. Duis et porttitor elit, nec elementum ante. Etiam rutrum felis vel pretium mattis. Proin ornare commodo eros, vitae eleifend lacus efficitur a.
<br><br>
Phasellus malesuada tristique pretium. Nulla eget mi a purus euismod pulvinar ut semper neque. Vestibulum elementum finibus risus ac convallis. Etiam faucibus sem vitae ipsum varius lobortis. Phasellus pellentesque, mauris in pretium elementum, nisi diam congue justo, sed egestas massa ex quis justo. Curabitur malesuada imperdiet mi, vulputate vehicula purus tempus vitae. Nam a lacinia diam. Suspendisse placerat feugiat commodo. Proin varius at tortor id maximus. Nam tristique quam et turpis gravida mattis. Vestibulum dapibus finibus risus, vitae egestas tellus pulvinar non. Duis efficitur et lacus eget viverra. Nulla blandit bibendum feugiat. Fusce eros ante, mollis eu efficitur vel, feugiat eu mauris. Praesent blandit dapibus erat at tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br><br>
Sed ac dolor non orci pulvinar tincidunt. Nullam sollicitudin ante et purus euismod auctor. Etiam ac consequat nisi. Nunc a ante feugiat, tempor tortor sed, congue massa. Mauris sit amet condimentum odio. Nunc dapibus, ex gravida ultrices feugiat, erat est dignissim nulla, eget suscipit eros odio sit amet libero. Pellentesque dignissim risus sodales, lobortis dolor ac, semper augue. Morbi ornare tellus sed facilisis dapibus. Pellentesque cursus justo nec scelerisque hendrerit.
<br><br>
Pellentesque rutrum ornare elit, vitae feugiat ante condimentum id. Vivamus eros magna, rutrum at imperdiet at, bibendum ut nisi. Sed suscipit neque et velit placerat, non dignissim eros accumsan. Nullam nibh massa, facilisis ut maximus non, convallis condimentum justo. Curabitur auctor mauris eros, in tristique odio placerat sed. Maecenas accumsan hendrerit lobortis. Nulla ullamcorper nec eros ac accumsan. Aliquam tristique lobortis sem, sed sagittis nulla porta eget. Aenean consequat elementum rhoncus. Integer ac mattis velit. Aliquam aliquam dapibus turpis eu accumsan. Integer elementum mauris vulputate enim efficitur, id accumsan massa fermentum. Mauris bibendum leo suscipit viverra sodales. Ut tempus posuere sem, id gravida sem ullamcorper quis. Aenean bibendum libero nec metus interdum, a tempor elit semper.
<br><br>
Pellentesque tellus augue, cursus facilisis justo nec, accumsan mattis neque. Praesent viverra vel orci et fermentum. Etiam accumsan eget justo aliquam rutrum. Cras nec ornare erat. Phasellus vel dui vitae libero fermentum viverra. Vestibulum consequat sapien et metus eleifend volutpat. Mauris vestibulum, neque non pharetra lobortis, risus felis volutpat elit, ac elementum nisi ipsum vel purus. Quisque dapibus condimentum neque vitae aliquet. Fusce nec venenatis tortor, eu vulputate libero. Phasellus tincidunt erat nec auctor auctor. Morbi mattis convallis quam sed efficitur. Duis vel ante sit amet lacus posuere congue a ut felis.
<br><br>
Duis et enim ligula. Quisque sed lacus tortor. Nulla quis leo nec quam accumsan iaculis. Pellentesque convallis quam sed gravida finibus. Curabitur sit amet ligula ut lectus rhoncus accumsan ullamcorper vel orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vulputate et augue vel imperdiet. Fusce molestie tincidunt sem in lobortis.
<br><br>
Donec imperdiet tempor odio, nec tempor mauris iaculis id. Quisque ac dui enim. Sed ac porta velit, at semper sapien. Cras vel tincidunt tellus. Nulla dapibus est hendrerit, malesuada nisl sit amet, cursus purus. Vivamus tincidunt, metus id viverra bibendum, velit mauris molestie augue, in gravida est ligula malesuada erat. Suspendisse imperdiet egestas urna, et placerat eros vehicula et. Vestibulum at accumsan augue, vel pellentesque mi. Aenean tempus turpis augue, ut varius nulla accumsan in. Aenean sollicitudin pharetra venenatis.
<br><br>
Aliquam luctus, mi nec aliquam posuere, libero justo semper dolor, at faucibus elit quam vel nibh. Quisque varius vehicula purus, vitae placerat enim laoreet vel. Ut blandit eros at mi laoreet pharetra. Quisque tempor tempor scelerisque. Cras ultrices sed sem ac maximus. Vivamus laoreet laoreet orci a mollis. Aenean a ex facilisis, tincidunt erat et, scelerisque risus. Fusce ornare, diam facilisis aliquam iaculis, orci erat gravida enim, sed euismod nisl ligula eget dui. Nulla blandit turpis sed erat sodales, id dignissim neque accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean id nisi nisi.
<br><br>
Ut ut magna eu dolor ullamcorper sagittis. Morbi dapibus diam felis, nec ullamcorper nunc pharetra at. Aliquam viverra venenatis ornare. Fusce sit amet rhoncus eros. Pellentesque mollis pharetra nulla vitae hendrerit. Morbi quis ornare ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean rhoncus lectus hendrerit consequat porta. Fusce viverra dignissim lectus, sed pulvinar magna ultricies vel. Nunc dignissim ornare enim at feugiat. Quisque arcu risus, pulvinar a purus in, pharetra mollis ipsum. Morbi odio purus, consequat sit amet turpis at, dignissim fringilla tortor. Cras venenatis tempus arcu nec porta.
<br><br>
Proin eu egestas purus. Aliquam dapibus, sapien eget cursus cursus, ante augue iaculis massa, ac accumsan eros orci ac purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sodales nisi in urna tempor ultrices. Nullam sem enim, varius vel risus ac, dictum dapibus diam. Pellentesque a tortor nisl. Praesent quis interdum arcu. Nam gravida augue nibh, at congue elit malesuada eu. Donec nibh arcu, sodales ut hendrerit a, volutpat quis sem. Phasellus dolor purus, euismod sed ullamcorper vel, tincidunt non lectus. Nam tristique diam eu magna volutpat dignissim. Suspendisse elementum consectetur eleifend.
<br><br>
Donec fringilla dignissim quam sit amet semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec in accumsan elit. In euismod eget eros sed feugiat. Aliquam commodo quis augue nec vestibulum. Curabitur id risus et mauris tristique egestas. Integer tincidunt tellus elit, nec pharetra ligula ullamcorper sit amet. Donec nec semper dolor, quis mattis nulla. Vestibulum efficitur sem non nisi bibendum, eget finibus nunc tincidunt. Nullam ac sapien mattis, efficitur justo sed, faucibus libero.
<br><br>
Sed sit amet tempor tellus. Sed eget ex fringilla, ultricies tortor ac, tincidunt enim. Donec non lorem id erat laoreet commodo nec non purus. Donec sit amet semper diam. Aenean ut dapibus erat. Aliquam ut dignissim nunc. Morbi ultrices quis nisl vel tempus. Cras id tortor molestie, accumsan magna sit amet, maximus mauris. Quisque tempus massa sed nulla facilisis, in hendrerit lacus auctor.
<br><br>
Aenean quis lacus lacus. Phasellus consectetur ante eu sem tempus, ac dapibus eros dapibus. Aenean vel mauris ipsum. Duis ligula ante, porta quis libero in, dapibus lacinia augue. Fusce vel arcu in mi maximus facilisis in eget dolor. Aliquam efficitur cursus sodales. Phasellus et lorem et ligula elementum ultricies ut ac tortor. Morbi purus eros, mattis non condimentum in, tincidunt ut justo. Cras vel lacus et eros consequat vehicula at vel mauris.
<br><br>
Mauris nibh erat, pretium ut rhoncus et, tincidunt non dui. Morbi vestibulum mattis ligula, quis volutpat tortor finibus vitae. Morbi in ante ultricies, dignissim erat ac, pulvinar purus. Curabitur suscipit pharetra ligula, eget sodales risus vestibulum ut. Nam dui est, maximus ac augue sit amet, ultrices sodales urna. Quisque aliquet lorem eget ligula auctor, sit amet posuere justo tempor. In tempor egestas turpis ac congue. Vivamus vestibulum, elit a luctus ornare, nibh ante maximus ipsum, ac auctor eros nisl vel lectus. Aenean vel lacus quam. Sed sit amet congue dui. Maecenas ut orci mauris. Nulla iaculis mattis mauris, at interdum tortor rhoncus ut. Proin cursus fringilla diam eget blandit. Etiam urna augue, vehicula at viverra sed, tempus ac magna. Nunc dignissim ultricies magna, vestibulum commodo magna venenatis quis.
<br><br>
Etiam rutrum dui sem, sed congue eros tristique non. Cras ultrices est non eros consectetur euismod. Aliquam finibus ex tortor, sed gravida nibh maximus quis. Suspendisse at metus quis enim facilisis semper. Nulla euismod ex enim, ac vestibulum tortor molestie eleifend. Donec eros tortor, ultricies non egestas sed, rhoncus sed augue. Suspendisse nec scelerisque dolor, ut tempus velit. Cras semper sapien id placerat venenatis. Integer id nisl sem. Proin tincidunt sed justo molestie condimentum.
`;

let body = document.querySelector('body');
body.append(texto);

let progessBar = document.createElement('div');
progessBar.setAttribute('class', 'progress-bar');
body.append(progessBar);

// Funcion que haga el calculo
let calcularporcentajescroll = (event) =>{
    let {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight-clientHeight)) * 100;
}

//Streams
let scroll$ = fromEvent(document, 'scroll');
let progressroll$ = scroll$.pipe(
    map( calcularporcentajescroll ),
    tap(p => console.log('porcentaje', p))
);
progressroll$.subscribe((res)=>{
    console.log('res', res);
    progessBar.style.width = res+'%';
});