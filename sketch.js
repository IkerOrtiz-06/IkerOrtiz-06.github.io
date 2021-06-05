function triangulo(x,y){
    fill(141,73,37);
    triangle(x,y,x+50,y-200,x+100,y)
}
    
function elipse(x){
    fill(191,191,191);
    ellipse(x,100,250,50)
}

function nubes(x){
    while (x < width){
        elipse(x);
        x+= 360
    }
}
function montes(x){
    while (x < width){
        triangulo(x,height-25);
        x+=80
    }
}
function setup() {
  createCanvas(500, 450);
  rectMode(CENTER);
    background(0,255,255);
    x = width/2;
    xmont = -50;
    xnub= width-300
  
}

function draw() {
  background(0,255,255);
  rectMode(CENTER);
    montes(xmont);
    fill(250,175,0);
    rect(width/2,height-25,width,50);
    fill(255,255,255);
    rect(width/2,height-75,50,50);
    fill(255,255,0);
    ellipse(x,height-450,80,80);
    //print(frameRate);
    nubes(xnub)
}

function keyPressed(){
  console.log(keyCode, key)
        if (keyCode === RIGHT_ARROW){
            x-=0.1
            xmont -= 2
            xnub -= 0.5
        
            if (xmont <= -90);{
                xmont += 80
            }
            if (xnub <= -110);{
                xnub += 100    
            }
        }
        else if (keyCode === LEFT_ARROW){
            x+=0.1
            xmont += 2
            xnub += 0.5
            if (xmont >= -10);{
                xmont -= 80
            }
            if (xnub >= -10);{
                xnub -= 100
            }
        }
}