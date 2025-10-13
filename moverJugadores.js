
    let delta_x = Number(obj_x) - Number(prevCoor_x);
    let delta_y = Number(obj_y) - Number(prevCoor_y);
    delta_x = Math.abs(delta_x);
    delta_y = Math.abs(delta_y);
    ctx.beginPath();
          ctx.arc(prevCoor_x,tempCoor_y,6,0,2*Math.PI);
          ctx.fillStyle = 'white';
          ctx.fill();
          ctx.strokeStyle = 'white';
          ctx.stroke();
          
        let step_x = Number(delta_x/10);
        let step_y = Number(delta_y/10);
        prevCoor_x = Number(prevCoor_x) + Number(step_x);
        prevCoor_y = Number(prevCoor_y) + Number(step_y);
        console.log("se esta acercando "+isMoving+"delta_x"+step_x+" delta_y "+step_y);
        tempCoor_y = canvas.height - prevCoor_y; //se resta de la altura del campo de juego
        //dibujar jugador local
          ctx.beginPath();
          ctx.arc(prevCoor_x,tempCoor_y,5,0,2*Math.PI);
          ctx.strokeStyle = 'black';
          ctx.stroke();
          ctx.fillStyle = (index_y < players.length/2) ? 'red': 'green';
          //ctx.fillStyle = 'red';
          ctx.fill();
          drawGoalArea('left');
          drawGoalArea('right');
          dibujarLocales();
          dibujarVisitantes();
          drawCenterLineAndCircle();
        if(delta_x > 5 && delta_y > 5){
          requestAnimationFrame(moverJugador);
        }else{
          ctx.arc(prevCoor_x-step_x,tempCoor_y-step_y,6,0,2*Math.PI);
          ctx.fillStyle = 'white';
          ctx.fill();
          ctx.strokeStyle = 'white';
          ctx.stroke();
          
        }