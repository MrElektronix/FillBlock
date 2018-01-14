class Input {
	constructor() {
		this.keys = {};
		var self = this;
		
		document.addEventListener("keydown", function (event){
			self.keys[event.key] = true;
		});
		
		document.addEventListener("keyup", function (event){
			self.keys[event.key] = false;
		});
	}
	
	keyDown (code){
		return this.keys[code];
	}
	
}
