var leftPosotion = 0;
var imageTop = -75;
var imageLeft = 0;
var scrollWidth = 0;
var ingredientsLeft = -80;
var ingredientOpacity = 0;
var directions = 0;
var isUp = true;
var bowlDistance =  -38;
var bowlDistanceH =  0;
var jalapinoDirection = 10;
var onionDirection = 10;
var tomatoDirection = 10;
var jalapinoLeft = 0;
var tomatoRight = 0;
var result = 100;
var resultDown = 15;
var textLeft = 5;
var processPosition = -50;
var processTop= 72;
var processOpacy = 0;
var estimate = 100;
var nutrimental = 100;
var estimateOut = 0;
var nutrimentalOut = 0;
var contactOpacy= 0;
var page = 1;
var progress = [['Analysing & requirements', 'First of all, the <b>requirements</b> have to be <b>analysed</b> to make an better plan. <br><i>Divide and conquer</i>'],
                ['Documentation', 'Also, having an appropriate witness of our work is always a good way to keep our progress organized.'],
                ['Coding & good practice', 'To make a undertable code, it is necessary <b>good developoment practice'],
                ['Testing', 'A Chef always says "How you know your food is good if you do not taste it"']];

// the first function is loading
window.onload = function(){
    // var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene, {
    //     relativeInput:true ,
    //     hoverOnly:true
    // });
    scrollDown = $(document).width();
    this.scrollWidth = $('body').width();
    this.leftPosotion = document.getElementById("scene").offsetLeft;
    document.getElementById("ingredients").style.opacity = "0";
    document.getElementById("process").style.top = "72vh";
    document.getElementById("process").style.opacity = "0";
    document.getElementById("bowl").style.opacity = "0";
    document.getElementById("estimate").style.top = "100vh";
    document.getElementById("nutrimental").style.top = "100vh";
    document.getElementById("contact").style.opacity = "0";
    // $('[data-toggle="tooltip"]').tooltip();  
};

// event to get the wheel moving
window.addEventListener("wheel", function(event){
    console.log("deltaY:"+event.delta);
    console.log("WheelDelta:"+event.wheelDelta);
    var WheelDelta = Math.abs(event.wheelDelta);
    if (event.wheelDeltaX == 0) {   //for up and down
        var directionY = event.deltaY;
        console.log("Delta: "+directionY);    
        if (directionY > 0) {
            if (directions<4000) {
                if(WheelDelta==120){
                    directions+=100;
                }else{
                    directions+=20;
                } 
                isUp = true; 
            }
        }else{
            if (directions>0) { 
                if(WheelDelta==120){
                    directions-=100;
                }else{
                    directions-=20;
                }  
                isUp = false;
                // console.log(directions);       
            }
        }
        console.log("Distance: "+directions); 
        scrollMoving();
    }if (event.wheelDeltaY == 0) {  //for left and right
        var directionX = event.deltaX;
        console.log("Delta: "+directionX);    
        if (directionX > 0) {
            if(WheelDelta==120){
                directions+=100;
            }else{
                directions+=20;
            }  
            isUp = true;
        }else{
            if (directions>0) {
                if(WheelDelta==120){
                    directions-=100;
                }else{
                    directions-=20;
                }  
                isUp = false;
            }   
        }
        console.log("Distance: "+directions);   
        scrollMoving();
    }
});

