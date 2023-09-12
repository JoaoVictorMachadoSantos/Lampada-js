let interruptor = 'off'; // ligar ou desligar;

document.getElementById('ligar').addEventListener('click', function() {
    if (interruptor !== 'quebrou') {
        interruptor = 'on';
        console.log(interruptor);
        mudarimg();
    }
});

document.getElementById('desligar').addEventListener('click', function() {
    if (interruptor !== 'quebrou') {
        interruptor = 'off';
        console.log(interruptor);
        mudarimg();
    }
});

// detectar double click
document.getElementById('lamp').addEventListener('dblclick', function() {
    interruptor = 'quebrou';
    console.log('quebrou essa merda');
    mudarimg();
});

// detectar se o mause ta em cima da lampada
document.getElementById('lamp').addEventListener('mouseover', function() {
    if (interruptor !== 'quebrou') {
        interruptor = 'on';
        console.log('mouse detectado');
        mudarimg();
    }
});

// detecta se o mause ta fora 
document.getElementById('lamp').addEventListener('mouseleave', function() {
    if (interruptor !== 'quebrou') {
        interruptor = 'off';
        console.log('mouse não detectado');
        mudarimg();
    }
});

//função que muda as imagens
function mudarimg() {
    var elemento = document.getElementById('lamp');

    switch (interruptor) {
        case 'on':
            elemento.src = "img/ligada.jpg";
            break;
        case 'off':
            elemento.src = "img/desligada.jpg";
            break;
        case 'quebrou':
            elemento.src = "img/quebrada.jpg";
            break;
        default:
            break;
    }
}
