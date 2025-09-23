function tiroLibre(){
    //Coger los valores de la pendiente
    Idy =  (100 - pecosa_y) / 4 ;
    Idx = (10 - pecosa_x ) / 10 ;
    //Idy = parseFloat(dyEl.value) || 0;
    Idx = Math.abs(Idx);
    //limpiar el canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //Hacer la cancha
    drawGoalArea('left');
    drawGoalArea('right');
    drawCenterLineAndCircle();
    //Redo all players
    dibujarLocales();
    dibujarVisitantes();
    //dibujar balon
    // se incremente la posicion horizontal y vertical
    pecosa_x -= Idx; 
    pecosa_y += Idy;
    //se hace la bola moviendose
    ctx.beginPath();
    ctx.arc(pecosa_x,pecosa_y,5,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
    //revisar que no este cerca de un jugado del equipo local
    let balonLocal = recuperarBalonLocal(pecosa_x,pecosa_y);
    if (balonLocal == true){
      mensaje.innerHTML = fraseAleatoria();
      return;
    } 
    // Distancia al gol
    gol_delta_x = 10 - pecosa_x;
    gol_delta_y = 100 - pecosa_y;
    if (Math.abs(gol_delta_y) <= 25 && Math.abs(gol_delta_x) <= 10){
          mensaje.innerHTML = "GOL!!! GOL DEL VISITANTE!";
          balon_x.value = "";
          balon_y.value = "";
          marcador.visita += 1;
          marcador.ultimoGol = "visita"
          marcador2.value = marcador.visita;
          tablero.style.backgroundColor = "BLUE";
          loc_x = 20;
          loc_y = 21;
          balon_y.readOnly = false;
          balon_x.readOnly = false;
          moverBtn.classList.add('is-hidden');
          showAuxButton();
    }else if(pecosa_y <= 0 || pecosa_y >= canvas.height){
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        console.log("se salio en las coordenadas x"+pecosa_x+" y la coordenada y "+pecosa_y);
        mensaje.innerHTML = "Saque de banda del equipo local";
    }else if(pecosa_x <= 0){
        mensaje.innerHTML = "Saque de meta del local";
        balon_x.value = 15;
        balon_y.value = canvas.height/2;
        loc_x = 20;
        loc_y = 21;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        //Redo all players
        dibujarLocales();
        iniciarVisitantes();
        //Hacer la cancha
        drawGoalArea('left');
        drawGoalArea('right');
        drawCenterLineAndCircle();
        dibujarPelotaSaque(25,100);
    }else if (pecosa_x > canvas.width){
        mensaje.innerHTML = "Saque de meta del visitante";
        pecosa_x = 575;
        pecosa_y = canvas.height/2;
        pecosa_x -= Idx; 
        pecosa_y -= Idy;
          balon_x.value = pecosa_x;
          balon_y.value = pecosa_y;
          loc_x = 20;
          loc_y = 21;
          balon_y.readOnly = false;
          balon_x.readOnly = false;
          ctx.clearRect(0,0,canvas.width,canvas.height);
          //Redo all players
          dibujarLocales();
          iniciarVisitantes();
          //Hacer la cancha
          drawGoalArea('left');
          drawGoalArea('right');
          drawCenterLineAndCircle();
          dibujarPelotaSaque(pecosa_x,pecosa_y);
          requestAnimationFrame(patearBalon);
    }else{
        console.log("posicion del balon en x "+pecosa_x+" posicion del balon en y "+pecosa_y);
        mensaje.innerText = "posicion del balon en x "+pecosa_x+" posicion del balon en y "+pecosa_y;
        mensaje.style.backgroundColor = "";
        requestAnimationFrame(tiroLibre);
    }
}