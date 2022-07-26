var spacebg, rocketimg, coinimg, rockimg, fireimg;
var spacebgimg , rocket , coin , fire , rock
var rocksgroup , firegroup , coinsgroup
var score = 0 
var lives = 2

function preload(){
  spacebgimg = loadImage("assets/spacebg.jpg");
  rocketimg = loadImage("assets/rocket.png");
  rockimg = loadImage("assets/rock.png");
  coinimg  = loadImage("assets/coin.png");
  fireimg = loadImage("assets/fire.png");
}

function setup(){
  
createCanvas(windowWidth,windowHeight);

spacebg = createSprite(windowWidth/2, windowHeight/2)
spacebg.addImage("spacebg", spacebgimg);
spacebg.scale = 2.5
spacebg.velocityY=3;

rocket = createSprite(300,600,20,50)
rocket.addImage("rocket", rocketimg)
rocket.scale = 0.5

rocksgroup = createGroup();
firegroup = createGroup();
coinsgroup = createGroup();

}

function draw() {
background(0)
console.log(windowHeight)
//console.log(mouseX, mouseY)


if(spacebg.y>windowHeight/2+100){
  spacebg.y=windowHeight/2;
}

if(rocket.isTouching(coinsgroup)){
  score += 10
  coinsgroup.destroyEach()
}

rocket.x=mouseX

if(rocket.isTouching(rocksgroup) || rocket.isTouching(firegroup)){
  lives-=1
  rocket.x = 300
  rocket.y = 300
}



spawnRocks();
spawnFire();
spawnCoins();
  drawSprites()
  textSize(30)
  fill("white")
  text("Score : "+score,50,60)
  text("Lives : " +lives,50,100)

  
  
  }

  function spawnRocks(){
    if(frameCount %110===0){
      var rock = createSprite(300,280,20,10)
      rock.addImage("rock", rockimg)
      rock.velocityY = 7
      rock.x = Math.round(random(100,windowWidth-100))
      rock.scale = 0.5
      rocksgroup.add(rock)
    }
  }

  function spawnFire(){
    if(frameCount %150 ===0){
      var fire = createSprite(300,200,10,30)
      fire.addImage("fire",fireimg)
      fire.velocityY = 6
      fire.x = Math.round(random(200,windowWidth-100))
      fire.scale = 0.5
      firegroup.add(fire)
    }
  }

  function spawnCoins(){
    if(frameCount %170 ===0){

      var coin = createSprite(200,150,10,20)
      coin.addImage("coin", coinimg)
      coin.velocityY = 5
      coin.x = Math.round(random(300,windowWidth-100))
      coin.scale = 0.2
      coinsgroup.add(coin)
    }

  }
