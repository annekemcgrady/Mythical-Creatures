
class Dragon{
	constructor(name, rider, color, hungry){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.counter =0;
	}
		eat() {
			this.counter++;
			if (this.counter >2) this.hungry = false;
		}
	}

var dragon = new Dragon;

var dragon1 = new Dragon ("Jeff");

var dragon2 = new Dragon("Louisa");

var dragon = new Dragon("Saphira", "Eragon", "blue");

var dragonJosh = new Dragon("Josh", "","", true)

var dragonLadyVox = new Dragon("Lady Vox");

dragonLadyVox.eat();
dragonLadyVox.eat();
dragonLadyVox.eat();


module.exports = Dragon;