let sidebarBool = true;
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
    document.getElementById("sidebarChanger").value = "\u2716";
    document.getElementById("sidebarChanger").style.paddingLeft = "14px";
    document.querySelector("nav").style.width = "220px";
}

function sidebarClose(){
    sidebarBool = !sidebarBool;
    document.getElementById("sidebarChanger").value = "\u2630";
    document.getElementById("sidebarChanger").style.paddingLeft = "5px";
    document.querySelector("nav").style.width = "55px";
}