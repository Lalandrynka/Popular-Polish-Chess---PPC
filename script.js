const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
img2.style.display = "none";
img3.style.display = "none";
function scena1 (){
    img1.style.display = "block";
    img2.style.display = "none";
    img3.style.display = "none";
}
function scena2 (){
    img1.style.display = "none";
    img2.style.display = "block";
    img3.style.display = "none";
}
function scena3 (){
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
}