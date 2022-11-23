function start(){
    document.getElementById("sidebarProject").style.backgroundColor = "#50527d";
    indexPage = false;
    const project = projectG();
    recent(project.title, project.text, project.img);
    randomProject();
}

function searchStuff(){
    let input = document.getElementById('searchBar').value;
    input = input.toLowerCase();
    let listItems = document.getElementsByClassName('searchItems');

    for (let i = 0; i < listItems.length; i++) {
        if (!listItems[i].innerHTML.toLowerCase().includes(input)) {
            listItems[i].style.display = "none";
        }
        else {
            listItems[i].style.display = "list-item";
        }
    }
}

function randomProject(){
    let number = Math.floor(Math.random() * 7);
    switch (number){
        case 0:
            projectA();
            break;
        case 1:
            projectB();
            break;
        case 2:
            projectC();
            break;
        case 3:
            projectD();
            break;
        case 4:
            projectE();
            break;
        case 5:
            projectF();
            break;
        case 6:
            projectG();
            break;
        default:
            break;
    }
}

function recent(title, text, img){
    document.getElementById("titleRecent").style.fontSize = "40px";
    document.getElementById("textRecent").style.fontSize = "30px";
    document.getElementById("titleRecent").innerHTML = title;
    document.getElementById("textRecent").innerHTML = text;
    document.getElementById("imgRecent").src = img;
}

function change(title, text, img){
    document.getElementById("imgProject").style.width = "40%";
    document.getElementById("titleProject").innerHTML = title;
    document.getElementById("textProject").innerHTML = text;
    document.getElementById("imgProject").src = img;
}

function projectG(){
    const title = document.getElementById("projectG").innerHTML;
    const text = "";
    const img = "../images/template/Bongo-Cat-png-3.png";
    change(title, text, img);
    return {title, text, img};
}

function projectF(){
    const title = document.getElementById("projectF").innerHTML;
    const text = "";
    const img = "";
    change(title, text, img);
    return {title, text, img};
}

function projectE(){
    const title = document.getElementById("projectE").innerHTML;
    const text = "";
    const img = "";
    change(title, text, img);
    return {title, text, img};
}

function projectD(){
    const title = document.getElementById("projectD").innerHTML;
    const text = "";
    const img = "";
    change(title, text, img);
    return {title, text, img};
}

function projectC(){
    const title = document.getElementById("projectC").innerHTML;
    const text = "";
    const img = "";
    change(title, text, img);
    return {title, text, img};
}

function projectB(){
    const title = document.getElementById("projectB").innerHTML;
    const text = "";
    const img = "../images/projects/appformat/appformat.png";
    change(title, text, img);
    return {title, text, img};
}

function projectA(){
    const title = document.getElementById("projectA").innerHTML;
    const text = "When I started this project, " +
        "somewhere in the first year of my education (Software development) in my spare time, " +
        "I thought it would be fun to learn some javascript. " +
        "So my idea was to make a game that was playable on the browser, " +
        "but I wanted my game to look nice with art. " +
        "So of course I tried to do that with pixelart. " +
        "It worked fine and everything fitted but it took way to long to do because I'm not a great artist. " +
        "After a while I stopped having faith in it and stopped working on it.";
    const img = "../images/projects/javaWebgame/pixelMap.png";
    change(title, text, img);
    return {title, text, img};
}

