class Human {
	constructor(name){
		this.name = name;
		this.encounterCounter = 0;
		this.knockedOut = false;

	}

	noticesOgre(){
	console.log(this.encounterCounter);
		if (this.encounterCounter%3===0 && this.encounterCounter > 0) {
			console.log(this.encounterCounter);
			return true;
		} else {
		return false;
	}
	}
}



module.exports = Human;