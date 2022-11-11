function start(){
    document.getElementById("sidebarProject").style.backgroundColor = "#50527d";
    indexPage = false;
    const project = projectF();
    recent(project.title, project.text);
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

function recent(title, text){
    document.getElementById("titleRecent").innerHTML = title;
    document.getElementById("textRecent").innerHTML = text;
}

function change(title, text){
    document.getElementById("titleProject").innerHTML = title;
    document.getElementById("textProject").innerHTML = text;
}

function projectF(){
    const title = document.getElementById("projectF").innerHTML;
    const text = "text";
    change(title, text);
    return {title, text};
}

function projectE(){
    const title = document.getElementById("projectE").innerHTML;
    const text = "text le le la";
    change(title, text);
    return {title, text};
}

function projectD(){
    const title = document.getElementById("projectD").innerHTML;
    const text = "text le le la";
    change(title, text);
    return {title, text};
}

function projectC(){
    const title = document.getElementById("projectC").innerHTML;
    const text = "text le le la";
    change(title, text);
    return {title, text};
}

function projectB(){
    const title = document.getElementById("projectB").innerHTML;
    const text = "text le le la";
    change(title, text);
    return {title, text};
}

function projectA(){
    const title = document.getElementById("projectA").innerHTML;
    const text = "text le le la";
    change(title, text);
    return {title, text};
}

