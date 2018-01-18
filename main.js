var canvas;
var player;
var goal;
var vector;

var distanceX, distanceY;
var shapefactory;
var keyboard;
var scoreText;
var score;
var backgroundMusic;

function Init(){
	canvas = new Canvas(window.innerWidth, window.innerHeight, "canvas");
	shapefactory = new ShapeFactory();
	player = shapefactory.MakeShape("player", 550, 300, 100, 100, "#7fffd4");
	score = 0;
	goal = shapefactory.MakeShape("goal", 50, 50, 100, 100, "white");
	
	scoreText = new Text("Score: " + score, "50px Arial", "#9932CC", (canvas.sceneWidth / 2) - 100, 50);
	
	vector = new Vector2D(800, 800);
	keyboard = new Input();
	
	LoadAudio();
	backgroundMusic.PlayMusic();

	GetDistanceToGoal();
	
	Update();
}

function Update(){
	requestAnimationFrame(Update);
	window.onresize = setWindowSize;
	canvas.clear();
	scoreText.draw(canvas.context);
	
	goal.draw(canvas.context);
	player.draw(canvas.context);

	
	if (keyboard.keyDown("e")){
		if (player.expandingBool){
			player.ChangeSize((player.expandingSpeed + 0.9));
		} else{
			player.ChangeSize((-player.expandingSpeed - 0.9));
		}
		
	}
	ChangeForm();
	CheckGoal();
	backgroundMusic.RepeatMusic();
	
}

function GetDistanceToGoal(){
	distanceX = vector.GetDistanceX(player, goal);
	distanceY = vector.GetDistanceY(player, goal);
}

function LoadAudio(){
	backgroundMusic = new Music("Music-Files/background_music.wav");
}

function CheckGoal() {
	var valueNumber = 0.1;
	
	if (player.direction == "left" && player.x >= goal.x - 0.1 && player.x <= goal.x + 0.1 && player.y >= goal.y - valueNumber && player.y <= goal.y + valueNumber){
		SetScore();
		player.direction = "right";
		player.expandingBool = false;
		ResetGoal(player.direction);
		GetDistanceToGoal();
	}
	
	if (player.direction == "right" && player.x >= goal.x - 0.1 && player.x <= goal.x + 0.1 && player.y >= goal.y - valueNumber && player.y <= goal.y + valueNumber){
		SetScore();
		player.direction = "left";
		player.expandingBool = true;
		ResetGoal(player.direction);
		GetDistanceToGoal();
		
	}
	
	player.Move((distanceX / vector.x), (distanceY / vector.y));
	
	

}

function setWindowSize(){
	canvas.sceneWidth = window.innerWidth;
	canvas.sceneHeight = window.innerHeight;
}

function SetScore(){
	WidthCheck = player.width - goal.width;
	HeightCheck = player.height - goal.height;
	
	if (WidthCheck < 1 || HeightCheck < 1){
		WidthCheck *= -1;
		HeightCheck *= -1;
	}
	
	if (WidthCheck <= 10 || HeightCheck <= 10){
		score += 900;
		scoreText.message = "Score: " + score;
	} else if (WidthCheck <= 20 || HeightCheck <= 20){
		score += 800;
		scoreText.message = "Score: " + score;
	} else if (WidthCheck <= 30 || HeightCheck <= 30){
		score += 700;
		scoreText.message = "Score: " + score;
	} else if (WidthCheck <= 40 || HeightCheck <= 40){
		score += 600;
		scoreText.message = "Score: " + score;
	} else{
		score += 300;
		scoreText.message = "Score: " + score;
	}
	
}

function ResetGoal(screenSide){
	var newGoalX, newGoalY;
	var newGoalSize;
	
	switch(screenSide){
		case "left":
			newGoalSize = Math.floor((Math.random() * 150) + 50);
			newGoalX = Math.floor((Math.random() * (400 - newGoalSize) ) + newGoalSize);
			newGoalY = Math.floor((Math.random() * (400 - newGoalSize)) + newGoalSize);
			break;
		case "right":
			newGoalSize = Math.floor((Math.random() * 250) + 100);
			newGoalX = Math.floor((Math.random() * ((canvas.sceneWidth / 2) - newGoalSize)) + (canvas.sceneWidth / 2));
			newGoalY = Math.floor((Math.random() * ((canvas.sceneHeight) - (newGoalSize * 2) )) + newGoalSize);
			break;
	}
	
	goal.NewPosition(newGoalX, newGoalY);
	goal.NewSize(newGoalSize, newGoalSize);
}


function ChangeForm(){
	if (player.width <= 30 || player.height <= 30){
		player.width = 30;
		player.height = 30;
	}
	
	if (player.width >= 400 || player.height >= 400){
		player.width = 400;
		player.height = 400;
	}
	
	if (player.expandingBool){
		player.ChangeSize(-player.expandingSpeed);
	} else{
		player.ChangeSize(player.expandingSpeed);
	}
	
}



Init();