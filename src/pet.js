const MAXIMUM_FITNESS = 10;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
  }
  
  Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -=3;

  };
  
  Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
  };
  
  Pet.prototype.feed = function() {
    if(this.hunger>0){
      this.hunger -=3;
      if(this.hunger<0){
        this.hunger = 0;
      }
    }
  };

  Pet.prototype.checkUp = function () {
    if(this.fitness<=3 && this.hunger>=5){
      console.log('I am hungry AND I need a walk');
    }
    else if(this.fitness<=3){
      console.log('I need a walk');
    }
    else if(this.hunger>=5){
      console.log('I am hungry');
    }
    else {
      console.log('I feel great!');
    }
  };

module.exports = Pet;