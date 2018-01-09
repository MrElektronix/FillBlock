class Vector2D {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	
	MoveTowards(object, target, speed){
		var distanceX = object.x - target.x;
		var distanceY = object.y - target.y;
		
		speed.x * 100;
		speed.y * 100;
		
		(object.x -= (distanceX / speed.x));
		(object.y -= (distanceY / speed.y));
	}
}