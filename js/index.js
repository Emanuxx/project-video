const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $retroceder = document.querySelector('#retroceder');
const $avanzar = document.querySelector('#avanzar');
const $progress = document.querySelector('#progress');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$retroceder.addEventListener('click', handleRetroceder);
$avanzar.addEventListener('click', handleAvanzar);
$video.addEventListener('loadedmetadata', handleLoad);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);

function handlePlay(){
    $video.play();
    // De esta forma estamos poniendo que cuando demos clic en Play hacemos que $play este oculto ya que se aplica el "hidden" y $pause se muestra ya que tiene "hidden" en false
    $play.hidden = true;
    $pause.hidden = false;
    console.log("Diste click en Play")
}

function handlePause(){
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    console.log("Diste click en Pause")
}

function handleRetroceder(){
    // $video.currentTime = $video.currentTime - 10;
    $video.currentTime -= 10;
    console.log("Retrocediste 10 segundos", $video.currentTime);
}

function handleAvanzar(){
    // $video.currentTime = $video.currentTime + 10;
    $video.currentTime += 10;
    console.log("Adelantaste 10 segundos", $video.currentTime);
}

function handleLoad(){
    $progress.max = $video.duration;
    console.log("Ha cargado el video", $video.duration);
}

function handleTimeUpdate(){    
    $progress.value = $video.currentTime;
}

function handleInput(){
    $video.currentTime = $progress.value;
}