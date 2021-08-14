
function setup() {
  createCanvas(1900,1900);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    background('blue')
  }

  if(keyIsDown(UP_ARROW)){
    background('grey')
  }

  if(keyIsDown(LEFT_ARROW)){
    background('pink')
  }

  if(keyIsDown(DOWN_ARROW)){
    background('lightBlue')
  }

}




