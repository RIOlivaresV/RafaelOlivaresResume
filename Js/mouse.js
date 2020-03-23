var leftPosotion = 0;
var imageTop = 0;
var scrollWidth = 0;
var ingredientsLeft = -80;
var ingredientOpacity = 0;
var directions = [0, 0];
var isUp = true;
var bowlDistance =  -50;
var jalapinoDirection = 0;
var onionDirection = 0;
var tomatoDirection = 0;
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

    //add the event to the wheel
// window.addEventListener("scroll", function(event){
//     // scrollMoving(event);
//     console.log(window.scrollY);
// });

//move the position of the scroll and move the animation
function scrollMoving(){
    //presentation
    if (directions[0] > 20 && directions[0] < 100) {
        if (isUp) {
            movePicture(imageTop--);   
            ingredientsOpacity(ingredientOpacity+=0.02);
        }else{
            movePicture(imageTop++);   
            ingredientsOpacity(ingredientOpacity-=0.02);
        }
        //bowl animation
    } if (directions[0] > 120 && directions[0] < 170) {
        if (isUp) {
            moveBowl(bowlDistance++);
        }else{
            moveBowl(bowlDistance--);
        }
        //vegetables animation
    } if (directions[0] > 170 && directions[0] < 180) {
        if (isUp) {
            moveJalapino(jalapinoDirection+=10);
        }else{
            moveJalapino(jalapinoDirection-=10);
        }
    } if (directions[0] > 175 && directions[0] < 185) {
        if (isUp) {
            moveOnion(onionDirection+=10);
        }else{
            moveOnion(onionDirection-=10);
        }
    } if (directions[0] > 180 && directions[0] < 198) {
        if (isUp) {
            moveTomato(tomatoDirection+=10);
        }else{
            moveTomato(tomatoDirection-=10);
        }
    }

    //text changing
    if (directions[0] > 0 && directions[0] < 100) {
        document.getElementById("title").innerHTML="<h5>The best recepie for a software developer</h5>"
    }
    if (directions[0] > 100 && directions[0] < 200) {
        document.getElementById("title").innerHTML="<h5>Ingredients</h5>"
    }
    if (directions[0] > 200 && directions[0] < 300) {
        document.getElementById("title").innerHTML="<h5>Process</h5>"
    }
}

//function that move the pictures
function movePicture(imageTop){
    // console.log(imageTop);
    document.getElementById("containerPicture").style.top = (imageTop)+"vh";
    // console.log(document.getElementById("containerPicture").style.top);
}
//move the bowwl to the top
function moveBowl(bowlDistance){
    document.getElementById("bowl").style.bottom = (bowlDistance)+"vh";
}

function moveJalapino(jalapinoDirection){
    document.getElementById("jalapino").style.top = (jalapinoDirection)+"vh";
    document.getElementById("jalapino").style.left = (jalapinoDirection+5)+"vh";
}

function moveOnion(onionDirection){
    document.getElementById("onion").style.top = (onionDirection+5)+"vh";
}

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

