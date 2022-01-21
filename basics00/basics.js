function hackCity(evt, cityName){
    var counter , tabcontent, tablink;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(counter = 0; counter < tabcontent.length; counter++){
        tabcontent[counter].style.display = "none";
        document.getElementById(cityName).style.display = "block";
    }
    
    tablink = document.getElementsByClassName("tablink");
    for(counter = 0; counter < tablink.length; counter++){
        tablink[counter].className = tablink[counter].className.replace("active", "");
        evt.currentTarget.className += " active";
    }
}