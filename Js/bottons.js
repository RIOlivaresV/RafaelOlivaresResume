var rotate = "0";
var step=0;
var isFront=true;

function backProcess(){
    step--;
    if (step>=0) {
        rotateProgress();
        labelProcess();
    }else{
        step=0;
    }
}

function nextProcess(){
    step++;
    if (step<4) {
        rotateProgress();
        labelProcess();
    }else{
        step=3;
    }
}

function labelProcess(){
    if(isFront){
        document.getElementById("step2").innerHTML = "Step "+(step+1)+": "+progress[step][0];
        document.getElementById("description2").innerHTML = progress[step][1];
        document.getElementById("step1").innerHTML ="" ;
        document.getElementById("description1").innerHTML = "";
        isFront=false;
    }else{
        document.getElementById("step1").innerHTML = "Step "+(step+1)+": "+progress[step][0];
        document.getElementById("description1").innerHTML = progress[step][1];
        document.getElementById("step2").innerHTML = "";
        document.getElementById("description2").innerHTML = "";
        isFront=true;
    }
}

function rotateProgress(){
    if(rotate ==0 || rotate == 360){
        document.getElementById("process").style.transform = "rotateY(180deg)";
        opacityEffect();
        rotate = 180;
    }else{
        document.getElementById("process").style.transform = "rotateY(360deg)";
        opacityEffect();
        rotate=360;
    }
    
}

function opacityEffect(){
    var idMove = setInterval(frame, 50);
    var pos = 10;
    var opacityLabel=0;
    document.getElementById("process").style.opacity = "0";
    function frame(){
        if (pos==0) {
            clearInterval(idMove);
        }else{
            pos--;
            opacityLabel+=0.1;
            document.getElementById("process").style.opacity = opacityLabel;
        }
    }
}