const images = [
    {src : "./images/image1.png", alt: "img1"}, 
    {src : "./images/image2.png", alt: "img2"},
    {src : "./images/image3.png", alt: "img3"},
    {src : "./images/image4.jpg", alt: "img4"}, 
    {src : "./images/image5.png", alt: "img5"}, 
    {src : "./images/image6.webp", alt: "img6"},
    {src : "./images/image7.png", alt: "img7"}, 
    {src : "./images/image8.png", alt: "img8"},
    {src : "./images/image9.png", alt: "img9"},  
];

let indexImage = 0;
const picture = document.getElementById("picture");

function Gallery (index) {
    indexImage = (index + images.length) % images.length;
    picture.src = images[indexImage].src;
    picture.alt = images[indexImage].alt;
}

document.getElementById("button1").addEventListener("click", () => {
    Gallery(indexImage - 1)
});
document.getElementById("button2").addEventListener("click", () => {
    Gallery(indexImage + 1)
});

Gallery(0);