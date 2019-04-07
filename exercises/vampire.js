
class Vampire{
	constructor(name, pet, thirsty){
		this.name = name
		this.pet = pet || "bat"
		this.thirsty = true
	}
		drink(){
			this.thirsty = false
		}
		
	  }
	

var vampire = new Vampire('Jhun');

var vampire = new Vampire ('Brittany', 'bat');

var vampire = new Vampire ('Jeff', 'fox');

var vampire = new Vampire ('Andy', '', true);

var vampireMeeka = new Vampire ('Meeka')

vampireMeeka.drink();



module.exports = Vampire;










