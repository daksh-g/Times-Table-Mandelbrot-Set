let n=100;
let f=2;
let d;
let r;
let dn=0;
let df=0;

function setup() {
    let canvas=createCanvas(800, 800);
    canvas.parent('game');

    d=width;
    r=d/2;

    noFill();
    stroke(255);
    strokeWeight(1/r);
    pixelDensity(1);
}

function draw() {

    background(0);
    push();
    stroke(255);
    strokeWeight(1/r);

    translate(width/2, height/2);
    scale(r);

    circle(0, 0, 2);
    
    for(let i=0;i<n;++i)
        line(-cos(TWO_PI/n*i), sin(TWO_PI/n*i), -cos(f*TWO_PI/n*i), sin(f*TWO_PI/n*i));
    pop();
    

    n+=dn;
    f+=df;

}

function keyPressed() {
    switch(keyCode) {
        case DOWN_ARROW:
            df-=0.005;
            break;
        case UP_ARROW:
            df+=0.005;
    }
}

function keyReleased() {
    dn=0;
    df=0;
}