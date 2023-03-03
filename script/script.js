// Task #1

const user = {};
user.name = 'John';
user.surname = 'Smith';
// console.log(user)

user.name = 'Pete';
// console.log(user)

delete user.name;
console.log(user); // if needed

// Task #2

const user = {
  name: 'John'
}; // это будет работать? - Ага

user.name = 'Pete';

console.log(user) // {name: 'Pete'}

// Task #3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);