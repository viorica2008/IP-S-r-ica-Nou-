function mobile () {
    var x = document.getElementsByTagName("navbar") [0];
    if (x.className === "nav"){
        x.className ="nav mobile";
    } else {
        x.className = "nav";
    }
}