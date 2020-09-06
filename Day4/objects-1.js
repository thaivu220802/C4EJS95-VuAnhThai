// Declare a variable named movie with an object value

let movie = {
  title: "The Dark Knight Rises",
  year: 2012,
  rate: 8.4,
};

// Log all of 3 the properties of the movie object to the console using 2 different ways

console.log(movie);

console.log(movie.title);
console.log(movie.year);
console.log(movie.rate);

// Log an non-existent property of the movie, director, what is the result?

console.log(movie.director); //undefined

//  after users enter the property, check whether the property exists, if yes, show them the value

// let check = prompt('What would you like to know?');

// if (movie[check]) {
//     alert(movie[check]);
// } else {
//     alert(`${check} does not exist in our data.`)
// }

// Change the rate of the movie to 8.7

movie.rate = 8.7;

// Increase the rate of the movie by 0.5

movie.rate = movie.rate + 0.5;

// Write a script, asking users what they want to update and what is the update, perform the update and then log out the result

let upd = prompt("What would you like to update?");
if (movie[upd]) {
  let newValue = prompt("What is the update?");
  movie[upd] = newValue;
  console.log(movie);
} else {
  let newValue = prompt(
    `${upd} does not exist in our data, please enter new data:`
  );
  movie[upd] = newValue;
  console.log(movie);
}

// Create an array called songs, containing at least 3 movie data with the same structure

let song_1 = {
  name: "Helicopter",
  year: 2020,
  rate: 7.25,
};

let song_2 = {
  name: "Red Flavor",
  year: 2017,
  rate: 9.25,
};

let song_3 = {
  name: "favOriTe",
  year: 2018,
  rate: 8,
};

let songs = [song_1, song_2, song_3];

// Print or log out the first movie from movie list

console.log(songs[0]);

// Print or log out the title of the last movie from movie list

console.log(songs[songs.length - 1]);

// Use a loop to print or log out all of the movie in the movie list

console.log(...songs);

for (let i = 0; i < songs.length; i++) {
    console.log(songs[i]);
}

// Use a loop to print or log out all of the movie in the movie list, the data is prettified as follow

for (let i = 0; i < songs.length; i ++) {
    console.log("------------------");
    console.log(songs[i].name);
    console.log(`Year: ${songs[i].year}`);
    console.log(`Rate: ${songs[i].rate}`);
}

// Increase the rate of the last movie in the movies list by 0.7

songs[songs.length-1].rate = songs[songs.length-1].rate + 0.7;