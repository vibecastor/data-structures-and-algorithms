'use strict';

const Animals = class Animals {
  constructor() {
    this.cat = {};
    this.dog = {};
    this.timestamp = this.timestamp;
  }
};


const AnimalShelter = class AnimalShelter {
  constructor() {
    this.catShelter = [];
    this.dogShelter = [];
  }
  enQueue(animal) {
    if (this.cat) {
      this.catShelter.timestamp.unshift(this.cat);
    }
    if (this.dog) {
      this.dogShelter.timestamp.unshift(this.dog);
    }
  }
  deQueue(pref) {
    if (this.cat) {
      this.catShelter.shift();
    }
    if (this.dog) {
      this.dogShelter.shift();
    }
    let nextCat = this.catShelter.peek();
    let nextDog = this.dogShelter.peek();
    }
    if () {

    }  
    }
  }
};

