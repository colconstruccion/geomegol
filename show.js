const golesAudio =  ['golA1.mp3','golA2.mp3','golRincon.wav','golTren.mp3','golTino.mp3'];
var golAudio = new Audio("audio/"+golesAudio[marcador1.value]); 

function coloresTablero() {
 return "#"+Math.random().toString(16).slice(-6);
}


function flashColors(seconds){
    let count = 0;
    const intervalId = setInterval(()=>{
        mensaje.style.background = coloresTablero();
        mensaje.style.color = "white";
        count++;

        if(count == 4){
            clearInterval(intervalId);
        }
    }, seconds * 1000);

    //Cantar el gol
    golAudio.play();
    //let duration = golRincon.duration;
    //console.log(duration);
}
