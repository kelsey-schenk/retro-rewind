//-----------------------------------
// Modal Logic
//-----------------------------------
// Variables
var modal = document.getElementById("add-movie-modal");
var btn = document.getElementById("addMovie");

// Close Modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//-----------------------------------
// Add Movie Logic
//-----------------------------------
async function addMovieFormHandler(event) {
  event.preventDefault();

const title = document.querySelector('#movie-title').value.trim();
const description = document.querySelector('#movie-description').value.trim();

if (title)  {
    if (description) {
        const response = await fetch('/api/movies', {
            method: 'POST',
            body: JSON.stringify({
              title,
              description
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (response.ok) {
              modal.style.display = "none"
              document.location.reload();
          } else {
            alert(response.statusText);
          }
    }
  }

}


document.querySelector('.movie-form').addEventListener('submit', addMovieFormHandler);