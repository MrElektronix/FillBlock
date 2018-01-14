class ShapeFactory {
	constructor(){
		
	}
	
	MakeShape(shape, x, y, width, height, color){
		switch(shape){
			case "player":
				player = new PlayerShape(x, y, width, height, color);
				return player;
				break;
			case "goal":
				goal = new GoalShape(x, y, width, height, color);
				return goal;
				break;
		}
	}
}