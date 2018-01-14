class PlayerShape extends Rectangle {
	constructor(x, y, width, height, color){
		super(x, y, width, height, color);
		
		this.expandingBool;
		this.expandingSpeed;
		this.direction;
			
		this.Start();
	}
	
	Start(){
		this.expandingBool = true;
		this.expandingSpeed = 1;
		this.direction = "right";
	}
	
	Move(mx, my){
		this.x -= mx;
		this.y -= my;
	}
	
	ChangeSize(speedXY){
		this.width -= speedXY;
		this.height -= speedXY;
	}
}