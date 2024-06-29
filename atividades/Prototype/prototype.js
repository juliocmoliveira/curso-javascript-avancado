// Passo 1: Criação da função construtora Vehicle
function Vehicle(make, year) {
    this.make = make;
    this.year = year;
  }
  
  // Passo 2: Adição do método getDetails ao protótipo de Vehicle
  Vehicle.prototype.getDetails = function() {
    return `Make: ${this.make}, Year: ${this.year}`;
  };
  
  // Passo 3: Criação da função construtora Car e estabelecimento da herança
  function Car(make, year, model) {
    Vehicle.call(this, make, year); // Chama o construtor de Vehicle
    this.model = model;
  }
  
  // Estabelece a herança de Vehicle
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  // Passo 4: Adição do método getCarDetails ao protótipo de Car
  Car.prototype.getCarDetails = function() {
    return `${this.getDetails()}, Model: ${this.model}`;
  };
  
  // Passo 5: Criação de uma instância de Car e teste do método getCarDetails
  const myCar = new Car('Toyota', 2021, 'Corolla');
  console.log(myCar.getCarDetails()); // Make: Toyota, Year: 2021, Model: Corolla