class Unicorn {
  constructor(name, color) {
  	console.log(name);
  	this.name = name;
  	if(color === undefined){
  		this.color = "white";
  		} else {
  			this.color = color;
  		}
  	}
  	isWhite() {
  		if (this.color !== "white"){
  			return false;
  		}
  	}
  	says(message){
  		return `**;* ${message} *;**`;
  	}
  }

 

module.exports = Unicorn;









// read the test
// ask yourself if its going to fail and why
// run the test 
// make it pass