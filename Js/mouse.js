var scrollTop = 0;
var scrollDown = screen.width;
window.addEventListener("wheel", function(event){
    // console.log(event.deltaY);
    if (event.deltaY>0) {
        if (scrollTop<scrollDown) {
            scrollTop+=10;   
        }
    } else{
        if (scrollTop>0) {
            scrollTop-=10;   
        }
    }
    console.log(scrollTop);
    window.scrollTo(scrollTop,0);
});

