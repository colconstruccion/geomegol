// Que version cargar
const LEVEL_KEY = "game_level";

function getLevel() {
  const n = Number(localStorage.getItem(LEVEL_KEY));
  // Check that n is a finite number AND between 1 and 10
  return Number.isFinite(n) && n >= 1 && n <= 6 ? n : 1;
}

function setLevel(n){
    localStorage.setItem(LEVEL_KEY, String(n));
}

document.addEventListener('DOMContentLoaded',function(){
    // escribe la version correcta del script
    const level = getLevel();
    const gameScript = document.getElementById("gameVersion");
    gameScript.src = `geomegol_v4${level}.js?v=${Date.now()}`;

    // mostrar el boton para el siguiente nivel
    const btnLevel =  document.getElementById('upLevel');
    if (btnLevel){
        btnLevel.addEventListener("click",function(){
            setLevel(getLevel()+1);
            location.reload();
        });
    }
});

window.showNextLevelButton = function showNextLevelButton() {
  const btnLevel = document.getElementById('upLevel');
  if (btnLevel) btnLevel.style.display = 'inline-block';
  btnLevel.innerText = "Nivel "+ getLevel();
};



