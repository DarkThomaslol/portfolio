function start(){
    document.getElementById("sidebarProject").style.backgroundColor = "#50527d";
    indexPage = false;
    const project = projectG();
    recent(project.title, project.text);
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
    let number = Math.floor(Math.random() * 6);
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
        default:
            break;
    }
}

function recent(title, text){
    document.getElementById("titleRecent").innerHTML = title;
    document.getElementById("textRecent").innerHTML = text;
}

function change(title, text, img){
    document.getElementById("titleProject").innerHTML = title;
    document.getElementById("textProject").innerHTML = text;
    document.getElementById("imgProject").src = img;
}

function projectG(){
    const title = document.getElementById("projectG").innerHTML;
    const text = "text";
    const img = "";
    change(title, text, img);
    return {title, text};
}

function projectF(){
    const title = document.getElementById("projectF").innerHTML;
    const text = "text";
    const img = "";
    change(title, text, img);
    return {title, text};
}

function projectE(){
    const title = document.getElementById("projectE").innerHTML;
    const text = "text le le la";
    const img = "";
    change(title, text, img);
    return {title, text};
}

function projectD(){
    const title = document.getElementById("projectD").innerHTML;
    const text = "text le le la";
    const img = "";
    change(title, text, img);
    return {title, text};
}

function projectC(){
    const title = document.getElementById("projectC").innerHTML;
    const text = "text le le la";
    const img = "";
    change(title, text, img);
    return {title, text};
}

function projectB(){
    const title = document.getElementById("projectB").innerHTML;
    const text = "text le le la";
    const img = "";
    change(title, text, img);
    return {title, text};
}

function projectA(){
    const title = document.getElementById("projectA").innerHTML;
    const text = "text le le la";
    const img = "";
    change(title, text, img);
    return {title, text};
}

