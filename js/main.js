var game = new Phaser.Game(800, 600,Phaser.CANVAS, 'game', { preload: preload, create: create, update: update});

//Variables
var bad1;
var bad2;
var bad3;
var bad4;
var bad5;
var bad6;
var bad7;
var bad8;
var bad9;
var bad10;
var bad11;
var bad12;
var bad13;
var bad14;
var bad15;
var bad16;
var bad17;
var bad18;
var bad19;
var bad20;
var filter;
var good1;
var start_screen;
var gameover_screen;
var background;
var timer = 60;
var timerText;
var timer_background;
var music;
var enter_text_button;


function preload() 
{
   
    game.load.audio('music','assets/music.ogg');
    
    
    //Load images
    game.load.image('bad1', 'assets/bad1.png');
    game.load.image('bad2', 'assets/bad2.png');
    game.load.image('bad3', 'assets/bad3.png');
    game.load.image('bad4', 'assets/bad4.jpg');
    game.load.image('bad5', 'assets/bad5.png');
    game.load.image('bad6', 'assets/bad6.png');
    game.load.image('bad7', 'assets/bad7.jpg');
    game.load.image('bad8', 'assets/bad8.png');
    game.load.image('bad9', 'assets/bad9.jpg');
    game.load.image('bad10', 'assets/bad10.png');
    game.load.image('bad11', 'assets/bad11.png');
    game.load.image('bad12', 'assets/bad12.png');
    game.load.image('bad13', 'assets/bad13.png');
    game.load.image('bad14', 'assets/bad14.png');
    game.load.image('bad15', 'assets/bad15.png');
    game.load.image('bad16', 'assets/bad16.png');
    game.load.image('bad17', 'assets/bad17.jpg');
    game.load.image('bad18', 'assets/bad18.png');
    game.load.image('bad19', 'assets/bad19.png');
    game.load.image('bad20', 'assets/bad20.png');
    game.load.image('bad21', 'assets/bad21.png');
    game.load.image('bad22', 'assets/bad22.png');
    game.load.image('bad23', 'assets/bad23.jpg');
    game.load.image('bad24', 'assets/bad24.jpg');
    game.load.image('bad25', 'assets/bad25.png');
    
    
    game.load.image('good1', 'assets/good1.jpg');
    
    //Load backgrounds
    game.load.image('background1', 'assets/background1.png');
    game.load.image('background2', 'assets/background2.jpg');
    game.load.image('background3', 'assets/background3.jpg');
    game.load.image('background4', 'assets/background4.png');
    game.load.image('background5', 'assets/background5.png');
    game.load.image('background6', 'assets/background6.jpg');
    game.load.image('background7', 'assets/background7.jpg');
    game.load.image('timer_background', 'assets/timer_background.png');
    
    game.load.image('start_screen', 'assets/start_screen.png');
    game.load.image('enter_text_button', 'assets/enter_text_button.png');
    game.load.image('gameover_screen', 'assets/gameover_screen.png');
}



function create()
{   
    
    music = game.add.audio('music');
    music.play();
    
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    background = game.add.sprite(game.world.centerX, game.world.centerY, 'background1');
    //background.alpha = 0.5;
    background.anchor.set(0.5);
    addimages();
    
    timer_background = game.add.sprite(22, 545, 'timer_background');
    timer_background.scale.setTo(0.4, 0.3);
    timerText = game.add.text(40, 550, 'Timer: 60', { font: "25px Arial", fill: "#000000", align: "left" });
    game.time.events.loop(Phaser.Timer.SECOND, updateTimer, this);
    
    enter_text_button = game.add.sprite(610, 510, 'enter_text_button');
    enter_text_button.scale.setTo(0.8, 0.8);
    
    
    game.paused = true;
    start_screen = game.add.sprite(800/2, 600/2, 'start_screen');
    start_screen.anchor.setTo(0.5, 0.5);
    game.input.onDown.add(start, self);

}
function gameOver()
{
    game.paused = true;
    gameover_screen = game.add.sprite(800/2, 600/2, 'gameover_screen');
    gameover_screen.anchor.setTo(0.5, 0.5);
}

function start()
{
    start_screen.destroy();
    game.paused = false;
   
}
function updateTimer() 
{
    timer--;
    if(timer >= 0)
        {
            timerText.setText('Timer: ' + timer);
        }
   // timerText.setText('Timer: ' + timer);
}

