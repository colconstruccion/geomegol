cancha.js
77 llama funcion iniciarJuego()
geomegol_v.js
56 function iniciarJuego() dibuja balon en la mitad del campo y los dos arqueros
69 funcion dibujarArqueros()
90 funcion dibujarBalon()
129 funcion borrarBalon() en geomegol_v41 and geomegol_v42
110 se dibujan los jugadores locales con una for loop que escucha por un cambio en la tabla de jugadores locales
145 function moverJugador() en geomegol_v42
175 function iniciarVisitantes() inicia las posiciones de los visitantes y las ubica en la tabla de visitantes
178 funcion revisarPosicion revisa que el jugador local que se haga no tenga las coordenadas cercanas a un jugador visitante
218 function dibujarVisitantes() coge las posiciones de la tabla de visitantes y dibuja los jugadores
335 Se mueve la pelota con un addEventListener -> moverBalon()
237 funcion moverBalon() mueve el balon del jugador local a la porteria del visitante
    252 paseLocal() revisa si la pelota pasa cerca de un jugador local
    484 recuperarBalonVisitante() revisa si esta cerca de un balon visitante para llamar la funcion patearBalon()
        496 patearBalon() mueve la pelota por un jugador visitante
    314 saquedeBanda() se llama si pecosa_y es mayor o menor que canvas.height
    318 saquedeMeta() se llama si pecosa_x es mayor o igual a canvas.width
    326 requestAnimationFrame(moverBalon) se vuelve a llamar si pecoas_x esta entre 0 y canvas.width
348 funcion patearBalon() mueve la pelota en direcion a la porterial local cuando toca un jugador del equipo visitante
    372 recuperarBalonLocal() un jugador local coge la pelota si pasa cerca del jugador
    415 para devolver la pelota en sentido contrario dentro de una condicion if (pecosa_x > canvas.width) 
    436 llama la funcion patearBalon requestAnimationFrame(patearBalon) de nuevo  
    442 requestAnimationFrame(patearBalon) llama de nuevo la funcion patearBalon si no se cumplen las condiciones anteriores
446 function recuperarBalonLocal() Revisa si la pelota pasa cerca de un jugador local que la capture.
471 function paseLocal() devuelve cierto (true) si un local local coge la pelota

saquedeBanda.js
15 recuperarBalonLocal() revisa si la pelota pasa cerca de un jugador local que la capture
64 saquedeMeta() si pecosa_x es mayor que canvas.width llama esta funcion
74 saquedeBandaAbajo() si pecosa_y es mayor que canvas.height se llama esta funcion despues de restarle a pecosa_y-= Idy
84 saquedeBanda() si pecosa_y es menor que 0 se llama despues esta funcion despues de sumarle a pecosa_y += Idy
95 requestAnimation(saquedeBanda) se vueleva a llamar si no se cumplen las condiciones anteriores
99 funcion saquedeBandaAbajo si pecosa_y es mayor que canvas.height se resta a pecosa_y -= Idy

saquedeMeta.js
18 recuperarBalonLocal() revisa si la pelota la coge un jugador local
70 requestAnimationFrame(saquedeMeta) la vuelve a llamar si pecosa_x >= canvas.width
82 requestAnimationFrame(saquedeMeta) si no se cumplen las condiciones anteriores




