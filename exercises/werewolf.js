class Werewolf {
	constructor(name, location, human, wolf){
	this.name = name;
	this.location = location;
	this.human = human || true;
	this.wolf = false;
	this.hungry = false;
	}


change(){

	this.human = !this.human;
	this.wolf = !this.wolf;
	this.hungry = !this.hungry;
}

eat(victim){
	if(this.human ===true){
		return;
	}
	victim.alive = false;
	this.human = !this.human;
}

};






module.exports = Werewolf;