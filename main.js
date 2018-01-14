var canvas;
var player;
var goal;
var vector;

var distanceX, distanceY;
var shapefactory;
var keyboard;


function Init(){
	canvas = new Canvas(1200, 700, "canvas");
	shapefactory = new ShapeFactory();

	player = shapefactory.MakeShape("player", 300, 300, 100, 100, "#7fffd4");
	
	goal = shapefactory.MakeShape("goal", 50, 50, 100, 100, "white");
	
	vector = new Vector2D(400, 400);
	keyboard = new Input();
	

	GetDistance();
	Update();
}

function Update(){
	requestAnimationFrame(Update);
	canvas.clear();
	
	goal.draw(canvas.context);
	player.draw(canvas.context);
	
	if (keyboard.keyDown("e")){
		if (player.expandingBool){
			player.ChangeSize((player.expandingSpeed + 2));
		} else{
			player.ChangeSize((-player.expandingSpeed - 2));
		}
		
	}
	ChangeForm();
	CheckGoal();
}

function GetDistance(){
	distanceX = vector.GetDistanceX(player, goal);
	distanceY = vector.GetDistanceY(player, goal);
}

function CheckGoal() {
	if (player.direction == "left" && player.x <= goal.x && player.y <= goal.y){
		ResetGoal("right");
		GetDistance();
		player.expandingBool = false;
		player.direction = "right";
		
	} else if (player.direction == "left"){
		player.expandingBool = true;
	}
	
	if (player.direction == "right" && player.x >= goal.x && player.y >= goal.y){
		ResetGoal("left");
		GetDistance();
		player.expandingBool = true;
		player.direction = "left";
	} else if (player.direction == "right"){
		player.expandingBool = false;
	}
	
	player.Move((distanceX / vector.x), (distanceY / vector.y));
}

function ResetGoal(screenSide){
	switch(screenSide){
		case "left":
			newX = Math.floor((Math.random() * (canvas.sceneWidth / 2)) + goal.width);
			newY = Math.floor((Math.random() * (canvas.sceneHeight)) + goal.height);
			break;
		case "right":
			newX = Math.floor((Math.random() * ((canvas.sceneWidth / 2) * 2)) + goal.width);
			newY = Math.floor((Math.random() * (canvas.sceneHeight)) + goal.height);
			break;
	}
	goal.NewPosition(newX, newY);
}


function ChangeForm(){
	if (player.width <= 1 || player.height <= 1){
		player.width = 1;
		player.height = 1;
	}
	
	if (player.expandingBool){
		player.ChangeSize(-player.expandingSpeed);
	} else{
		player.ChangeSize(player.expandingSpeed);
	}
	
}



Init();