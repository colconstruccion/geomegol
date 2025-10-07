function saquedeBanda(){
    //Coger los valores de la pendiente
    Idy = parseFloat(dyEl.value) || 0;
    Idx = parseFloat(dxEl.value) || 0;
    //limpiar el canvas
    //como las pendientes puden ser negativas o positivas
    Idy = Math.abs(Idy);
    Idx = Math.abs(Idx);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //Redo all players
    dibujarLocales();
    dibujarVisitantes();
    //Hacer la cancha
    drawGoalArea('left');
    drawGoalArea('right');
    drawCenterLineAndCircle();
    //recuperar el balon por el equipo local
    balonLocal = recuperarBalonLocal(pecosa_x,pecosa_y);
    if (balonLocal == true){
      mensaje.innerHTML = fraseAleatoria();
      return;
    }
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
    }else if(pecosa_y >= canvas.height){
        mensaje.innerHTML = "Saque de Banda!!!";
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
        // se incremente la posicion horizontal y vertical
        pecosa_x -= Idx; 
        pecosa_y -= Idy;
        saquedeBandaAbajo();
    }else if(pecosa_y <= 0 && pecosa_x >= 0){
        mensaje.innerHTML = "Saque de Banda Lateral"
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
        // se incremente la posicion horizontal y vertical
        pecosa_x -= Idx; 
        pecosa_y += Idy;
        saquedeBanda()
    }else if(0 < pecosa_y < canvas.height){
        mensaje.innerText = "posicion del balon en x "+pecosa_x+" posicion del balon en y "+pecosa_y;
        mensaje.style.backgroundColor = "";
        // se incremente la posicion horizontal y vertical
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
        pecosa_x -= Idx;
        pecosa_y += Idy;
        requestAnimationFrame(saquedeBanda);
    }else if(pecosa_x <= 0){
        mensaje.innerHTML = "Saque de meta";
        //Reposicionar ubicacion al arquero
        loc_x = 20;
        loc_y = 21;
        // limpiar bola
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(pecosa_x,pecosa_y,6,0,2*Math.PI);
        ctx.fill();
        dibujarPelotaSaque(25,100); 
    }else if(pecosa_x >= canvas.width){
        mensaje.innerHTML = "Saque de meta";
        balon_x.value = 575;
        balon_y.value = canvas.height/2;
        //Reposicionar ubicacion al arquero
        loc_x = 20;
        loc_y = 21;
        //saque de Meta
        saquedeMeta();
    }
}

function saquedeBandaAbajo(){
    //Coger los valores de la pendiente
    Idy = parseFloat(dyEl.value) || 0;
    Idx = parseFloat(dxEl.value) || 0;
    //como las pendientes puden ser negativas o positivas
    Idy = Math.abs(Idy);
    Idx = Math.abs(Idx);
    //limpiar el canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //Redo all players
    dibujarLocales();
    dibujarVisitantes();
    //Hacer la cancha
    drawGoalArea('left');
    drawGoalArea('right');
    drawCenterLineAndCircle();
    //recuperar el balon por el equipo local
    balonLocal = recuperarBalonLocal(pecosa_x,pecosa_y);
    if (balonLocal == true){
      mensaje.innerHTML = fraseAleatoria();
      return;
    } 
    //se hace la bola moviendose
    ctx.beginPath();
    ctx.arc(pecosa_x,pecosa_y,5,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill(); 
    // Distancia al gol
    gol_delta_x = 10 - pecosa_x;
    gol_delta_y = 100 - pecosa_y;
    pecosa_y = Number(pecosa_y);
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
    }else if(0 > pecosa_x || pecosa_x > canvas.width){
        mensaje.innerHTML += "Pa' donde vas?? <br>";
        //mensaje.innerText += "posicion del balon en x "+pecosa_x+" posicion del balon en y "+pecosa_y;
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
        //Reposicionar ubicacion al arquero
        loc_x = 20;
        loc_y = 21;
        //saque de meta
        saquedeMeta();
    }else if (pecosa_y >= canvas.height){
        mensaje.innerHTML += "Se salio de la cancha <br>";
        mensaje.innerText += "posicion del balon en x "+pecosa_x+" posicion del balon en y "+pecosa_y;
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
        pecosa_x -= Idx;
        pecosa_y -= Idy;
        saquedeBandaAbajo();
    }else if (pecosa_y < 0){
        mensaje.innerHTML += "En la Juega que es saca de banda!!! <br>";
        mensaje.innerText += "posicion del balon en x "+pecosa_x+" posicion del balon en y "+pecosa_y;
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
        // se incremente la posicion horizontal y vertical
        //pecosa_x -= Idx; 
        //pecosa_y -= Idy;
        //Reposicionar ubicacion al arquero
        //loc_x = 20;
        //loc_y = 21;
        saquedeBanda();
    }else if(pecosa_y < canvas.height){
        mensaje.innerHTML += "Mucha atencion a ese pase <br>";
        mensaje.innerHTML = "coordenada del balon en x "+pecosa_x+" <br> coordenada del balon en y "+pecosa_y;
        mensaje.style.backgroundColor = "";
        // se incremente la posicion horizontal y vertical
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
        pecosa_x -= Idx;
        pecosa_y -= Idy;
        requestAnimationFrame(saquedeBandaAbajo);
    }else{ 
        mensaje.innerHTML = "Vaya que le <br>";
        mensaje.innerText += "posicion del balon en x "+pecosa_x+" posicion del balon en y "+pecosa_y;
        balon_x.value = pecosa_x;
        balon_y.value = canvas.height - pecosa_y;
        balon_y.readOnly = false;
        balon_x.readOnly = false;
        //pecosa_x -= Idx;
        //pecosa_y -= Idy;
        //saquedeBandaAbajo();    
    }
}