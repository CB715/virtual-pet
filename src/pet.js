
const MAXIMUM_FITNESS = 10;
const LOW_FITNESS = 3;
const MINIMUM_HUNGER = 0;
const HIGH_HUNGER = 5;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function () {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    }
    else {
        this.fitness = MAXIMUM_FITNESS;
    }
}

Pet.prototype.feed = function () {
    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
    this.hunger -= 3;
    }
    else {
    this.hunger = MINIMUM_HUNGER;
    }
}
Pet.prototype.checkUp = function () {
    if (this.fitness <= LOW_FITNESS && this.hunger >= HIGH_HUNGER) {
        return ('I am hungry and I need a walk!');
     }
    if (this.fitness <= LOW_FITNESS ) {
       return ('I need a walk!');
    }
    if (this.hunger >= HIGH_HUNGER) {
        return ('I am hungry!');
    }
    else {
        return ('I feel great!');
    };
};
Pet.prototype.isAlive = function () {
    if(this.fitness <= 0) {
        return false;
    }
    if(this.hunger >= 10) {
        return false;
    }
    if(this.age >= 30) {
        return false;
    }
    else {
        return true;
    }
};


module.exports = Pet;

