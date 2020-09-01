// Initialize an array named movies containing the titles of some of your favorite movies

let movies = ["Parasite", "Your Name", "Weathering With You"];

//Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users

let newMovie = prompt("Enter a movie that you like:");
movies.push(newMovie);

// Read the item at position i in the movies array, i entered by users

let moviePosition = prompt(
  "Enter a number between 1 to " + movies.length + ":"
);
while (moviePosition >= movies.length || moviePosition <= 0) {
  moviePosition = prompt("Invalid input. Please enter another value: ");
}
alert(
  "The movie at the corresponding position is " +
    movies[moviePosition - 1] +
    "."
);

//Update the first item of the movies array into movieTitle, movieTitle entered by users

let movieTitle = prompt("Enter a movie that you like: ");
movies[0] = movieTitle;

// Update a item at position i of the movies into movieTitle, i and movieTitle entered by users

let moviePosition = prompt(
  "Enter a number between 1 to " + movies.length + ":"
);
while (moviePosition >= movies.length || moviePosition <= 0) {
  moviePosition = prompt("Invalid input. Please enter another value: ");
}
let movieTitle = prompt("Enter a movie that you like: ");
movies[moviePostiton - 1] = movieTitle;

// Delete 1 item at position i from movies array movies, i entered by users

let moviePosition = prompt(
  "Enter a number between 1 to " + movies.length + ":"
);
while (moviePosition >= movies.length || moviePosition <= 0) {
  moviePosition = prompt("Invalid input. Please enter another value: ");
}

movies.splice(moviePosition - 1, 1);

// Delete n item at position i from movies array, i and n entered by users

let moviePosition = prompt(
  "Enter a number between 1 to " + movies.length + ":"
);
while (moviePosition >= movies.length || moviePosition <= 0) {
  moviePosition = prompt("Invalid input. Please enter a valid value: ");
}

let movieRemove = prompt(
  "Enter a number beween 1 to " + movies.length + 1 - moviePosition + "."
);
while (movieRemove > movies.length + 1 - moviePosition || movieRemove <= 0) {
  movieRemove = prompt("Invalid input. Please enter a valid value: ");
}

movies.splice(moviePosition - 1, movieRemove);

// Read or log all of items in movies array into console

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// Read or log only first half items in movies array into console

let limit = Math.ceil(movies.length / 2);
for (let i = 0; i < limit; i++) {
  console.log(movies[i]);
}

// Read or log all of items in movies array into console with the item position

for (let i = 0; i < movies.length; i++) {
  console.log(i + 1 + ". " + movies[i]);
}

// Change all items of movies array into lowercase

for (let i = 0; i < movies.length; i++) {
  movies[i] = movies[i].toLocaleLowerCase;
}

// Write a script asking users their username, if the entered username is too long (>15 characters), tell them that and ask them to re-enter a new username, if the username is short enough (<=15 characters), tell them it is good.

let username = prompt("Enter the username you would like: ");
while (username.length > 15) {
  username = prompt(
    "Your username is too long. Please enter another username: "
  );
}
alert("Your username is good.");
