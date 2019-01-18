class Character  {

	constructor(slot, job, name) {

		this.slot = slot;
		this.job = wol.data.jobs[job];
		this.name = name;

		this.sprite = new Sprite(
			"sprite_" + slot,
			wol.data.spritesheet_url,
			wol.data.sprite_width,
			wol.data.sprite_height,
			wol.data.sprite_frames,
			this.job.spritesheet_index,
			wol.data.sprite_animation_speed
		);
	}

	Animate() {
		this.sprite.Animate();
	}
};

