function start(){
    document.getElementById("sidebarProject").style.backgroundColor = "#50527d";
    indexPage = false;
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