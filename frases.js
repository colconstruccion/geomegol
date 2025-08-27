const frasesDesviado = [
    "intentalo de nuevo",
    "Pilla la pendiente y recalcula",
    "Estuviste en el ba&ntilde;o antes del juego",
    "Como cuando eras hombre",
    "&iquest;Te alimentas con chancarina y sandy?",
    "Que tronco!!"
]

const frasesPase = [
    "Dame poder, dame poder",
    "Lo tenes alla, pillalo!",
    "Buen pase",
    "Si queres si queres",
    "Dame dominio!!!",
    "Sos un crack",
    "Quemale! Quemale!"
]

function fraseAleatoria(){
    const indexAleatorio = Math.floor(Math.random() * frasesPase.length);
    return frasesPase[indexAleatorio];
}

function fraseDesviada(){
    const indexTemp = Math.floor(Math.random()*frasesDesviado.length);
    return frasesDesviado[indexTemp];
}