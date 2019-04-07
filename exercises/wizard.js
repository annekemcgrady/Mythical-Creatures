
class Wizard {

constructor (wizard) {

this.name = wizard.name;

if(wizard.bearded === false) {
	this.bearded = false;
} else {
	this.bearded = true;
}

this.isRested = true;
this.count = 0;
}

incantation(a) {
	return a.toUpperCase();
}

cast(){
	this.count ++;
	if(this.count < 3){
	return 'MAGIC BULLET';
		
	} else {
		this.isRested = false;
		return 'I SHALL NOT CAST';
	
	}
  }
};


module.exports = Wizard;