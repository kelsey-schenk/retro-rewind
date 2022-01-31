var btn = document.getElementById("checkOut");
var status = 1;
const movie_id = window.location.toString().split('/')[
    window.location.toString().split('/').length -1 
];

//API call to update Movie & Rental for Checkout
btn.onclick = function() {
    createRental();
}

async function createRental(event) {
    const response = await fetch('/api/rentals', {
        method: 'POST',
        body: JSON.stringify({
          movie_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        //UPDATE Movie
        updateMovie();
      } else {
        alert(response.statusText);
      }
}

async function updateMovie(event) {

    const response = await fetch(`/api/movies/${movie_id}`, {
        method: 'PUT',
        body: JSON.stringify({
          status
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
          btn.style.visibility = 'hidden';
          document.location.reload();
      } else {
        console.log('no')
        alert(response.statusText);
      }
}
