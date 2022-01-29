var btn = document.getElementById("removeMovie");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  console.log("yes")
}

//-----------------------------------
// Remove Movie Logic
//-----------------------------------
async function removeMovieFormHandler(event) {
    event.preventDefault();
  
  const title = document.querySelector('#movie-title').value.trim();
  const description = document.querySelector('#movie-description').value.trim();
  
  console.log("yes");

  /*
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
  */
  }
