// Que version cargar
const LEVEL_KEY = "game_level";
const MAX_LEVEL = 7;

function getLevel() {
  const n = Number(localStorage.getItem(LEVEL_KEY));
  // Check that n is a finite number AND between 1 and 6
  return Number.isFinite(n) && n >= 1 && n <= MAX_LEVEL ? n : 1;
}

function setLevel(n){
    const clamped = Math.min(Math.max(1,n), MAX_LEVEL);
    localStorage.setItem(LEVEL_KEY, String(clamped));
    return clamped;
}

document.addEventListener('DOMContentLoaded',function(){
    // escribe la version correcta del script
    const level = getLevel();
    const gameScript = document.getElementById("gameVersion");
    
    if (gameScript){
      gameScript.src = `geomegol_v4${level}.js?v=${Date.now()}`;
    }
   

    // mostrar el boton para el siguiente nivel
    const btnLevel =  document.getElementById('upLevel');
    if (btnLevel){
      // crear span para poner el nivel
      const levelLabel = document.createElement("span");
      levelLabel.id = "levelLabel";
      levelLabel.style.marginLeft = "10px";
      levelLabel.textContent = `Nivel actual: ${level}`;

      // poner el span del nivel despues del boton 
      btnLevel.insertAdjacentElement("afterend", levelLabel);
        
        btnLevel.addEventListener("click",function(){
            const next = setLevel(getLevel() + 1);
            if (next === MAX_LEVEL){
              //btnLevel.disabled = true;
              //localStorage.setItem(LEVEL_KEY, 1);
              btnLevel.textContent =  `Re-iniciar Torneo`;          
            }
            marcador1.value = "0";
            marcador2.value = "0";
            location.reload();
        });
    }
});

window.showNextLevelButton = function showNextLevelButton() {
  const btnLevel = document.getElementById('upLevel');
  if (btnLevel){ btnLevel.style.display = 'inline-block';
  const current = getLevel();
  const next = Math.min(current + 1, MAX_LEVEL);
  btnLevel.textContent = (current < MAX_LEVEL) ? `Nivel ${current} -> Siguiente: ${next}`
  : `Nivel ${current} (máximo)`;
  btnLevel.disabled = current >= MAX_LEVEL;
  }
};



