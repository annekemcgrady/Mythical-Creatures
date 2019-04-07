
class Fairy {
	constructor(name, dust, obj, humanWards){
		this.name = name; 
		this.dust = dust || 10;
		this.disposition = 'Good natured';
		this.humanWards = [];
		this.clothes = {
			dresses: ['Iris']
		}
		this.counter = 0;
		
	}

	receiveBelief(){
		this.dust++;

	}

	believe(){
		this.dust+=10;
	}

	makeDresses(flowers){
		
		this.clothes.dresses = this.clothes.dresses.concat(flowers);
		console.log(this.clothes.dresses.concat(flowers))
		console.log(this.clothes.dresses);
	}
	provoke(){
		this.disposition = 'Vengeful';
	}

	replaceInfant(infant){
		this.counter++
		if (this.disposition === 'Vengeful' && this.counter <3){
		infant.disposition = 'Malicious';
		this.humanWards.push(infant);
	
		} 

		else {
			this.disposition = 'Good natured';
			return infant;
		}

		}


	}










module.exports = Fairy;