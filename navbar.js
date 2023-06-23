document.getElementById("nav-button").addEventListener("click", function () {
    console.log("clicked");
    document.getElementsByTagName("nav")[0].style.visibility = "visible";
    document.getElementsByTagName("nav")[0].style.transform = "translateX(0%) transition:1s";
});
document.getElementById("nav-close").addEventListener("click", function () { 
    document.getElementsByTagName("nav")[0].style.visibility = "hidden";
    document.getElementsByTagName("nav")[0].style.transform = "translateX(100%) transition:1s" 
});