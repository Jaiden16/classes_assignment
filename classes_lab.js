// # Class Exercises
//
// (1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)
//
// ## Question 1
//
// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name.
//Create 2 instances of a `Person`. Print one of their first names.
class Person{
  constructor(firstName, middleName, lastName){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  fullName(){
    let name = `${this.firstName} ${this.middleName} ${this.lastName}`;
    console.log(name);
  }
}

let jonathan = new Person('Jonathan', 'Jaiden', 'Fagan');
let reione = new Person('Reione', 'Yahtay', 'Johnson');
console.log(jonathan.firstName);

// b. Write a method in `Person` called `fullName` that will return a
//formatted string of an instance's full name. Call this method on both the instances you created in part a.
jonathan.fullName();
reione.fullName();


// ## Question 2
//
// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
//
//
// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
class Book {
  constructor(title,author,rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }

  isGood(){
    if (this.rating > 7) {
    return true;
  }else {
    return false;
  }
 }
}

let ofMiceAndMen = new Book('Of Mice and Men', 'John Stienbeck', 8);
console.log( ofMiceAndMen.isGood());


// ## Question 3

// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
class Dog {
  constructor(name,breed,mood,hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }

  playFetch(){
    this.hungry = true;
    this.mood = 'playful';
    console.log('Ruff');
  }

  feed(){
    if(this.hungry === true){
      this.hungry = false;
      console.log('Woof!')
    }else{
      console.log('The dog doesn\'t look hungry');
    }
  }

  toString(){
    return `Name: ${this.name}, Breed: ${this.breed}, Mood: ${this.mood}, Hungry: ${this.hungry}`;
  }
}

let pipper = new Dog('Piper', 'lab', 'playful', false);

console.log(pipper.toString());


// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`,
//set its mood property to `playful`, and log "Ruff!"

// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and
//print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

// d. Add a method called `toString` that returns a description of the dog:

// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273
}




// b. Make a class called `Celsius` that has one property:
//`celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
//
class Celsius{
  constructor(celsius){
    this.celsius = celsius;
  }

  ///i need to create a function that returns fahrenheit from celsius


  getFahrenheitTemp(){
    return this.celsius * 1.8 + 32;
  }

  getKelvinTemp(){
    return this.celsius + 273;
  }

  isBelowFreezing(){
    if(this.celsius < 0){
      return true;
    }else{
      return false;
    }
  }
}

let outsideTempt = new Celsius(10.0);
console.log(outsideTempt.celsius);
console.log(outsideTempt.getKelvinTemp());
console.log(outsideTempt.getFahrenheitTemp());
console.log(outsideTempt.isBelowFreezing());

// c. Give `Celsius` a method called `isBelowFreezing` that
//returns a `Bool` (true if the temperature is below freezing).
//
// ## Question 5
//
// a. Create a class called `Movie` that has
//properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
class Movie{
  constructor(name,year,genre,cast,description){
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }
  blurb(){
    return `Title: ${this.name}, Year: ${this.year}, Genre: ${this.genre}, Cast: ${this.cast}, \nDescription: ${this.description}`;
  }
}

let menInBlack = new Movie('Men in Black', 1998, 'action', 'Will Smith, Tommy Lee Jones',
"Great movie, aliens and shit!");
console.log(menInBlack);
console.log(menInBlack.blurb());
//
// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.


// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
//
//
// ## Question 6
//
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
function Vector(x,y){
  this.x = x;
  this.y = y;
}


// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
Vector.prototype.plus = function(vector){
  return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector){
  return new Vector(this.x - vector.x, this.y - vector.y);
}

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
Vector.prototype.getLength = function(){
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
}



// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)
//
// ```js
 var v1 = new Vector(1, 2)
 var v2 = new Vector(2, 3)
 console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
 console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
 var v3 = new Vector(3, 4)
 console.log(v3.getLength());
// // => 5
// ```
//
// ## Question 7
//
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
class Car {
  constructor(make,model) {
    this.make = make;
    this.model = model;
  }
}
let corvette = new Car("Chevrolette", "Corvette");
// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
class Bike {
  constructor(gears,hasBell) {
    this.gears = gears;
    this.hasBell = hasBell;
  }
  static numberOfWheels(wheels){
    if (wheels === 2){
      return `This has ${wheels} wheels, this is a bike`;
    }else if (wheels === 4){
      return `This has ${wheels} wheels, this is a car`;
    }else{
      return `What the hell is this?`
    }
  }
}
let bmx = new Bike(4,true);

// c. Give each class a static method called `numberOfWheels`
//that returns the number of wheels (2 for bikes, 4 for cars).
//Why does it make sense for this to be a static method instead of an instance method?

//Static method apply's to all instances

// ## Question 8
//
// a. Make a class called `Vehicle` with properties `color` and `name`.
//Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
class Vehicle {
  constructor(color,name) {
    this.color = color;
    this.name = name;
  }
  makeSound(){
    console.log('WHHOOSSSH');
  }
}


//
// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
//
class Car2 extends Vehicle {
  constructor(color,name,make,model) {
    super(color, name);
    this.make = make;
    this.model = model;
  }
}

class Bike2 extends Vehicle {
  constructor(color,name,gears,hasBell) {
    super(color,name);
    this.gears = gears;
    this.hasBell = hasBell;
  }
  static numberOfWheels(wheels){
    if (wheels === 2){
      return `This has ${wheels} wheels, this is a bike`;
    }else if (wheels === 4){
      return `This has ${wheels} wheels, this is a car`;
    }else{
      return `What the hell is this?`
    }
  }
}
let mustang = new Car2("red","Carry McCarface","Ford", "Mustang");
console.log(mustang);

let moutianBike = new Bike2("Green", "Bikey McBikeface", 4, true);
console.log(moutianBike);





// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
//
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
