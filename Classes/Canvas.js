class Canvas {
	constructor(sceneWidth, sceneHeight, id){
		this.sceneWidth = sceneWidth;
		this.sceneHeight = sceneHeight;
		
		this.canvasID = document.getElementById(id);
		this.context = this.canvasID.getContext("2d");
		
		this.start();
	}
	
	start(){
		this.canvasID.width = this.sceneWidth;
		this.canvasID.height = this.sceneHeight;
	}
	
	clear(){
		this.context.clearRect(0, 0, this.sceneWidth, this.sceneHeight);
	}
}