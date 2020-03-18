var scrollTop = 0;
var scrollDown = 0;
var leftPosotion = 0;
// console.log(scrollDown);
window.addEventListener("wheel", function(event){
    scrollMoving(event);
});

function scrollMoving(event){
    if (event.deltaY>0) {
        if (scrollTop<scrollDown) {
            scrollTop+=10;   
            leftPosotion += 10;
        }
    } else{
        if (scrollTop>0) {
            scrollTop-=10;   
            leftPosotion -= 10;
        }
    }
    //  console.log(scrollTop);
    window.scrollTo(scrollTop,0);
    document.getElementById("containerPresentation").style.left = leftPosotion + "px";
}


window.onload = function(){ 
    scrollDown = $(document).width();
    this.leftPosotion = document.getElementById("containerPresentation").offsetLeft;
};