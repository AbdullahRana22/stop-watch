let [seconds,minutes,hours] = [0,0,0];
let displaytime = document.getElementById("distime");
let timer = null;

function stopwatch(){
    seconds++;
if(seconds===60){
    seconds = 0;
    minutes++;
   if(minutes == 60){
    minutes = 0;
    hours++;
   }
}
 let ho = hours < 10 ? "0" + hours : hours ;
 let mi = minutes < 10 ? "0" + minutes : minutes;
 let se = seconds < 10 ? "0" + seconds : seconds;

 displaytime.innerHTML = ho +":"+ mi+":"+ se;
}

function startwatch () {
    if(timer!== null)
    {
        clearInterval(timer);
    }
   timer = setInterval(stopwatch,1000);
}

  function stop(){
    clearInterval(timer);
  }
  function Reset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displaytime.innerHTML = "00:00:00";
  }