//move the position of the scroll and move the animation
function scrollMoving(){
    // console.log(directions);
    var progressbar= (directions/4000)*100;
    document.getElementById("progressBar").style.width = progressbar+"%";
    //presentation
    if (directions > 0 && directions < 500) {
        document.getElementById("title").innerHTML="";
    }
    if (directions ==500) {
        document.getElementById("title").innerHTML="<h5>Ingredients</h5>"
        if (isUp) {
            firstMovingGoing();
            ingredientsIndex(true);
        }else{
            firstMovingBack();
            ingredientsIndex(false);
        }
    } if (directions == 1500) {
        ingredientsIndex(false);
        document.getElementById("title").innerHTML="<h5>Process</h5>"
        if (isUp) {
            secondMovingGoing();
            ingredientsIndex(false);
        }else{
            secondMovingBack();
            ingredientsIndex(true);
        }
    } if (directions == 2500) {
        document.getElementById("title").innerHTML="<h5>Result</h5>"
        if (isUp) {
            thirdMovingGoing();
        }else{
            thirdMovingBack();
        }
    }
    if (directions == 3500) {
        document.getElementById("title").innerHTML="<h5>Contact me</h5>"
        if (isUp) {
            fourthMovingGoing();
        }else{
            fourthMovingBack();
        }
    }
}

//function that move the pictures
function movePicture(imageTop){
    // console.log(imageTop);
    document.getElementById("containerPicture").style.top = (imageTop)+"vh";
    // console.log(document.getElementById("containerPicture").style.top);
}

function moveText(textLeft){
    document.getElementById("textPresentation").style.bottom = (textLeft)+"vw";
}

function movePictureLeft(imageLeft){
    document.getElementById("containerPicture").style.left = (imageLeft)+"vw";
}
//move the bowwl to the top
function moveBowl(bowlDistance, bowlOpacity){
    document.getElementById("bowl").style.bottom = (bowlDistance)+"vh";
    document.getElementById("bowl").style.opacity = (bowlOpacity)+"";
}

function moveProcess(processPosition, processOpacy){
    document.getElementById("process").style.left = processPosition+"vw";
    document.getElementById("process").style.opacity = processOpacy;
}
// function that move the jalapino
function moveJalapino(jalapinoDirection, jalapinoLeft){
    document.getElementById("jalapino").style.top = (jalapinoDirection)+"vh";
    document.getElementById("jalapino").style.left = (jalapinoLeft)+"vh";
}
// function that move onion
function moveOnion(onionDirection){
    document.getElementById("onion").style.top = (onionDirection)+"vh";
}
// function that move tomato
function moveTomato(tomatoDirection, tomatoRight){
    document.getElementById("tomato").style.top = (tomatoDirection)+"vh";
    document.getElementById("tomato").style.right = (tomatoRight)+"vh";
}

// function that move the ingrediets div
function ingredients(ingredientsLeft){
    document.getElementById("ingredients").style.left = (ingredientsLeft)+"vw";
}

// function to change the opacity
function ingredientsOpacity(ingredients){
    document.getElementById("ingredients").style.opacity = ingredients;
}

function moveBowlOut(bowlDistance){
    document.getElementById("bowl").style.left = (bowlDistance)+"vw";
}

function moveProcessOut(processTop){
    document.getElementById("process").style.top = processTop+"vh";
}

function moveEstimate(estimate){
    document.getElementById("estimate").style.top = estimate+"vh";
}

function moveEstimateOut(estimateOut){
    document.getElementById("estimate").style.marginLeft = estimateOut+"vw";
}

function moveNutrimental(nutrimental){
    document.getElementById("nutrimental").style.top = nutrimental+"vh";
}

function moveNutrimentalOut(nutrimentalOut){
    document.getElementById("nutrimental").style.marginLeft = nutrimentalOut+"vw";
}

function moveResult(result){
    document.getElementById("result").style.left = (result)+"vw";
}

function moveResultDown(resultDown){
    document.getElementById("result").style.top = (resultDown)+"vh";
}
 
function appearContact(contactOpacy){
    document.getElementById("contact").style.opacity = contactOpacy;
}

function ingredientsIndex(enter){
    if (enter) {
        document.getElementById("ingredients").style.zIndex = 1;
    }else{
        document.getElementById("ingredients").style.zIndex = -1;
    }
}


// functions for every page
function firstMovingGoing(){
    var idMove = setInterval(frame, 20);
    var pos = 0;
    function frame(){
        if (pos==40) {
            clearInterval(idMove);
        } else{
            pos++;
            moveText(textLeft+=2); 
            ingredientsOpacity(ingredientOpacity+=0.025);
        }
    }
}

