let canvas = undefined;
let ctx = undefined;

const larg = 250;
let coord = undefined;

canvas = document.querySelector('.page3 section div canvas');
canvas.width = 0.85 * canvas.parentElement.offsetWidth;
canvas.height = 0.62 * canvas.parentElement.offsetWidth;
ctx = canvas.getContext('2d');
ctx.font = '4vh Montserrat, Arial';

coord = {
    X : canvas.width / 2,
    Y : canvas.height / 2
};

function activate(at, ct, text, elem){

    document.querySelector('.page3 section div p').innerHTML = text;
    Draw( at, ct);

    let nav = document.querySelector('.page3 nav').children;
    for(let i=0; i<nav.length; i++){
        nav.item(i).style.zIndex = 1;
        nav.item(i).classList.remove('boxShadow');
    }

    elem.style.zIndex = '2';
    elem.classList.add('boxShadow');


}

document.querySelector('.page3 nav div:nth-child(1)').addEventListener('click', function () {
    activate({
        0 : new Arc(20, '#eb9d09'),
        1 : new Arc(25, '#08993C'),
        2 : new Arc(30, '#37a5c9'),
        3 : new Arc(10, '#e54b18'),
        4 : new Arc(15, '#37a5c9')
    }, {
        0 : new Comp(0.068 * window.innerWidth, 'HTML', '#eb9d09'),
        1 : new Comp(0.045 * window.innerWidth, 'CSS', '#08993C'),
        2 : new Comp(0.12 * window.innerWidth, 'JavaScript', '#37a5c9'),
        3 : new Comp(0.081 * window.innerWidth, 'JQuery', '#e54b18'),
        4 : new Comp(0.05 * window.innerWidth, 'PHP', '#37a5c9')
    },
        "J'ai appris le développement web en MMI, mais aussi beaucoup en autodidacte, pour ce qui concerne le JavaScript, JQuery " +
        "et une bonne partie du PHP. " +
        "J'adore passer des heures à développer les idées que je peux avoir sur des sites web, et avoir un code propre.",
        this);

});
document.querySelector('.page3 nav div:nth-child(2)').addEventListener('click', function () {

    activate({
        0 : new Arc(30, '#08993C'),
        1 : new Arc(20, '#eb9d09'),
        2 : new Arc(30, '#e54b18'),
            3 : new Arc(20, '#37a5c9')

    }, {
        0 : new Comp(0.11 * window.innerWidth, 'Illustrator', '#08993C'),
        1 : new Comp(0.125 * window.innerWidth, 'Photoshop', '#eb9d09'),
        2 : new Comp(0.105 * window.innerWidth, 'InDesign', '#e54b18'),
            3 : new Comp(0.13 * window.innerWidth, 'LigthRoom', '#37a5c9')
    },
        "Même avant d'entrer à l'université, j'ai toujours adoré dessiner, prendre des photos. " +
        "En entrant en MMI, j'ai pu apprendre à maitriser des outils qui me permettent maintenant de laisser parler ma " +
        "créativité, tels InDesign, Illustator ou Photoshop.",
        this)
});
document.querySelector('.page3 nav div:nth-child(3)').addEventListener('click', function () {

    activate({
        0 : new Arc(40, '#37a5c9'),
        1 : new Arc(40, '#e54b18'),
        2 : new Arc(20, '#eb9d09')
    }, {
        0 : new Comp(0.1 * window.innerWidth, 'Cadrage', '#37a5c9'),
        1 : new Comp(0.15 * window.innerWidth, 'Première Pro', '#e54b18'),
        2 : new Comp(0.13 * window.innerWidth, 'After Effect', '#eb9d09')
    },
        "La formation MMI m'a fait découvrir le monde de l'audiovisuel, et bien que ce ne soit pas mon domaine préféré, " +
        "j'apprécie mettre à profit mes compétences de cadrage, et de composition de plans.",
        this)
});
document.querySelector('.page3 nav div:nth-child(4)').addEventListener('click', function () {

    activate({
        0 : new Arc(40, '#08993C'),
        1 : new Arc(25, '#37a5c9'),
            2 : new Arc(35, '#eb9d09')
    }, {
        0 : new Comp(0.153 * window.innerWidth, 'Game Design', '#08993C'),
        1 : new Comp(0.062 * window.innerWidth, 'Unity', '#37a5c9'),
        2 : new Comp(0.035 * window.innerWidth, 'C#', '#eb9d09')
    },
        "Depuis toujours, je suis passionné par le jeu vidéo, et j'ai très vite voulu en créer. Cette année, je me suis lancé " +
        "dans la création d'un petit jeu sur unity, et l'apprentisage de C#. ",
        this)
});



