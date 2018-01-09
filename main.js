var canvas;
var playerBlock;
var goalBlock;
var vector;


function Init(){
	canvas = new Canvas(1200, 700, "canvas");
	
	playerBlock = new Rectangle(700, 400, 100, 100);
	playerBlock.color = "red";
	
	goalBlock = new Rectangle(50, 50, 100, 100);
	goalBlock.color = "white";
	
	vector = new Vector2D(5, 5);
	
	Update();
}

function Update(){
	requestAnimationFrame(Update);
	canvas.clear();
	goalBlock.draw(canvas.context);
	
	playerBlock.draw(canvas.context);
	vector.MoveTowards(playerBlock, goalBlock, vector);
	
}



Init();