function firstMovingBack(){
    var idMove = setInterval(frame, 20);
    var pos = 40;
    function frame(){
        if (pos==0) {
            clearInterval(idMove);
        } else{
            pos--;
            moveText(textLeft-=2); 
            ingredientsOpacity(ingredientOpacity-=0.025);
        }
    }
}

function secondMovingGoing(){
    var idMove = setInterval(frame, 20);
    var pos = 0;
    function frame(){
        if (pos==50) {
            clearInterval(idMove);
        } else {
            pos++;
            moveBowl(bowlDistance+=1, processOpacy+=0.02);
            moveProcess(processPosition+=1, processOpacy+=0.02)
            if (pos>=30 && pos<=40) {
                moveJalapino(jalapinoDirection+=10, jalapinoLeft+=10);
            }
            if (pos>=35 && pos<=45) {
                moveOnion(onionDirection+=10);
            }
            if (pos>=40 && pos<=50) {
                moveTomato(tomatoDirection+=10, tomatoRight+=10);
            }
        }
    }
}

function secondMovingBack(){
    var idMove = setInterval(frame, 20);
    var pos = 50;
    function frame(){
        if (pos==0) {
            clearInterval(idMove);
        } else {
            pos--;
            moveBowl(bowlDistance-=1, processOpacy-=0.02);
            moveProcess(processPosition-=1, processOpacy-=0.02)
            if (pos>=10 && pos<=20) {
                moveJalapino(jalapinoDirection-=10, jalapinoLeft-=10);
            }
            if (pos>=5 && pos<=15) {
                moveOnion(onionDirection-=10);
            }
            if (pos>=0 && pos<=10) {
                moveTomato(tomatoDirection-=10, tomatoRight-=10);
            }
        }
    }
}

function thirdMovingGoing(){
    var idMove = setInterval(frame, 20);
    var pos= 0;
    function frame(){
        if (pos==40) {
            clearInterval(idMove);
        }else{
            pos++;
            moveBowlOut(bowlDistanceH-=2);
            moveProcessOut(processTop-=3)
            moveResult(result-=2.6);
            moveEstimate(estimate-=2);
            moveNutrimental(nutrimental-=2);
            movePictureLeft(60);
        }
    }
}

function thirdMovingBack(){
    var idMove = setInterval(frame, 20);
    var pos= 40;
    function frame(){
        if (pos==0) {
            clearInterval(idMove);
        }else{
            pos--;
            moveBowlOut(bowlDistanceH+=2);
            moveProcessOut(processTop+=3)
            moveResult(result+=2.6);
            moveEstimate(estimate+=2);
            moveNutrimental(nutrimental+=2);
            movePictureLeft(0);
        }
    }
}

function fourthMovingGoing(){
    var idMove = setInterval(frame, 20);
    var pos=0;
    function frame(){
        if (pos==50) {
            clearInterval(idMove);
        }else{
            pos++;
            moveResultDown(resultDown+=2);
            movePicture(imageTop+=2);  
            moveEstimateOut(estimateOut+=2);
            moveNutrimentalOut(nutrimentalOut+=2);
            appearContact(contactOpacy+=0.02)
        }
    }
}

function fourthMovingBack(){
    var idMove = setInterval(frame, 20);
    var pos=50;
    function frame(){
        if (pos==0) {
            clearInterval(idMove);
        }else{
            pos--;
            moveResultDown(resultDown-=2);
            movePicture(imageTop-=2);  
            moveEstimateOut(estimateOut-=2);
            moveNutrimentalOut(nutrimentalOut-=2);
            appearContact(contactOpacy-=0.02)
        }
    }
}

