function hackCity(cityName){
    var counter , tabcontent, tablink, tabs;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(counter = 0; counter < tabcontent.length; counter++){
        if (tabcontent[counter].style.display === "none") {
            tabcontent[counter].style.display = "block";
        }else {
            tabcontent[counter].style.display = "none";
        }
    }
    
    tablink = document.getElementsByClassName("tablink");
    for(counter = 0; counter < tablink.length; counter++){
        tablink[counter].className = tablink[counter].className.replace("active", "");
    }
}