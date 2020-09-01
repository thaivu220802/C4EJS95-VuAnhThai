// Initialize an array named movies containing the titles of some of your favorite movies

let movies = ["Parasite", "Your Name", "Weathering With You"];

//Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users

let newMovie = prompt("Enter a movie that you like:");
movies.push(newMovie);

// Read the item at position i in the movies array, i entered by users

let moviePosition = prompt("Enter a number between 1 to " + movies.length + ":");
alert("The movie at the corresponding position is " + movies[moviePosition - 1] + ".");