function addimages()
{  
    good1 = game.add.sprite(game.world.randomX, game.world.randomY, 'good1');
    good1.scale.setTo(0.2, 0.2);
    game.physics.enable(good1, Phaser.Physics.ARCADE);
    good1.body.velocity.setTo(80, 80);
    good1.body.collideWorldBounds = true;
    good1.body.bounce.set(1);
    good1.anchor.setTo(0.5, 0.5);
    
    bad1 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad1');
    bad1.scale.setTo(0.3, 0.3);
    game.physics.enable(bad1, Phaser.Physics.ARCADE);
    bad1.body.velocity.setTo(100,100);
    bad1.body.collideWorldBounds = true;
    bad1.body.bounce.set(1);
    
    
    bad2 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad2');
    bad2.scale.setTo(0.4, 0.4);
    game.physics.enable(bad2, Phaser.Physics.ARCADE);
    bad2.body.velocity.setTo(180, 180);
    bad2.body.collideWorldBounds = true;
    bad2.body.bounce.set(1);
    
    bad3 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad3');
    bad3.scale.setTo(0.2, 0.2);
    game.physics.enable(bad3, Phaser.Physics.ARCADE);
    bad3.body.velocity.setTo(50, 50);
    bad3.body.collideWorldBounds = true;
    bad3.body.bounce.set(0.8);
    bad3.body.gravity.set(0, 180);
   
    bad4 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad4');
    bad4.scale.setTo(0.2, 0.2);
    game.physics.enable(bad4, Phaser.Physics.ARCADE);
    bad4.body.velocity.setTo(20, 20);
    bad4.body.collideWorldBounds = true;
    bad4.body.bounce.set(1);
    bad4.anchor.setTo(0.5, 0.5);
    
    bad5 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad5');
    bad5.scale.setTo(0.2, 0.2);
    game.physics.enable(bad5, Phaser.Physics.ARCADE);
    bad5.body.velocity.setTo(150, 150);
    bad5.body.collideWorldBounds = true;
    bad5.body.bounce.set(1);
    
    bad6 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad6');
    bad6.scale.setTo(0.2, 0.2);
    game.physics.enable(bad6, Phaser.Physics.ARCADE);
    bad6.body.velocity.setTo(60, 60);
    bad6.body.collideWorldBounds = true;
    bad6.body.bounce.set(1);
    
    bad7 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad7');
    bad7.scale.setTo(0.4, 0.4);
    game.physics.enable(bad7, Phaser.Physics.ARCADE);
    bad7.body.velocity.setTo(120, 120);
    bad7.body.collideWorldBounds = true;
    bad7.body.bounce.set(1);
    
    bad8 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad8');
    bad8.scale.setTo(0.4, 0.4);
    game.physics.enable(bad8, Phaser.Physics.ARCADE);
    bad8.body.velocity.setTo(180, 180);
    bad8.body.collideWorldBounds = true;
    bad8.body.bounce.set(1);
    
    bad9 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad9');
    bad9.scale.setTo(0.2, 0.2);
    game.physics.enable(bad9, Phaser.Physics.ARCADE);
    bad9.body.velocity.setTo(180, 180);
    bad9.body.collideWorldBounds = true;
    bad9.body.bounce.set(1);
    
    bad10 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad10');
    bad10.scale.setTo(0.1, 0.1);
    game.physics.enable(bad10, Phaser.Physics.ARCADE);
    bad10.body.velocity.setTo(50, 50);
    bad10.body.collideWorldBounds = true;
    bad10.body.bounce.set(1);
    
    bad11 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad11');
    bad11.scale.setTo(0.5, 0.5);
    game.physics.enable(bad11, Phaser.Physics.ARCADE);
    bad11.body.velocity.setTo(200, 200);
    bad11.body.collideWorldBounds = true;
    bad11.body.bounce.set(1);
    
    bad12 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad12');
    bad12.scale.setTo(0.3, 0.3);
    game.physics.enable(bad12, Phaser.Physics.ARCADE);
    bad12.body.velocity.setTo(10, 10);
    bad12.body.collideWorldBounds = true;
    bad12.body.bounce.set(1);
    
    bad13 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad13');
    bad13.scale.setTo(0.7, 0.7);
    game.physics.enable(bad13, Phaser.Physics.ARCADE);
    bad13.body.velocity.setTo(130, 130);
    bad13.body.collideWorldBounds = true;
    bad13.body.bounce.set(1);
    
    bad14 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad14');
    bad14.scale.setTo(0.3, 0.3);
    game.physics.enable(bad14, Phaser.Physics.ARCADE);
    bad14.body.velocity.setTo(80, 80);
    bad14.body.collideWorldBounds = true;
    bad14.body.bounce.set(1);
    
    bad15 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad15');
    bad15.scale.setTo(0.2, 0.2);
    game.physics.enable(bad15, Phaser.Physics.ARCADE);
    bad15.body.velocity.setTo(60, 60);
    bad15.body.collideWorldBounds = true;
    bad15.body.bounce.set(1);
    
    bad16 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad16');
    bad16.scale.setTo(0.2, 0.2);
    game.physics.enable(bad16, Phaser.Physics.ARCADE);
    bad16.body.velocity.setTo(50, 50);
    bad16.body.collideWorldBounds = true;
    bad16.body.bounce.set(0.9);
    bad16.body.gravity.set(0, 180);
    
    bad17 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad17');
    bad17.scale.setTo(0.4, 0.4);
    game.physics.enable(bad17, Phaser.Physics.ARCADE);
    bad17.body.velocity.setTo(5, 5);
    bad17.body.collideWorldBounds = true;
    bad17.body.bounce.set(1);
    
    bad18 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad18');
    bad18.scale.setTo(0.4, 0.4);
    game.physics.enable(bad18, Phaser.Physics.ARCADE);
    bad18.body.velocity.setTo(60, 60);
    bad18.body.collideWorldBounds = true;
    bad18.body.bounce.set(1);
    
    bad19 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad19');
    bad19.scale.setTo(0.3, 0.3);
    game.physics.enable(bad19, Phaser.Physics.ARCADE);
    bad19.body.velocity.setTo(40, 40);
    bad19.body.collideWorldBounds = true;
    bad19.body.bounce.set(1);
    
    bad20 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad20');
    bad20.scale.setTo(0.3, 0.3);
    game.physics.enable(bad20, Phaser.Physics.ARCADE);
    bad20.body.velocity.setTo(120, 120);
    bad20.body.collideWorldBounds = true;
    bad20.body.bounce.set(1);
    
    bad21 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad21');
    bad21.scale.setTo(0.2, 0.2);
    game.physics.enable(bad21, Phaser.Physics.ARCADE);
    bad21.body.velocity.setTo(120, 120);
    bad21.body.collideWorldBounds = true;
    bad21.body.bounce.set(1);
    bad21.anchor.setTo(0.5, 0.5);
    
    bad22 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad22');
    bad22.scale.setTo(0.5, 0.5);
    game.physics.enable(bad22, Phaser.Physics.ARCADE);
    bad22.body.velocity.setTo(120, 120);
    bad22.body.collideWorldBounds = true;
    bad22.body.bounce.set(1);
    
    bad23 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad23');
    bad23.scale.setTo(0.3, 0.3);
    game.physics.enable(bad23, Phaser.Physics.ARCADE);
    bad23.body.velocity.setTo(150, 150);
    bad23.body.collideWorldBounds = true;
    bad23.body.bounce.set(1);
    
    
    bad24 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad24');
    bad24.scale.setTo(0.3, 0.3);
    game.physics.enable(bad24, Phaser.Physics.ARCADE);
    bad24.body.velocity.setTo(60, 60);
    bad24.body.collideWorldBounds = true;
    bad24.body.bounce.set(1);
    
    bad25 = game.add.sprite(game.world.randomX, game.world.randomY, 'bad25');
    bad25.scale.setTo(0.4, 0.4);
    game.physics.enable(bad25, Phaser.Physics.ARCADE);
    bad25.body.velocity.setTo(100, 100);
    bad25.body.collideWorldBounds = true;
    bad25.body.bounce.set(1);
}

