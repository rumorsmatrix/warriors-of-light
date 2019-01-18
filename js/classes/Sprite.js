class Sprite {

	constructor(container, image, width, height, frames, row) {
		this.container = container;
		this.image = image;
		this.width = width;
		this.height = height;
		this.frames = frames;
		this.row = row;
		this.start_col = 0;
		this.animating = false;
		this.x = this.start_col * this.width;
	}


	Render() {
		//document.getElementById(this.container).style.backgroundImage = "url(" + this.image +")";
		//document.getElementById(this.container).style.backgroundPosition = "" + (this.x + 6) + "px " + (this.row * this.height) * -1 + "px";
	}


	StartAnimating() {
		this.animating = true;
	}

	StopAnimating() {
		this.animating = false;
	}

	Animate() {
		if (this.animating === false) return;

		this.x = this.x + this.width;
		this.loop_point = (this.start_col * this.width) + (this.width * (this.frames-1));
		if (this.x > this.loop_point)  {
			this.x = (this.start_col * this.width);
		}

		this.Render();
	}



}
