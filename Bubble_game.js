// jispe click karoge wo element par event raise ho jayega, aur event listener naa milne par
// event element ke parent par listener dhundhega, waha bhi naa milne par event element ke parent par
// listener dhundhega, waha bhi naa milne par event parent ke parent ke parent par listener dhundhega

function makeBubble () {
    var clutter = "";

for (var i=1; i<=119; i++) {
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML = clutter;

}

var timer = 60;
function runTimer(){
   var timerint =  setInterval(function(){
    if (timer>=0) {
        document.querySelector("#Timer").textContent = timer;
        timer--;
    }
    else {
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h2> Game Over ! </h2>` ;
    }
    },1000)
}

var hitrn = 0;
function getHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hit").textContent = hitrn;
}

var score=0;
function increaseScore() {
    score+= 10;
    document.querySelector("#Score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", 
    function(dets){
    var clickednum = Number(dets.target.textContent);
    if (clickednum == hitrn) {
        increaseScore();
        makeBubble();
        getHit();
    }
})

makeBubble();
runTimer();
getHit();
