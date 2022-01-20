function hackCity(e, cityName){
    var counter , tabcontent, tablink, tabs;


    tabcontent = document.getElementsByClassName("tabcontent");
    for(counter = 0; counter < tabcontent.length; counter++){
        tabcontent[i].style.display = "none";
    }
    
    tabs = document.getElementById("tabs");
    tablink = tabs.getElementsByClassName("tablink");
    for(counter = 0; counter < tablink.length; counter++){
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    e.currentTarget.className += " active";
}