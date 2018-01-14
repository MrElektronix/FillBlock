class Vector2D {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	
	GetDistanceX(object, target){
		distanceX = (object.x - target.x);
		
		return distanceX;
	}
	
	GetDistanceY(object, target){
		distanceY = (object.y - target.y);
		
		return distanceY;
	}
}