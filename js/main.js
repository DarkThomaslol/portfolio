let sidebarBool = true;
let indexPage;
function sidebarChange(){
    if(sidebarBool){
        sidebarOpen()
    }
    else {
        sidebarClose()
    }
}

function sidebarOpen(){
    sidebarBool = !sidebarBool;
    document.querySelector("nav").style.width = "220px";
    if(indexPage){
        document.getElementById("sidebarChangerImg").src = "images/main/icons/xmark-solid.png"
    }
    else{
        document.getElementById("sidebarChangerImg").src = "../images/main/icons/xmark-solid.png"
    }
}

function sidebarClose(){
    sidebarBool = !sidebarBool;
    document.querySelector("nav").style.width = "55px";
    if(indexPage){
        document.getElementById("sidebarChangerImg").src = "images/main/icons/bars-solid.png"
    }
    else{
        document.getElementById("sidebarChangerImg").src = "../images/main/icons/bars-solid.png"
    }
}