// Create a BankAccount constructor function that takes a user's name and balance. Add a method called deposit(amount) that increases the balance and logs the new balance, and another method withdraw(amount) that decreases the balance only if there are enough funds. Create 3 user accounts and simulate deposits and withdrawals.

//Psuodocode
//
//Create user accounts
//Simulate deposits and withdrawals

function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
  this.deposit = function(amount){
    console.log("New balance after deposit: " + this.balance);
  }

  this.withdraw = function(amount){
    if(amount <= this.balance){
      console.log("New balance after withdrawal: " + this.balance);
    }
    else{
      console.log("Insufficient funds for withdrawal");
    }
  }
}

var user1 = new BankAccount("User1", 1000);
var user2 = new BankAccount("User2", 1500);
var user3 = new BankAccount("User3", 500);

user1.deposit(500);
user2.withdraw(200);
user3.deposit(1000);
user1.withdraw(1500);



//Create an object taskList with a property tasks (an array of task names). Add methods: addTask(task) to add a task, completeTask(task) to remove it, and listTasks() to print all remaining tasks. Test the object with 4–5 tasks and demonstrate the functionality of each method.
//Psuocdoceode
// Create an object taskList
//create an empty array of tasks
// Test the object with 4–5 tasks and demonstrate the functionality of each method
let taskList = {
  tasks: [],

  addTask: function (task) {
    this.tasks.push(task);
  },

  completeTask: function (task) {
    let index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  },

  listTasks: function () {
    this.tasks.forEach(task => {
      console.log(task);
    });
  }
};


taskList.addTask("Task 1");
taskList.addTask("Task 2");
taskList.addTask("Task 3");
taskList.listTasks();

taskList.completeTask("Task 2");
taskList.listTasks();


//Create a Student object with name, scores (an array), and a method getAverage() that returns the average score. Add another method hasPassed() that returns true if the average is 50 or more, otherwise false. Create and test this for at least two students.

//Psedocode


function Student(name, scores){
  this.name = name;
  this.scores = scores;

  this.average = function(){
    if(this.scores.length === 0){
      return 0;
    }
const sumation = this.scores.reduce((acc, score) => acc + score, 0);
return sumation/this.scores.length;
  };
  this.hasPassed = function (){
    return this.average() >= 50
  }
}
  const studentOne = new Student("Mary", [60,50,80,75,90]);
  const studentTwo = new Student("Joanita", [30,20,10,50,40]);


console.log(`${studentOne.name}'s average score: ${studentOne.average()}`);
console.log(`${studentOne.name} has passed: ${studentOne.hasPassed()}`);

console.log(`${studentTwo.name}'s average score: ${studentTwo.average()}`);
console.log(`${studentTwo.name} has passed: ${studentTwo.hasPassed()}`);


//Create a ShoppingCart object with a property items (an array of item objects with name and price). Add a method addItem(item) to push new items, and a method getTotal() that returns the total cost of all items in the cart. Add 3 items and print the final total.

//Create a function
//create methods
//call the methods
function ShoppingCart(){
  this.items = [];
  this.addItem = function(item){
    this.items.push(item);
  };
  this.getTotal = function(){
    let total = 0;
    for(let i=0; i<this.items.length; i++){
      total += this.items[i].price;
    }
    return total;
  }
}
let cart = new ShoppingCart();
cart.addItem({name: "Dress", price:300});
cart.addItem({name: "Jackets", price: 500 });
cart.addItem({name: "Shoes", price: 100});

console.log(cart.getTotal());



//Create a Movie constructor that takes title, year, and rating. Add a method isClassic() that returns true if the year is before 2000, and a method recommend() that returns a string like "Highly recommended!" if rating is above 8. Create at least 3 movies and call these methods on each.

//Psuodecode
//Create afunction
//Pass parameters into the function
//Create the methods
//create movies
//call the methods

function MovieConstructor(title, year, rating){
  this.title = title;
  this.year = year;
  this.rating = rating;
  this.isClassic = function(){
    return this.year<2000;
  };
  this.recommend = function(){
    return this.rating > 8? "Highly recommended!" : "Not recommended"
  }
}
var movieOne = new MovieConstructor("The revolution", 1997, 9);
var movieTwo = new MovieConstructor("Beas master", 1999, 7.2)
var movieThree = new MovieConstructor("Mision impossible", 2010, 8.3)

console.log(movieOne.isClassic());
console.log(movieOne.recommend());
console.log(movieTwo.isClassic());
console.log(movieTwo.recommend());
console.log(movieThree.isClassic());
console.log(movieThree.recommend());














