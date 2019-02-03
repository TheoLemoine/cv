for(let i=0; i<72; i++){

    if(i===14){
       $(".mainMenu").append('<a href="#" class="square linkSquare"><span>Présentation</span></a>' )
    }
    else if(i===26){
        $(".mainMenu").append('<a href="#" class="square linkSquare"><span>Portfolio & <br> Projets</span></a>' )
    }
    else if(i===38){
        $(".mainMenu").append('<a href="#" class="square linkSquare"><span>Formation & <br>Qualifications</span></a>' )
    }
    else if(i=== 50){
        $(".mainMenu").append('<a href="#" class="square linkSquare"><span>Dans mon <br>temps libre...</span></a>' )
    }
    else{
       $(".mainMenu").append('<div class="square"></div>' );
    }
}

function Carre ( x, y, objectRef )
{
    this.x = x;
    this.y = y;
    this.dist = undefined;
    this.size = undefined;
    
    this.update = function ( mouseX, mouseY ) {
        
        this.dist = ( Math.sqrt( Math.pow((this.x - mouseY) ,2) + Math.pow((this.y - mouseX) ,2) ) );
        
        this.size = (10000/(this.dist + 150)) + 60;
        this.size = this.size / 15.5;
        
        objectRef.css('width', this.size+'vw');
        objectRef.css('height', this.size+'vw');
        
        
    }
}


let vh = window.innerHeight - 0.03*window.innerHeight;
let vw = window.innerWidth - 0.015*window.innerWidth;

let countedVH = (1/12)*vh;
let countedVW = (1/24)*vw;

let LeftArray = [];
let TopArray = [];

TopArray[0] = countedVH;
LeftArray[0] = countedVW;

for(let i=0; i<6; i++){
    countedVH += (1/6)*vh;
    TopArray[i+1] = countedVH;
}
for(let i=0; i<12; i++){
    countedVW += (1/12)*vw;
    LeftArray[i+1] = countedVW;
}

CarreArray = [];
let k = 0;
for(let i=0; i<6; i++){
    for(let j=0; j<12; j++){
        
        CarreArray.push( new Carre( TopArray[i], LeftArray[j], $('.square').eq(k)));
        k++;
    }
}


addEventListener('mousemove',function(event){
    
    for(let i=0; i<72; i++){
        CarreArray[i].update(event.x, event.y)
    }
    
});