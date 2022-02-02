//-----------------------------------
// Modal Logic
//-----------------------------------
// Variables
var movieModal = document.getElementById("add-movie-modal");
var movieBtn = document.getElementById("addMovie");

// Close Modal
var spanMovie = document.getElementById("closeMovie");

// When the user clicks on the button, open the modal
movieBtn.onclick = function() {
  movieModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanMovie.onclick = function() {
  console.log("yes")
  movieModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == movieModal) {
    movieModal.style.display = "none";
  }
}

//-----------------------------------
// Add Movie Logic
//-----------------------------------
async function addMovieFormHandler(event) {
  event.preventDefault();

const title = document.querySelector('#movie-title').value.trim();
const description = document.querySelector('#movie-description').value.trim();
const rating = document.querySelector('#rating-selection').value.trim();

if (title)  {
    if (description) {
        const response = await fetch('/api/movies', {
            method: 'POST',
            body: JSON.stringify({
              title,
              description,
              rating
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (response.ok) {
            movieModal.style.display = "none"
              document.location.reload();
          } else {
            alert(response.statusText);
          }
    }
  }

}


document.querySelector('.movie-form').addEventListener('submit', addMovieFormHandler);