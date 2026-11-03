const list_url = [
    {href: 'https://kick.com/szachowymentor1996', id: 'a_1'},
    {href: 'https://www.youtube.com/@OstreDebiuty/videos', id: 'a_2'},
    {href: 'https://www.youtube.com/@xntentacion/videos', id: 'a_3'},
    {href: 'https://www.youtube.com/@TomekJaskoka/videos', id: 'a_4'},
    {href: 'https://www.youtube.com/@DawidCzerwTV', id: 'a_5'},
    {href: 'https://www.youtube.com/@chesscomPL', id: 'a_6'},
    {href: 'https://www.youtube.com/@PZSzachowy', id: 'a_7'}
];

let Indexlinks = 0;

const button1_links = document.getElementById("button1_links");
button1_links.addEventListener("click" , () =>{
    GetLinks();
    DisplayLinksButton();
    });
div_links.style.display = "none";

function DisplayLinksButton() {
    div_links.style.display = "block";
};



function GetLinks(index) {
    list_url.forEach( item => {
        const div_links = document.getElementById("div1_links");
        const a_links = document.createElement("a");
        const br = document.createElement("br");
        a_links.href = item.href;
        a_links.id = item.id;
        a_links.textContent = item.href;
        a_links.classList.add("links")

        div_links.appendChild(a_links);
        div_links.appendChild(br);
    });
};