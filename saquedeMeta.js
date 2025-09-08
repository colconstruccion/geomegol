function saquedeMeta(){
    //Coger los valores de la pendiente
    Idy = parseFloat(dyEl.value) || 0;
    Idx = parseFloat(dxEl.value) || 0;
    //limpiar el canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    //Redo all players
    dibujarLocales();
    dibujarVisitantes();
    //Hacer la cancha
    drawGoalArea('left');
    drawGoalArea('right');
    drawCenterLineAndCircle();
    //dibujar arqueros
    dibujarArqueros();
    //recuperar balon por el equipo local
    balonLocal = recuperarBalonLocal(pecosa_x,pecosa_y);
    if (balonLocal == true){
      mensaje.innerHTML = fraseAleatoria();
      return;
    }
    // se incremente la posicion horizontal y vertical
    pecosa_x -= Idx; 
    pecosa_y += 0;
    //se hace la bola moviendose
    ctx.beginPath();
    ctx.arc(pecosa_x,pecosa_y,5,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
    // Distancia al gol
    gol_delta_x = 10 - pecosa_x;
    gol_delta_y = 100 - pecosa_y;
    if (Math.abs(gol_delta_y) <= 25 && Math.abs(gol_delta_x) <= 10){
          mensaje.innerHTML = "GOL!!! GOL DEL VISITANTE!";
          balon_x.value = "";
          balon_y.value = "";
          marcador[1]++;
          marcador2.value = marcador[1];
          tablero.style.backgroundColor = "BLUE";
          loc_x = 0;
          loc_y = 1;
          balon_y.readOnly = false;
          balon_x.readOnly = false;
          showAuxButton();
          moverBtn.classList.add('is-hidden');
    }else if(pecosa_x <= 0){
        mensaje.innerHTML = "Saque de meta";
        balon_x.value = 15;
        balon_y.value = canvas.height/2;
        loc_x = 0;
        loc_y = 1;
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
    }else if(pecosa_x >= canvas.width){
        mensaje.innerHTML = "Saque de meta";
        balon_x.value = 575;
        balon_y.value = canvas.height/2;
         //Saque de meta
        requestAnimationFrame(saquedeMeta);
    }else if(pecosa_y > canvas.height){
        mensaje.innerHTML = "Saque de Banda";
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
    }
    else{
        console.log("posicion del balon en x "+pecosa_x+" posicion del balon en y "+pecosa_y);
        console.log("Distancia al gol en x "+gol_delta_x+" Distancia al gol en y "+gol_delta_y);
        tablero.style.backgroundColor = "";
        saquedeBanda();
    }
}