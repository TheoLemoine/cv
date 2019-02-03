let link = [];
link[1] = document.querySelector('.square:nth-child(16)');
link[2] = document.querySelector('.square:nth-child(28)');
link[3] = document.querySelector('.square:nth-child(40)');
link[4] = document.querySelector('.square:nth-child(52)');

let body = document.querySelector('body');

link[1].addEventListener('click',function(e){
    e.preventDefault();
    body.style.transform = "translate(0,100vh)";
});
link[2].addEventListener('click',function(e){
    e.preventDefault();
    body.style.transform = "translate(-100vw,0)";
});
link[3].addEventListener('click',function(e){
    e.preventDefault();
    body.style.transform = "translate(0,-100vh)";
});
link[4].addEventListener('click',function(e){
    e.preventDefault();
    body.style.transform = "translate(100vw,0)";
    document.querySelector('.page4 video').play();
});


//_____________________________________________________

let return_button = document.querySelectorAll('.return');

for(let i=0; i<return_button.length; i++)
{
    return_button[i].addEventListener('click', function(){
        body.style.transform = "translate(0,0)";
    })
}
