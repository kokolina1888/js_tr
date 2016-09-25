var game = function(){
	//set the width and height of the game
	this._width 	= 1920;
	this._height 	= 1080;
	this._center 	= {
		x: Math.round(this._width / 2),
		y: Math.round(this._height / 2)
	};

	//set up the rendering surface
	this.renderer = new PIXI.autoDetectRenderer(this._width, this._height);
	document.body.appendChild(this.renderer.view);

	//create the main stage to draw on
	this.stage = new PIXI.Stage();
	
	//store rocks
	this.rocks = [];

	//start running the game
	this.build();
};
Game.prototype = {
	/*
	* Build the scene and begin animating
	*/
	build: function(){
		//draw the background
		this.setupBg();

		//setup the start screen
		this.setupMenu();

		//begin the first frame
		requestAnimationFrame(this.tick.bind(this));
	},
	/*
	* Set up the background image
	*/
	setupBg: function(){
		//return
		//create the texture
		var bg = new PIXI.Sprite.fromImage('./images/bg.jpg');

		//position the background in the center
		bg.anchor.x = 0.5;
		bg.anchor.y = 0.5;
		bg.position.x = this._center.x;
		bg.position.y = this._center.y;

		//mount onto the stage
		this.stage.addChild(bg);
	},
	setupMenu: function(){
		//create game name display
		var name = new PIXI.Text('stone samurai', {
			font: 'bold 100px Arial',
			fill: '#7da6de',
			stroke: 'black',
			strokeThickness: 8

		});

		name.anchor.x = 0.5;
		name.anchor.y = 0.5;
		name.position.x = this._center.x;
		name.position.y = 100;

		//create the button graphic
		var button = new PIXI.Graphics();
		window.test = button;
		button.lineStyle = (10, 0x000000);
		button.beginFill = (0xFFD800);
		button.drawCircle(this._center.x, this._center.y, 150);
		button.endFill();

		//create the play icon
		var icon = new PIXI.Graphics();
		
		icon.beginFill = (0x000000);
		icon.moveTo(this._center.x + 100, this._center.y);
		icon.lineTo(this._center.x -60, this._center.y - 80);
		icon.lineTo(this._center.x -60, this._center.y + 80);
		icon.endFill();

		//add the button to the stage
		button.addChild(icon);
		this.stage.addChild(button);
		this.stage.addChild(name);

		//turn this into a button
		button.interactive = true;
		button.buttonMode = true;
		button.click = function(){
			document.body.style.cursor = 'default';
			this.stage.removeChild(button);
			this.stage.removeChild(name);
			this.startGame();
		}.bind(this);
	},

/*
* Start the gameplay
*/
startGame: function(){
//setup timer to throw random rocks
this.randomRocks();

//setup the points display

this._score = 0;
this.score = new PIXI.Text('*' + this._score, {
font: 'bold 40px Arial',
fill: '#fff',
stroke: 'black',
strokeThickness: 6,
align: left
});	
this.score.position.x = 20;
this.score.position.y = 20;
this.stage.addChild(this.score);

//setup the lives display

this._lives = 5;
this.lives = new PIXI.Text('+' + this._lives, {
	font: 'bold 40px Arial',
	fill: '#fff',
	stroke: 'black',
	strokeThickness: 6,
	align: 'left'
});
this.lives.position.x = 26;
this.lives.position.y= 70;
this.stage.addChild(this.lives);
},

/**
* Game over!
*/

endGame: function(){
	//clear the stage
	for (var i = 0; i < this.rocks.length; i++) {
	if (this.rocks[i]) {
		this.rocks[i]._tween1.stop();
		this.rocks[i]._tween2.stop();
		this.stage.removeChild(this.rocks[i]);
	}
	}
	this.rocks = [];
	this.stage.removeChild(this.score);
	this.stage.removeChild(this.lives);

	//cancel the rocks
	clearTimeout(this.timer);

	//show the start screen
	this.setupMenu();

},
/**
* Randomly fire a few rocks into the air every seconds
*/
ranndomRocks:function(){
var rand = Math.ceil(1000 + (Math.random()*4)*1000);
this.timer = setTimeout(functiion(){
	//generate a random number of rocks with varying props
	var num = Math.ceil(Math.random()*3);
	for(var i = 0; i < num; i++){
		// create the texture of rocks 
		var rock = new PIXI.Sprite.fromImage('./images/'+(Math.random()>0.5?'';))
		//7.04
	}
})
}

		}



