// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.
let numbD = document.querySelector(".number_d");
let message = document.querySelector(".message");
let deleteButton = document.querySelector(".delete");

// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let dispImage = document.querySelector(".display-image");
let dispSong = document.querySelector(".display-song");
let dispArtist = document.querySelector(".display-artist");
let dispLink = document.querySelector(".display-link");




// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
/*
let imageUrls = ["https://i.scdn.co/image/ab67616d0000b273167f7c87b645459f16524a18", "https://images.genius.com/e48222b5d5b67af6c5ac78b812d4070b.500x500x1.jpg", "https://i1.sndcdn.com/artworks-UZPbaovUKbUVpqmS-bhMFkA-t500x500.jpg", "https://i.scdn.co/image/ab67616d0000b273cbe979bb2069df4743b378fb", "https://t2.genius.com/unsafe/288x285/https%3A%2F%2Fimages.genius.com%2F6706c7fe79f16a43247aba4651be7f14.1000x991x1.png"];

let songNames = ["Nights", "I Feel Fantastic", "Cruel", "Nocturne No.2 in E Flat Major, Op.9", "Out Of Control"];

let artistNames = ["Billy Ocean", "Riovaz", "Slowymane", "Frédéric Chopin", "Nothing’s Carved In Stone"];

let songLinks = ["https://www.youtube.com/watch?v=7gNjgU_1th0", "https://www.youtube.com/watch?v=z858dTRlFLQ", "https://www.youtube.com/watch?v=ov5kAKWS-iU", "https://www.youtube.com/watch?v=bVeOdm-29pU", "https://youtu.be/rqsHvAq4R40"];
*/






//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.

// task 12: create an object for each of your songs.

const nights_song = { title: "Nights", artist: "Billy Ocean", image: "https://i.scdn.co/image/ab67616d0000b273167f7c87b645459f16524a18", link: "https://www.youtube.com/watch?v=7gNjgU_1th0" };
const I_feel_fantastic_song = { title: "I Feel Fantastic", artist: "Riovaz", image: "https://images.genius.com/e48222b5d5b67af6c5ac78b812d4070b.500x500x1.jpg", link: "https://www.youtube.com/watch?v=z858dTRlFLQ" };
const cruel_song = { title: "Cruel", artist: "Slowymane", image: "https://i1.sndcdn.com/artworks-UZPbaovUKbUVpqmS-bhMFkA-t500x500.jpg", link: "https://www.youtube.com/watch?v=ov5kAKWS-iU" };
const nocturne_no_two_song = { title: "Nocturne No.2 in E Flat Major, Op.9", artist: "Frédéric Chopin", image: "https://i.scdn.co/image/ab67616d0000b273cbe979bb2069df4743b378fb", link: "https://www.youtube.com/watch?v=bVeOdm-29pU" };
const nothings_carved_in_stone_song = { title: "Out Of Control", artist: "Nothing’s Carved In Stone", image: "https://t2.genius.com/unsafe/288x285/https%3A%2F%2Fimages.genius.com%2F6706c7fe79f16a43247aba4651be7f14.1000x991x1.png", link: "https://youtu.be/rqsHvAq4R40" };
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let big_boy_storage = [nights_song, I_feel_fantastic_song, cruel_song, nocturne_no_two_song, nothings_carved_in_stone_song]


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.

  let imgInput = image.value.trim();
  let songInput = songName.value.trim();
  let artistInput = artist.value.trim();
  let songLinkInput = songLink.value.trim();
  // task 10: use `.push()` to add each input value to the correct array.
  /*
  imageUrls.push(imgInput);
  songNames.push(songInput);
  artistNames.push(artistInput);
  songLinks.push(songLinkInput);
  */


  let newSong = {
    title: songInput, artist: artistInput, image: imgInput, link: songLinkInput
  }

  big_boy_storage.push(newSong)
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  dispImage.innerHTML = "";
  dispSong.innerHTML = "";
  dispArtist.innerHTML = "";
  dispLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  /*for (let i in imageUrls) {
    console.log(imageUrls[i]);
    dispImage.insertAdjacentHTML("afterbegin", `<p> <img src= ${imageUrls[i]} > </p>`);
  }
  for (let i in songNames) {
    console.log(songNames[i]);
    dispSong.insertAdjacentHTML("afterbegin", `<p> ${songNames[i]} </p>`);
  }
  for (let i in artistNames) {
    console.log(artistNames[i]);
    dispArtist.insertAdjacentHTML("afterbegin", `<p> ${artistNames[i]} </p>`);
  }
  for (let i in songLinks) {
    console.log(songLinks[i]);
    dispLink.insertAdjacentHTML("afterbegin", `<p> <a href= ${songLinks[i]} target= " " >Link</a> </p>`);

  }*/
  /*
  for (let i = 0; i < songNames.length; i++) {
    dispLink.insertAdjacentHTML("afterbegin", `<p> <a href= ${songLinks[i]} target= " " >Link</a> </p>`);
    dispArtist.insertAdjacentHTML("afterbegin", `<p> ${artistNames[i]} </p>`);
    dispSong.insertAdjacentHTML("afterbegin", `<p> ${songNames[i]} </p>`);
    dispImage.insertAdjacentHTML("afterbegin", `<p> <img src= ${imageUrls[i]} > </p>`);
  }
  */

  big_boy_storage.forEach(function(songArray) {
    dispLink.insertAdjacentHTML("afterbegin", `<p> <a href= ${songArray.link} target= " " >Link</a> </p>`);
    dispArtist.insertAdjacentHTML("afterbegin", `<p> ${songArray.artist} </p>`);
    dispSong.insertAdjacentHTML("afterbegin", `<p> ${songArray.title} </p>`);
    dispImage.insertAdjacentHTML("afterbegin", `<p> <img src= ${songArray.image} > </p>`);
    console.log(big_boy_storage);
  });



}
// THESE ARE IDEAS THAT STILL NEED TO BE COMPLETED (Shuffle)(Delete)(Clear)
let MESSAGE = function() {
  message.innerHTML = `<p> Please Fill Out All Fields </p>`;
  message.style.border = "5px solid black";
}

let MESSAGEDELETE = function() {
  message.innerHTML = '';
  message.style.border = "";
}

let COUNT = function() {
  let numberS = big_boy_storage.length
  numbD.innerHTML = `<p> Number Of Songs: ${numberS} </p>`


};


// click event to add and display songs
let CLEAR = function() {
  image.value = "";
  songName.value = "";
  songLink.value = "";
  artist.value = "";

};

deleteButton.onclick = function() {
  console.log(big_boy_storage.length);
  big_boy_storage = [];
  console.log(big_boy_storage.length);
  emptyDisplay();
};

add.onclick = function() {
  if (image.value === "" || songName.value === "" || artist.value === "" || songLink.value === "") {
    MESSAGE();
    return
  }
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
  CLEAR();
  COUNT();
  MESSAGEDELETE();
};

// function call to display stored songs
displaySongInfo();
COUNT();
