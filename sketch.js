var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles;
var plinkos = [];
var divisions=[]

var divisionHeight=300;
var score =0;
var particle;
var count=0
var gamestate="play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
 
  background("black");
  Engine.update(engine)
text (mouseX+","+mouseY,mouseX,mouseY)
  textSize(20)
 text("Score : "+score,20,30);
 text("500",13,600);
 text("200",100,600);
 text("50",195,600);
 text("100",270,600);
 text("50",350,600);
 text("100",425,600);
 text("35",510,600);
 text("160",580,600);
 text("50",670,600);
 text("400",750,600);
 text ("Turns:"+count,20,50)
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  //for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }
     if(particle!=null){

particle.display()

if(particle.body.position.y>760){ 


  if(particle.body.position.x>10&&particle.body.position.x<80)
  {
score=score+500
particle=null
 if (count>=5) gamestate="end"

  }
 else  if(particle.body.position.x>90&&particle.body.position.x<160)
  {
score=score+200
particle=null
if (count>=5) gamestate="end"

  }
 else if(particle.body.position.x>170 && particle.body.position.x<240)
  {
score=score+50
particle=null
if (count>=5) gamestate="end"

  }
 else if(particle.body.position.x>250&&particle.body.position.x<320)
  {
score=score+100
particle=null
if (count>=5) gamestate="end"

  }
 else if(particle.body.position.x>332&&particle.body.position.x<400)
  {
score=score+50
particle=null
if (count>=5) gamestate="end"

  }
 

 else  if(particle.body.position.x>410&&particle.body.position.x<480)
  {
score=score+100
particle=null
if (count>=5) gamestate="end"

  }
 else if(particle.body.position.x>490&&particle.body.position.x<560)
  {
score=score+35
particle=null
if (count>=5) gamestate="end"

  }
 else if(particle.body.position.x>570&&particle.body.position.x<640)
  {
score=score+160
particle=null
if (count>=5) gamestate="end"

  }
 else if(particle.body.position.x>650&&particle.body.position.x<720)
  {
score=score+50
particle=null
if (count>=5) gamestate="end"

  }
 else if(particle.body.position.x>730&&particle.body.position.x<770)
  {
score=score+400
particle=null
if (count>=5) gamestate="end"

  }
}


     }
     if (count===5){
       gamestate="end"
       fill ("red")
      textSize(120)
          text ("Game over.",130,300)
          textSize(20)
          text ("Reload the page to play again.",150,350)
        }
   }

function mousePressed(){

if (gamestate!=="end"){

  count++
  particle=new Particle(mouseX,10,10,10)
}


}