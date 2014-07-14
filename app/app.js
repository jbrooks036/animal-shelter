/* global prompt:true */
'use strict';

var prompt = require('sync-prompt').prompt;

var cats = [];
var dogs = [];
var bunnies = [];
var people = [];

var person1 = {name:'bob', age:'10', pets:[]};
var person2 = {name:'sam', age:'5', pets:[]};
var person3 = {name:'jill', age:'7', pets:[]};

people.push(person1, person2, person3);

var choice = prompt('add a (c)at, (d)og, (b)unny, or (q)uit: ');

function addCat () {
  var cat = [];
  cat.name = prompt('cat name: ');
  cat.habitat = prompt('cat lives indoors or outdoors: ');
  cat.neutered = prompt('has cat been spayed/neutered: ');
  return cat;
}

function addDog () {
  var dog = [];
  dog.name = prompt('dog name: ');
  dog.breed = prompt('dog breed: ');
  dog.weight = prompt('dog weight: ');
  return dog;
}

function addBunny() {
  var bunny = [];
  bunny.name = prompt('bunny name: ');
  bunny.likesCarrots = prompt('bunny likes carrots (y/n): ');
  bunny.hasMate = prompt('bunny has mate (y/n): ');
  return bunny;
}

while (choice !== 'q') {

  switch (choice) {
    case 'b':
    bunnies.push(addBunny());
    break;

    case 'c':
    cats.push(addCat());
    break;

    case 'd':
    dogs.push(addDog());
    break;

  case 'default':
  }

  choice = prompt('add a (c)at, (d)og, (b)unny, or (q)uit: ');

}

console.log('Cats: ', cats);
console.log('Dogs: ', dogs);
console.log('Bunnies: ', bunnies);

// find the person who will adopt?
var option = prompt('Person - (b)ob, (s)am, (j)ill, or (q)uit: ');
while (option !== 'q') {
  for (var p=0; p < people.length; p++) {
    if (people[p].name[0] === option) {
      var client = people[p];
      console.log(client);
      break;
    }
  }
  option = prompt('Person - (b)ob, (s)am, (j)ill, or (q)uit: ');
}

// what type of pet to adopt?
var animals;
var choice = prompt('what type of pet? (d)og, (c)at, (b)unny: ');
switch(choice){
  case 'c':
    console.log('Cats', cats);
    animals = cats;
    break;
  case 'd':
    console.log('Dogs', dogs);
    animals = dogs;
    break;
  case 'b':
    console.log('Bunnies', bunnies);
    animals = bunnies;
    break;
}

var name = prompt('what is the name of the animal you want to adopt? ');

// find the pet by that name
var animal, index;
for (var a = 0; a < animals.length; a++) {
  if (animals[a].name === name) {
    animal = animals[a];
    console.log(animal);
    index = a;
  }
}

// do the adoption
animals.splice(index, 1);
client.pets.push(animal);

// display the results
console.log('after adoption: client', client);
console.log('after adoption: animals', animals);

