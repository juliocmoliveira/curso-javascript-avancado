// Receita mágica (protótipo) para todos os animais de estimação
function Pet() {
    this.type = "Pet";
  }
  Pet.prototype.run = function() {
    console.log("Running...");
  };
  Pet.prototype.sleep = function() {
    console.log("Sleeping...");
  };
  
  // Receita mágica (protótipo) específica para Cachorro
  function Dog() {
    Pet.call(this); // Herda propriedades
    this.sound = "Bark";
  }
  Dog.prototype = Object.create(Pet.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.bark = function() {
    console.log("Barking...");
  };
  
  // Receita mágica (protótipo) específica para Gato
  function Cat() {
    Pet.call(this); // Herda propriedades
    this.sound = "Meow";
  }
  Cat.prototype = Object.create(Pet.prototype);
  Cat.prototype.constructor = Cat;
  Cat.prototype.meow = function() {
    console.log("Meowing...");
  };
  
  // Testando
  const myDog = new Dog();
  myDog.run();  // Running...
  myDog.bark(); // Barking...
  myDog.sleep(); // Sleeping...
  
  const myCat = new Cat();
  myCat.run();  // Running...
  myCat.meow(); // Meowing...
  myCat.sleep(); // Sleeping...