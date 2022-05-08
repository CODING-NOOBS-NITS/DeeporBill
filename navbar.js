// function navbar()
// {
//     document.getElementsByTagName("nav")[0].style.transform = "translateX(0%)"
// }
// document.getElementsByTagName("nav")[0].style.transform = "translateX(100%)"
// document.getElementById("nav-button").addEventListener("click",navbar);
// function close(){

// }

document.getElementById("nav-button").addEventListener("click", function () {document.getElementsByTagName("nav")[0].style.transform = "translateX(0%)";});
document.getElementById("nav-close").addEventListener("click", function () { document.getElementsByTagName("nav")[0].style.transform = "translateX(100%)" });
// document.getElementById("nav-close").addEventListener("click",navbar);

// function () { document.getElementsByTagName("nav")[0].style.transform="translateX(0%)" }

document.getElementById("navbar-js").innerHTML=``;

console.log("linked");