const images = [
    {src: "./images/image1.png", alt: "img1", id: "Bartosz"}, 
    {src: "./images/image2.png", alt: "img2", id: "Bartosz"},
    {src: "./images/image3.png", alt: "img3", id: "Bartosz"},
    {src: "./images/image4.jpg", alt: "img4", id: "Bartosz"}, 
    {src: "./images/image5.png", alt: "img5", id: "Aleksander"}, 
    {src: "./images/image6.webp", alt: "img6", id: "Dawid"},
    {src: "./images/image7.png", alt: "img7", id: "Igor"}, 
    {src: "./images/image8.png", alt: "img8", id: "Bartosz"},
    {src: "./images/image9.png", alt: "img9", id: "Zbigniew"},
    {src: "./images/image10.webp", alt: "img10", id: "Igor"},
    {src: "./images/image11.jpg", alt: "img11", id: "Zbigniew"},
    {src: "./images/image12.jpg", alt: "img12", id: "Igor"},
    {src: "./images/image13.jpg", alt: "img13", id: "Aleksander"},
    {src: "./images/image14.jpg", alt: "img14", id: "Bartosz"},
    {src: "./images/image15.jpg", alt: "img15", id: "Tomasz"},
    {src: "./images/image16.jpg", alt: "img16", id: "Tomasz"},
    {src: "./images/image17.jpg", alt: "img17", id: "Bartosz"},
    {src: "./images/image18.jpg", alt: "img18", id: "Aleksander"},
    {src: "./images/image19.jpg", alt: "img19", id: "Aleksandra"},
    {src: "./images/image20.jpg", alt: "img20", id: "Aleksandra"},
    {src: "./images/image21.jpg", alt: "img21", id: "Dawid"},
    {src: "./images/image22.jpg", alt: "img22", id: "Aleksandra"},
    {src: "./images/image23.jpg", alt: "img23", id: "Aleksandra"},
    {src: "./images/image24.jpg", alt: "img24", id: "Aleksandra"},
    {src: "./images/image25.jpg", alt: "img25", id: "Dawid"},
];

const descriptions = [
    {name: "Bartosz Rudecki", 
    text: `(ur. 14 kwietnia 1999 w Radomsku)  – polski szachista, streamer, znany pod pseudonimem „xntentacion”
        z platformy Twitch, gdzie ma ponad 345 000 obserwujących (stan na 08.2026). Posiada on także własny
        kanał na platformie YouTube. Jego ranking FIDE w szachach klasycznych wynosi 1939 (stan z 08.2026) – 
        najwyższy wynik w karierze to 2007 (stan z 04.2017). Bartosz to jednocześnie współtwórca projektu "Ostre Debiuty".`,
    id: "Bartosz"},
    {name: "Aleksander Radomski", 
        text: ` „Szachowy Mentor” to polski autor książek szachowych, 
        trener szachowy, pasjonat królewskiej gry oraz aktywny zawodnik turniejowy. Jest twórcą projektu „Szachowy Mentor”,
        w ramach którego popularyzuje szachy i publikuje materiały edukacyjne pomagające rozwijać umiejętności graczy. 
        Jest on również autorem kontrowersyjnej książki „Jak zostać szachistą XXI wieku? Kompendium wiedzy dla początkujących.”`,
    id: "Aleksander"},
    {name: "Dawid Czerw", 
        text: `to polski szachista, mistrz międzynarodowy (IM), trener szachowy oraz 
        twórca internetowy popularyzujący królewską grę. Jest znany z prowadzenia kanału na YouTube DawidCzerwTV, na którym publikuje materiały szachowe, 
        analizuje partie i prezentuje rozgrywki na żywo. Dawid to również przedstawieciel Chess.com Polska.`,
    id: "Dawid"},
    {name: "Igor Janik", 
        text: `to polski szachista, arcymistrz (GM), instruktor szachowy i wielokrotny medalista krajowych oraz międzynarodowych turniejów. 
        Urodził się 9 czerwca 2000 roku w Elblągu. Tytuł arcymistrza, najwyższy tytuł przyznawany przez Międzynarodową Federację Szachową (FIDE), 
        zdobył w 2021 roku, a od 2022 roku jest notowany jako arcymistrz. Igor to jednocześnie współtwórca projektu "Ostre Debiuty".`,
    id: "Igor"},
    {name: "Zbigniew Pakleza", 
        text: `to polski szachista, arcymistrz (GM), instruktor szachowy oraz sędzia szachowy. 
        Urodził się 5 grudnia 1986 roku w Gliwicach. Tytuł arcymistrza zdobył w 2014 roku i od lat uczestniczy w turniejach szachowych w Polsce oraz za granicą.
        Zbigniew to również główny content creator youtubowego i twitchowego kanału Pzszach.`,
    id: "Zbigniew"},
    {name: "Tomasz Jaskółka",
        text: `Tomasz Jaskółka to polski szachista, posiadający tytuł Kandydata na Mistrza FIDE (CM).Jest zawodnikiem związanym z klubem KSz Królewscy Tarnów.
        Od lat rozwija swoje umiejętności szachowe i uczestniczy w turniejach szachowych,
        rywalizując z zawodnikami z Polski oraz innych krajów. Osiąga dobre wyniki w rozgrywkach szachowych,
        a jego najwyższy odnotowany ranking FIDE w szachach klasycznych wynosi 2187 Elo.`,
    id: "Tomasz"
    },
    {name: "Aleksandra Tarnowska",
        text: `Aleksandra Tarnowska to polska szachistka posiadająca tytuł Kandydatki na Mistrzynię FIDE (WCM).
        Reprezentuje Polskę i brała udział m.in. w Mistrzostwach Świata Amatorów w 2022 roku.
        Jej najwyższy odnotowany ranking FIDE w szachach klasycznych wynosił 1885 Elo — w czerwcu 2024 roku.`,
    id: "Aleksandra"
    }
];

let indexImage = 0;
const picture = document.getElementById("picture");
const h1 = document.getElementById("h1_gallery");
const p = document.getElementById("p_gallery");

function GetDescription(id) {
    return descriptions.find(descriptions => descriptions.id === id); 
};

function UpdateDescription() {
    const id = images[indexImage].id;
    const description = GetDescription(id);

    if(description) {
        h1.innerHTML = description.name;
        p.innerHTML = description.text;
    };
};

function Gallery (index) {
    indexImage = (index + images.length) % images.length;
    picture.src = images[indexImage].src;
    picture.alt = images[indexImage].alt;

    UpdateDescription();
};

document.getElementById("button1").addEventListener("click", () => {
    Gallery(indexImage - 1)
});
document.getElementById("button2").addEventListener("click", () => {
    Gallery(indexImage + 1)
});

Gallery(0);
