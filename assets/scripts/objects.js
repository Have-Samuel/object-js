const person = {
  name: 'Have',
  age: 30,
  hobbies: ['Gym', 'Swmming'],
  greet: function () {
    
  }
};

// person.age = 35;
// person.age = null means that
// later you will set age to some value
delete person.age;
person.isAdmin = true;

console.log(person);