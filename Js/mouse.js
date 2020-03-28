var leftPosotion = 0;
var imageTop = 0;
var imageLeft = 0;
var scrollWidth = 0;
var ingredientsLeft = -80;
var ingredientOpacity = 0;
var directions = [0, 0];
var isUp = true;
var bowlDistance =  -50;
var bowlDistanceH =  0;
var jalapinoDirection = 0;
var onionDirection = 0;
var tomatoDirection = 0;
var result = 75;
var resultDown = 15;
var textLeft = 0;
// console.log(scrollDown);

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
};

window.addEventListener("wheel", function(event){
    if (event.wheelDeltaX == 0) {
        var directionY = event.deltaY;
        if (directionY > 0) {
            directions[0]++;
            isUp = true;
            console.log(directions[0]);    
        }else{
            if (directions[0]>0) {
                directions[0]--;
                isUp = false;
                console.log(directions[0]);       
            }
        }
        scrollMoving();
    }if (event.wheelDeltaY == 0) {
        var directionX = event.deltaX;
        if (directionX > 0) {
            directions[0]++;
            isUp = true;
            console.log(directions[0]);    
        }else{
            if (directions[0]>0) {
                directions[0]--;
                isUp = false;
                console.log(directions[0]);       
            }   
        }
        scrollMoving();
    }
});

//move the position of the scroll and move the animation
function scrollMoving(){
    var progressbar= (directions[0]/240)*100;
    document.getElementById("progressBar").style.width = progressbar+"%";
    //presentation
    if (directions[0] >10 && directions[0] < 50) {
        if (isUp) {
            movePicture(imageTop-=2);  
            moveText(textLeft+=2); 
            ingredientsOpacity(ingredientOpacity+=0.05);
        }else{
            movePicture(imageTop+=2);   
            moveText(textLeft-=2); 
            ingredientsOpacity(ingredientOpacity-=0.05);
        }
        //bowl animation
    } if (directions[0] > 60 && directions[0] < 110) {
        if (isUp) {
            moveBowl(bowlDistance+=1);
        }else{
            moveBowl(bowlDistance-=1);
        }
        //vegetables animation jalapino
    } if (directions[0] > 100 && directions[0] < 110) {
        if (isUp) {
            moveJalapino(jalapinoDirection+=10);
        }else{
            moveJalapino(jalapinoDirection-=10);
        }
        // animation onion
    } if (directions[0] > 105 && directions[0] < 115) {
        if (isUp) {
            moveOnion(onionDirection+=10);
        }else{
            moveOnion(onionDirection-=10);
        }
        // animation tomato
    } if (directions[0] > 110 && directions[0] < 128) {
        if (isUp) {
            moveTomato(tomatoDirection+=10);
        }else{
            moveTomato(tomatoDirection-=10);
        }
        // animmation bowl out
    } if (directions[0] > 150 && directions[0] < 190) {
        if (isUp) {
            moveBowlOut(bowlDistanceH-=2);
            moveResult(result-=2);
        }else{
            moveBowlOut(bowlDistanceH+=2);
            moveResult(result+=2);
        }
    }
    // MOve picture to the right
    if (directions[0]==190) {
        if (isUp) {
            movePictureLeft(60);
        }else{
            movePictureLeft(0);
        }
    }
    // move picture to down
    if (directions[0] > 190 && directions[0] < 240) {
        if (isUp) {
            moveResultDown(resultDown+=2);
            movePicture(imageTop+=2);  
        }else{
            moveResultDown(resultDown-=2);
            movePicture(imageTop-=2);  
        }
    }

    //text changing
    if (directions[0] > 0 && directions[0] < 50) {
        document.getElementById("title").innerHTML=""
    }
    if (directions[0] > 50 && directions[0] < 120) {
        document.getElementById("title").innerHTML="<h5>Ingredients</h5>"
    }
    if (directions[0] > 120 && directions[0] < 170) {
        document.getElementById("title").innerHTML="<h5>Process</h5>"
    }
    if (directions[0] > 170 && directions[0] < 210) {
        document.getElementById("title").innerHTML="<h5>Result</h5>"
    }
    if (directions[0] > 210) {
        document.getElementById("title").innerHTML="<h5>Contact me</h5>"
    }
}

//function that move the pictures
function movePicture(imageTop){
    // console.log(imageTop);
    document.getElementById("containerPicture").style.top = (imageTop)+"vh";
    // console.log(document.getElementById("containerPicture").style.top);
}

function moveText(textLeft){
    document.getElementById("textPresentation").style.left = (textLeft)+"vw";
}

function movePictureLeft(imageLeft){
    document.getElementById("containerPicture").style.left = (imageLeft)+"vw";
}
//move the bowwl to the top
function moveBowl(bowlDistance){
    document.getElementById("bowl").style.bottom = (bowlDistance)+"vh";
}
// function that move the jalapino
function moveJalapino(jalapinoDirection){
    document.getElementById("jalapino").style.top = (jalapinoDirection)+"vh";
    document.getElementById("jalapino").style.left = (jalapinoDirection+5)+"vh";
}
// function that move onion
function moveOnion(onionDirection){
    document.getElementById("onion").style.top = (onionDirection+5)+"vh";
}
// function that move tomato
function moveTomato(tomatoDirection){
    document.getElementById("tomato").style.top = (tomatoDirection)+"vh";
    document.getElementById("tomato").style.right = (tomatoDirection+5)+"vh";
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

function moveResult(result){
    document.getElementById("result").style.left = (result)+"vw";
}

function moveResultDown(resultDown){
    document.getElementById("result").style.top = (resultDown)+"vh";
}
