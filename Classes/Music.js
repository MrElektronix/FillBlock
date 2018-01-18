class Music {
	constructor(audioName){
		this.audioName = audioName;
		this.musicFile;
		this.playing;
		this.start();

	}
	
	start(){
		this.musicFile = new Audio(this.audioName);
	}
	
	PlayMusic(){
		this.playing = true;
		this.musicFile.play();
	}
	
	PauseMusic(){
		this.playing = false;
		this.musicFile.pause();
	}
	
	MuteMusic(){
		this.musicFile.mute = true;
	}
	
	UnmuteMusic(){
		this.musicFile.mute = false;
	}
	
	RepeatMusic(){
		var waitTime = 0.02;
		if (this.musicFile.currentTime > this.musicFile.duration - waitTime && this.playing){
			this.PlayMusic();
		}
	}
}