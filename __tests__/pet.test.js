const Pet = require('../src/pet');

describe('creating an object from a constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

describe('naming of pet', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
  });

  describe('age of pet', () => {
    it('has an initial age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
    it('increments the age of the pet by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.age = 31
      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
  });
  
  describe('hunger of pet', () => {
    it('has an initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
    it('increase the hunger of the pet by 5', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
    });
  });

  describe('pet fitness', () => {
    it('has an initial fitness of 10', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });
    it('decrease the fitness of the pet by 3', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('walking the pet', () => {
    it('increases the pet fitness by 4', () => {
      const pet = new Pet('Fido');
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a maximum of 10', () => { 
      const pet = new Pet('Fido');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.fitness = 0;
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('feeding the pet', () => {
    it('feeds the pet, decreasing hunger by 3', () => {
      const pet = new Pet('Fido');
      pet.hunger = 7;
      pet.feed();
      expect(pet.hunger).toEqual(4);
    });
    it('decreases hunger with a minimum value of 0', () => {
      const pet = new Pet('Fido');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('check health of the pet', () => {
    it('returns a string if pet fitness is 3 or less', () => {
      const pet = new Pet('Fido');
      pet.fitness = 2;
      pet.checkUp();
      expect(pet.checkUp()).toEqual('I need a walk!');
    });
    it('returns a string if pet hunger is 5 or more', () => {
      const pet = new Pet('Fido');
      pet.hunger = 5;
      expect(pet.checkUp()).toEqual('I am hungry!');
    });
    it('returns string if fitness is 3 or less and hunger is 5 or more', () => {
      const pet = new Pet('Fido');
      pet.fitness = 3;
      pet.hunger = 6;
      expect(pet.checkUp()).toEqual('I am hungry and I need a walk!');
    });
    it('returns string if fitness is over 3 and hunger is below 5', () => {
      const pet = new Pet('Fido');
      pet.fitness = 7;
      pet.hunger = 2;
      expect(pet.checkUp()).toEqual('I feel great!');
    });
  });

  describe('check if pet is alive', () => {
    it('returns a false boolean value if pet fitness is 0 or below', () => {
      const pet = new Pet('Fido');
      pet.fitness = 0;
      pet.isAlive;
      expect(pet.isAlive).toEqual(false);
      pet.fitness = -1;
      pet.isAlive;
      expect(pet.isAlive).toEqual(false);
    });
    it('returns a false boolean value if pet hunger is 10 or more', () => {
      const pet = new Pet('Fido');
      pet.hunger = 10;
      pet.isAlive;
      expect(pet.isAlive).toEqual(false);
      pet.hunger = 12;
      pet.isAlive;
      expect(pet.isAlive).toEqual(false);
    });
    it('returns a false boolean value if pet age is 30 or more', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      pet.isAlive;
      expect(pet.isAlive).toEqual(false);
      pet.age = 33;
      pet.isAlive;
      expect(pet.isAlive).toEqual(false);
    });
    it('returns a true boolean value if pet is alive', () => {
      const pet = new Pet('Fido');
      pet.fitness = 5;
      pet.hunger = 5;
      pet.age = 20;
      pet.isAlive;
      expect(pet.isAlive).toEqual(true);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.age = 31
      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
  });