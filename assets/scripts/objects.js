const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'green';
movieList.style.display = 'block';

const person = {
  'first name': 'Have',
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

console.log(person['first name']);