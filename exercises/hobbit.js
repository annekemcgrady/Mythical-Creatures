class Hobbit{
	constructor (name, age){
	this.name = name;
	this.disposition = 'homebody';
	this.age = 0;
	this.isShort = true;
	this.old = false;
	this.hasRing = false;
	if(this.name === "Frodo") {
		this.hasRing = true;
	} if (this.name !=="Frodo") {
		this.hasRing = false;
	}
  }

  celebrateBirthday(){
   	this.age ++;
  	if (this.age <= 32){
  	this.adult = false;
  } else if (this.age > 32 && this.age <101){ 
    this.adult = true;
  } else if (this.age >=101) {
  	this.old = true;
  }
 };

};

module.exports = Hobbit;





