const list_url = [
    {href: "https://kick.com/szachowymentor1996", id: "a_1"},
    {href: "https://www.youtube.com/@OstreDebiuty/videos", id: "a_2"},
    {href: "https://www.youtube.com/@xntentacion/videos", id: "a_3"},
    {href: "https://www.youtube.com/@TomekJaskoka/videos", id: "a_4"},
    {href: "https://www.youtube.com/@DawidCzerwTV", id: "a_5"},
    {href: "https://www.youtube.com/@chesscomPL", id: "a_6"},
    {href: "https://www.youtube.com/@PZSzachowy", id: "a_7"},
    {href: "https://www.twitch.tv/olaczka", id: "a_8"}
];

let Indexlinks = 0;

const button1_links = document.getElementById("button1_links");
const div1_links = document.getElementById("div1_links");
const aside = document.querySelector("aside");
const img1_links = document.getElementById("img1_links");
const a2_links = document.getElementById("a2_links");
button1_links.addEventListener("click" , () =>{
    GetLinks();
    DisplayLinksButton();
    });
div1_links.style.display = "none";

function DisplayLinksButton() {
    div1_links.style.display = "block";
    button1_links.style.display = "none";
    aside.style.width = "300px";
    aside.style.left = "65%";
    img1_links.style.width = "300px";
    a2_links.style.width = "300px";
};

function GetLinks() {
    list_url.forEach( item => {
        const div2_links = document.getElementById("div1_links");
        const a_links = document.createElement("a");
        const br = document.createElement("br");
        a_links.href = item.href;
        a_links.id = item.id;
        a_links.target = `_blank`;
        a_links.textContent = item.href;
        a_links.classList.add("links");

        div2_links.appendChild(a_links);
        div2_links.appendChild(br);
    });
};