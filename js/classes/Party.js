class Party {

	constructor(container_element, party_size) {

		this.container_element = container_element;
		this.party_size = party_size;
		this.members = [];
		this.ResetData();

		for (var i = 0; i < this.party_size; i++) {
			this.members.push(new Character(i, 'Warrior', 'Boris'));
		}
	}


	ResetData() {
		this.available_names = wol.data.names;
		this.availale_jobs = wol.data.jobs;
	}

	Animate() {
		this.members.forEach(function(member) { member.Animate(); });
	}

};
