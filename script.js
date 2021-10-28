const piedra = 1;
const papel = 2;
const tijera = 3;

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function piedraJuego(){
    const maquina = numeroAleatorio(1,4);
    const resultado = document.getElementById("resultadoJuego");
    if(maquina == piedra){      //maquina = 1
        resultado.innerText = "Hemos empatado, ambos sacamos piedra";
    }else if(maquina == papel){  //maquina = 2 => papel
        resultado.innerText = "Has pedido, he sacado papel :(";
    }else if(maquina == tijera){
        resultado.innerText = "Has ganado, he sacado tijera :)";
    }
}
function papelJuego(){
    const maquina = numeroAleatorio(1,4);
    const resultado = document.getElementById("resultadoJuego");
    if(maquina == papel){      //maquina = 1
        resultado.innerText = "Hemos empatado, ambos sacamos piedra";
    }else if(maquina == tijera){  //maquina = 2 => papel
        resultado.innerText = "Has pedido, he sacado papel :(";
    }else if(maquina == piedra){
        resultado.innerText = "Has ganado, he sacado tijera :)";
    }
}
function tijeraJuego(){
    const maquina = numeroAleatorio(1,4);
    const resultado = document.getElementById("resultadoJuego");
    if(maquina == tijera){      //maquina = 1
        resultado.innerText = "Hemos empatado, ambos sacamos piedra";
    }else if(maquina == piedra){  //maquina = 2 => papel
        resultado.innerText = "Has pedido, he sacado papel :(";
    }else if(maquina == papel){
        resultado.innerText = "Has ganado, he sacado tijera :)";
    }
}
