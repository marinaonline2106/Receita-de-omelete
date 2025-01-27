function quantidadeoriginal(){
    document.getElementById('informacoes').innerHTML =  "<b> Tempo:</b> 15 minutos<br><br><b> Rendimento:</b> 2 porções<br><br> <b> Dificuldade:</b> facil";
    document.getElementById('ingredientes').innerHTML ="<li>4 ovos</li> <li>2 colheres (sopa) de creme de leite</li> <li>Sal e pimenta-do-reino a gosto</li> <li>1 colher (sopa) de manteiga</li> <li>3/4 de xícara (chá) de queijo gorgonzola esmigalhado</li>";
}

function quantidadeduplicada(){
    document.getElementById('informacoes').innerHTML =  "<b> Tempo:</b> 30 minutos<br><br><b> Rendimento:</b> 4 porções<br><br> <b> Dificuldade:</b> facil";
    document.getElementById('ingredientes').innerHTML ="<li>8 ovos</li> <li>4 colheres (sopa) de creme de leite</li> <li>Sal e pimenta-do-reino a gosto</li> <li>2 colheres (sopa) de manteiga</li> <li>1 e 1/2 de xícara (chá) de queijo gorgonzola esmigalhado</li>";
}

function img1(){
    document.getElementById('img').src="C:\\Users\\Aluno\\Downloads\\receita\\Trab5\\ovo.png";
}

function img2(){
    document.getElementById('img').src="C:\\Users\\Aluno\\Downloads\\receita\\Trab5\\omelete.png";
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

function esconder(){
    document.getElementById('linha2').style.display = "none";
    document.getElementById('linha3').style.display = "none";
    document.getElementById('linha4').style.display = "none";

}
function aparecer(){
    document.getElementById('linha2').style.display = "block";
    document.getElementById('linha3').style.display = "block";
    document.getElementById('linha4').style.display = "block";

}