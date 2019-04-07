
class Centaur {
	constructor(name, breed, cranky,standing, layingDown){
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.counter = 0;
		this.layingDown = false;
	}

	shoot(){
		this.checkCranky();
		if(this.cranky === true){
			return 'NO!'
		} else {
		return 'Twang!!!';
		}
	}
	
	run(){
		this.checkCranky();
		if (this.cranky ===true){
			return 'NO!'

			}else {
		return 'Clop clop clop clop!!!'
	}
}

	checkCranky(){
		this.counter++;
		if (this.counter >= 3 || this.layingDown === true){
			this.cranky = true;
			return 'NO!';
		}
	}

	sleep(){

		if (this.standing === true ){
			return 'NO!';
		} else (this.layingDown === true)
			this.cranky = false;
			this.counter = 0;
			return 'ZZZZ';	

		}
	layDown(){
		this.layingDown = !this.layingDown
		this.standing = !this.standing;
	}

	standUp(){
		this.layingDown = !this.layingDown;
		this.standing = !this.standing;
	
	}

	drinkPotion(){
		 if (this.standing === true){
		 	this.cranky = !this.cranky;
		 } else {
			return 'Not while I\'m laying down!';
		}
	}

};



module.exports = Centaur;