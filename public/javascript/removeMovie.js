var btns = document.querySelectorAll('.removeMovie');

//-----------------------------------
// Remove Movie Logic
//-----------------------------------
async function removeMovieFormHandler(event) {
  var id = this.dataset.id;
  console.log(id);

  

          const response = await fetch(`/api/movies/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
            });
        
            if (response.ok) {
                document.location.reload();
            } else {
              alert(response.statusText);
            }
 
  }

  btns.forEach(function(btn) {
    btn.addEventListener('click', removeMovieFormHandler);
  });