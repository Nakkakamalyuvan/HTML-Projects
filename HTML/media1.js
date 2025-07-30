window.onresize = find;
window.onload=find;
function find(){
    document.getElementById("screen").innerHTML ="screen width :" +window.innerWidth;
}