function update() 
{
    game.physics.arcade.collide(bad1, bad2);
    game.physics.arcade.collide(bad5, bad6);
    game.physics.arcade.collide(bad9, bad10);
    game.physics.arcade.collide(bad10, bad11);
    game.physics.arcade.collide(bad3, bad4);
    game.physics.arcade.collide(bad7, bad8);    
    game.physics.arcade.collide(bad13, bad15);
    game.physics.arcade.collide(bad16, bad17);
    game.physics.arcade.collide(good1, bad12);
    
     game.physics.arcade.collide(bad6, bad11);
    
     game.physics.arcade.collide(bad20, bad13);
    
     game.physics.arcade.collide(bad4, bad25);
    
     game.physics.arcade.collide(bad7, bad19);
    
     game.physics.arcade.collide(bad14, bad6);
    bad4.angle += 1;
    bad5.angle += 2;
    bad21.angle += 1;
    good1.angle += 1;
    bad22.angle += 2;
    bad25.angle += 2;
    if(timer == 52)
    {
        background.loadTexture('background2');
        
    }
    if(timer == 44)
    {
        background.loadTexture('background3');
    }
    if(timer == 36)
    {
        background.loadTexture('background4');
    }
    if(timer == 28)
    {
        background.loadTexture('background5');
    }
    
    
    if(timer == 22)
    {
        background.loadTexture('background6');
    }
    if(timer == 14)
    {
        background.loadTexture('background7');
    }
    if(timer == 0) 
    {
        gameOver();
    }
}


