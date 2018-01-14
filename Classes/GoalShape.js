class GoalShape extends Rectangle{
	constructor(x, y, width, height, color){
		super(x, y, width, height, color);
	}
	
	NewPosition(newX, newY){
		this.x = newX;
		this.y = newY;
	}
	
	NewSize(newWidth, newHeight) {
		this.width = newWidth;
		this.height = newHeight;
	}
}