// function for hovers in ingredientes
function skillsClick(){
    var idMove = setInterval(frame, 20);
    var pos = 10;
    var titleOpacy = 1;
    var codeOpacy = 0;
    document.getElementById("jalapino").style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 4px 8px 0px";
    function frame(){
        if (pos==0) {
            clearInterval(idMove);
        }else{
            pos--;
            titleOpacy-=0.1;
            codeOpacy+=0.1;
            document.getElementById("jalapino").style.top = pos+"vh";
            document.getElementById("skillsTitle").style.opacity = titleOpacy;
            document.getElementById("coding").style.opacity = codeOpacy;
        }
    }
}

function skillsClose(){
    var idMove = setInterval(frame, 20);
    var pos = 0;
    var titleOpacy = 0;
    var codeOpacy = 1;
    document.getElementById("jalapino").style.boxShadow = "none";
    function frame(){
        if (pos==10) {
            clearInterval(idMove);
        }else{
            pos++;
            titleOpacy+=0.1;
            codeOpacy-=0.1;
            document.getElementById("jalapino").style.top = pos+"vh";
            document.getElementById("skillsTitle").style.opacity = titleOpacy;
            document.getElementById("coding").style.opacity = codeOpacy;
        }
    }
}

function experienceClick(){
    var idMove = setInterval(frame, 20);
    var pos = 10;
    var titleOpacy = 1;
    var experienceTop = 45;
    var experienceOpacity = 0;
    document.getElementById("onion").style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 4px 8px 0px";
    function frame(){
        if (pos==0) {
            clearInterval(idMove);
        } else{
            pos--;
            experienceTop-=4.5;
            titleOpacy-=0.1;
            experienceOpacity+=0.1;
            document.getElementById("onion").style.top = pos+"vh";
            document.getElementById("experienceTitle").style.opacity = titleOpacy;
            document.getElementById("experience").style.top = experienceTop+"vh";
            document.getElementById("experience").style.opacity = experienceOpacity;
        }
    }
}

function experienceClose(){
    var idMove = setInterval(frame, 20);
    var pos = 0;
    var titleOpacy = 0;
    var experienceTop = 0;
    var experienceOpacity = 1;
    document.getElementById("onion").style.boxShadow = "none";
    function frame(){
        if (pos==10) {
            clearInterval(idMove);
        } else{
            pos++;
            experienceTop+=4.5;
            titleOpacy+=0.1;
            experienceOpacity-=0.1;
            document.getElementById("onion").style.top = pos+"vh";
            document.getElementById("experienceTitle").style.opacity = titleOpacy;
            document.getElementById("experience").style.top = experienceTop+"vh";
            document.getElementById("experience").style.opacity = experienceOpacity;
        }
    }
}

function uxClick(){
    var idMove = setInterval(frame, 20);
    var pos = 10;
    var titleOpacy = 1;
    var uxleft = 40;
    var uxOpacity = 0;
    document.getElementById("tomato").style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 4px 8px 0px";
    function frame(){
        if (pos==0) {
            clearInterval(idMove);
        } else{
            pos--;
            uxleft-=4;
            titleOpacy-=0.1;
            uxOpacity+=0.1;
            document.getElementById("tomato").style.top = pos+"vh";
            document.getElementById("uxTitle").style.opacity = titleOpacy;
            document.getElementById("ux").style.left = uxleft+"vw";
            document.getElementById("ux").style.opacity = uxOpacity;
        }
    }
}

function uxClose(){
    var idMove = setInterval(frame, 20);
    var pos = 0;
    var titleOpacy = 0;
    var uxleft = 0;
    var uxOpacity = 1;
    document.getElementById("tomato").style.boxShadow = "none";
    function frame(){
        if (pos==10) {
            clearInterval(idMove);
        } else{
            pos++;
            uxleft+=4;
            titleOpacy+=0.1;
            uxOpacity-=0.1;
            document.getElementById("tomato").style.top = pos+"vh";
            document.getElementById("uxTitle").style.opacity = titleOpacy;
            document.getElementById("ux").style.left = uxleft+"vw";
            document.getElementById("ux").style.opacity = uxOpacity;
        }
    }
}