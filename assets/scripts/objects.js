const person = {
  name: 'Have',
  age: 30,
  hobbies: ['Gym', 'Swmming'],
  greet: function () {
    
  }
};

// person.age = 35;

delete person.age;
person.isAdmin = true;

console.log(person);