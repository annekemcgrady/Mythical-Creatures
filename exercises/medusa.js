class Medusa {
	constructor(name){
	this.name = name;
	this.statues = [];
	}

stare(victim){
	victim.stoned = true;
	this.statues.push(victim);
	// if there are three or fewer statues
	// push victim into array for statues
	//if there are three or more in statues
	//remove the first victim
	if (this.statues.length > 3) {
		this.statues[0].stoned = false;
		this.statues.shift();
	}
  }

};


module.exports = Medusa;