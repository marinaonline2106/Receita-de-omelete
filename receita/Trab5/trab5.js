function quantidadeoriginal(){
    document.getElementById('informacoes').innerHTML =  "<b> Tempo:</b> 15 minutos<br><br><b> Rendimento:</b> 2 porções<br><br> <b> Dificuldade:</b> facil";
    document.getElementById('ingredientes').innerHTML ="<li>4 ovos</li> <li>2 colheres (sopa) de creme de leite</li> <li>Sal e pimenta-do-reino a gosto</li> <li>1 colher (sopa) de manteiga</li> <li>3/4 de xícara (chá) de queijo gorgonzola esmigalhado</li>";
}

function quantidadeduplicada(){
    document.getElementById('informacoes').innerHTML =  "<b> Tempo:</b> 30 minutos<br><br><b> Rendimento:</b> 4 porções<br><br> <b> Dificuldade:</b> facil";
    document.getElementById('ingredientes').innerHTML ="<li>8 ovos</li> <li>4 colheres (sopa) de creme de leite</li> <li>Sal e pimenta-do-reino a gosto</li> <li>2 colheres (sopa) de manteiga</li> <li>1 e 1/2 de xícara (chá) de queijo gorgonzola esmigalhado</li>";
}

function img1(){
    document.getElementById('img').src="https://p2.trrsf.com/image/fget/cf/942/530/images.terra.com/2023/06/04/877614693-omelete-de-gorgonzola.jpg";
}

function img2(){
    document.getElementById('img').src="https://preview.redd.it/r35von79cmt11.jpg?width=1080&crop=smart&auto=webp&s=2e1db159038c818da756be0988f00ea4d555cf09";
}

function chocolate(){
    const elementos = document.querySelectorAll('a, p, h1, h2, ol, ul');
    elementos.forEach(function(elemento) {
        elemento.style.color = 'chocolate';
    });
    
}
function preto(){
    const elementos = document.querySelectorAll('a, p, h1, h2, ol, ul');
    elementos.forEach(function(elemento) {
        elemento.style.color = 'black';
    });
    
}