// gestion des arcs
class Arc {


    constructor( pcent, color){
        this.maxLength = (pcent * (Math.PI*2)) / 100;
        this.currentLength = 0;
        this.color = color;
    }

    DrawArc(x,y, start){

        ctx.lineWidth = 20;
        ctx.strokeStyle = this.color;

        ctx.beginPath();
        ctx.arc(x, y, larg, start, start + this.currentLength);
        ctx.stroke();

        if(this.currentLength <= this.maxLength){
            this.currentLength += 0.025 * this.maxLength;
        }

    }

}
// gestion des étiquetes de compétences

class Comp {

    constructor(width, text, color){
        this.color = color;
        this.text = text;
        this.width = width;
        this.heigth = 0.055 * window.innerHeight;
        this.currentWidth = 0;
        this.pos = null;
    }

    DrawComp(origX, origY, angle){

        if(this.pos === null){

            this.pos = {
                X : origX + (Math.cos(-angle) * (larg + 20) ),
                Y : origY - (Math.sin(-angle) * (larg + 20) )
            };

            if(angle>(Math.PI/2) && angle<(3*(Math.PI/2))){
                this.pos.X -= this.width;
            }
            if(angle>Math.PI && angle<Math.PI*2){
                this.pos.Y -= this.heigth;
            }
        }

        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.X, this.pos.Y, this.currentWidth, this.heigth);

        ctx.fillStyle = 'white';
        ctx.fillText(this.text, this.pos.X + (1/20)*this.width, this.pos.Y + this.heigth/1.4);

        ctx.fillStyle = '#6B89AB';
        ctx.fillRect(this.pos.X + this.currentWidth, this.pos.Y, this.width - this.currentWidth, this.heigth);

        if(this.currentWidth <= this.width){
            this.currentWidth += 0.018 * this.width;
        }

    }

}

function Draw(Atab, Ctab) {
    requestAnimationFrame(function () {
        Draw(Atab, Ctab);
    });

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let k = 0;
    for(let i=0; i < 5; i++){
        if(Atab[i] !== undefined){
            k += Atab[i-1] != null? Atab[i-1].maxLength : 0 ;
            Atab[i].DrawArc(coord.X,coord.Y, k);

            Ctab[i].DrawComp(coord.X,coord.Y,k + Atab[i].maxLength/2)
        }
    }
}

activate({
    0 : new Arc(35, '#e54b18'),
    1 : new Arc(25, '#37a5c9'),
    2 : new Arc(15, '#08993C'),
    3 : new Arc(25, '#eb9d09')
}, {
    0 : new Comp(0.055 * window.innerWidth, 'Web', '#e54b18'),
    1 : new Comp(0.125 * window.innerWidth, 'Graphisme', '#37a5c9'),
    2 : new Comp(0.068 * window.innerWidth, 'Vidéo', '#08993C'),
    3 : new Comp(0.12 * window.innerWidth, 'Jeux vidéo', '#eb9d09')
},
    "En DUT MMI, j'apprend le Développement Web, le Graphisme et l'Audiovisuel, j'apprend aussi de " +
    "mon coté la création et la conception de jeux vidéos en autodidacte.",
    document.querySelector('.page3 nav div:nth-child(1)'));
