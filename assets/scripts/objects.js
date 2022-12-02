const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'green';
movieList.style.display = 'block';

const anyVariableFromTheUser = 'level';

let person = {
  'first name': 'Have',
  age: 30,
  hobbies: ['Gym', 'Swmming'],
  [anyVariableFromTheUser]: '...', // can be used
  greet: function () {
    alert('Hey There!');
  },
  5.8: 'Hello',
};

// person.age = 35;
// person.age = null means that
// later you will set age to some value
delete person.age;
person.isAdmin = true;
// Dynamic Property Access
const keyName = 'first name';

console.log(person[keyName]);
console.log(person[5.8]);
console.log(person);