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
    //Hacer marcas de dimensiones - coordenadas
    drawWidthMarks();
    drawHeightMarks();
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
          marcador.visita += 1;
          marcador.ultimoGol = "visita";
          marcador2.value = marcador.visita;
          mensaje.style.backgroundColor = "BLUE";
          loc_x = 20;
          loc_y = 21;
          balon_y.readOnly = false;
          balon_x.readOnly = false;
          showAuxButton();
          moverBtn.classList.add('is-hidden');
    }else if(pecosa_x <= 0){
        mensaje.innerHTML = "Saque de meta";
        balon_x.value = 25;
        balon_y.value = canvas.height/2;
        loc_x = 20;
        loc_y = 21;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        //Hacer la cancha
        drawGoalArea('left');
        drawGoalArea('right');
        drawCenterLineAndCircle();
        dibujarPelotaSaque(25,100);
        drawWidthMarks();
        drawHeightMarks();
        //Redo all players
        let min = 10;               // index 10 is the 11th item
        let max = 19;               // index 19 is the 20nd item
        randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        ubicarVisitantes(randomIndex);
        ubicarLocales(Math.floor(Math.random()*formations.length));
    }else if(pecosa_x >= canvas.width){
        mensaje.innerHTML = "Saque de meta";
        balon_x.value = 575;
        balon_y.value = canvas.height/2;
         //Saque de meta
        requestAnimationFrame(saquedeMeta);
    }else if(canvas.height < pecosa_y < 0){
        mensaje.innerHTML = "Saque de Banda, con la pelota detras de la cabeza, a la bombonera!!!";
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
    }
    else{
        console.log("posicion del balon en x "+pecosa_x+" posicion del balon en y "+pecosa_y);
        mensaje.innerText = "posicion del balon en x "+pecosa_x+" posicion del balon en y "+pecosa_y;
        mensaje.style.backgroundColor = "";
        requestAnimationFrame(saquedeMeta);
    }
}