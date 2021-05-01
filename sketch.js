const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var backgroundImg;
var canvas;

var boundary1;
var boundary2;
var boundary3;

var x = 0;

var PCplayer, PCplayerImg;

var bullet, bulletImg;
var target1,targetImg1;
var target2,targetImg2;
var target3,targetImg3;
var target4,targetImg4;

var gameover,gameoverImg;
var win,winImg;
var score = 0;
var bulletGroup;

var gameState = "play";


function preload(){
    backgroundImg = loadImage("images/images.jpg");
    PCplayerImg = loadImage("images/h.png");
    bulletImg = loadImage("images/bullet.png");
    gameoverImg = loadImage("images/Game over.png");
    winImg = loadImage("images/Win.png");

    targetImg1 = loadImage("images/aim.png");
    targetImg2 = loadImage("images/aim.png");
    targetImg3 = loadImage("images/aim.png");
    targetImg4 = loadImage("images/aim.png");   



}

function setup(){
    canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    bulletGroup = new Group();
    

     PCplayer = createSprite(500,700,100,100);
     PCplayer.addImage(PCplayerImg);
     PCplayer.scale = 0.5

     target1 = createSprite(850,500,80,80);
     target1.addImage(targetImg1);
     target1.scale = 0.5;
     target1.velocityX = 5;    


     target2 = createSprite(650,350,80,80);
     target2.addImage(targetImg2);
     target2.scale = 0.5;
     target2.velocityX = 5;    

     target3 = createSprite(450,250,80,80);
     target3.addImage(targetImg3)
     target3.scale = 0.5;
     target3.velocityX = 5;    

     target4 = createSprite(250,100,80,80);
     target4.addImage(targetImg4)
     target4.scale = 0.5;
     target4.velocityX = 5;    
     
     boundary1 = createSprite(1190,400,5,800);
     boundary2 = createSprite(10,400,5,800);
     boundary3 = createSprite(600,0,1200,5);
   
}

function draw(){
     background (backgroundImg);

     Engine.update(engine);
     textSize(25);

     fill("white");
     text("SCORE = "+score, 60, 30);
     
      
     if(gameState === "play"){
     // to move the target
         if(target1.isTouching(boundary1)){
          target1.velocityX = target1.velocityX * (-1);
         }

         if(target2.isTouching(boundary1)){
            target2.velocityX = target2.velocityX * (-1);
         }

         if(target3.isTouching(boundary1)){
            target3.velocityX = target3.velocityX * (-1);
         }

         if(target4.isTouching(boundary1)){
            target4.velocityX = target4.velocityX * (-1);
         }

         if(target1.isTouching(boundary2)){
            target1.velocityX = target1.velocityX * (-1);
         }
         
         if(target2.isTouching(boundary2)){
            target2.velocityX = target2.velocityX * (-1);
          }
          
          if(target3.isTouching(boundary2)){
            target3.velocityX = target3.velocityX * (-1);
          }
         
          if(target4.isTouching(boundary2)){
            target4.velocityX = target4.velocityX * (-1);
          }

             // to move the user with mouse
             PCplayer.x=mouseX;
         
              if(keyWentDown("space")) {  
               spawnBullets();          
              }

             if(bulletGroup.isTouching(target1))
              {
                 target1.destroy();
                  bullet.destroy();
                  score = score+1;
              }
  
              if(bulletGroup.isTouching(target2))
              {
                 target2.destroy();
                 bullet.destroy();
                 score = score+1;
              }
  
              if(bulletGroup.isTouching(target3))
              {
                 target3.destroy();
                 bullet.destroy();
                 score = score+1;
              }
  
              if(bulletGroup.isTouching(target4))
              {
                 target4.destroy();
                 bullet.destroy();
                 score = score+1;
              }


              if(bulletGroup.isTouching(boundary3)){
               var oneChance = createSprite(-20,100,100,50);
                   oneChance.velocityX += 10;
               var boundaryNew = createSprite(600,5,1200,5);
               if(bulletGroup.isTouching(boundaryNew)){
                  gameState = "End";

                }
            }

             if(score = 4){
               fill("white");
               textSize(30);
               text("VICTORY YOU HAVE WON",600,200)
             }
            

         }

         

      

         if(gameState === "End"){
            fill("white");
            textSize(30);
            text("GAME OVER",600,200);
         }
  
              
         
          drawSprites();
}

function spawnBullets(){
   bullet = createSprite(50,700,10,10);
   bullet.addImage(bulletImg);
   bulletGroup.add(bullet)
   bullet.scale = 0.05;
   //position of the bullete initially
   bullet.x=PCplayer.x;
   bullet.velocityY -= 10 
        
}
