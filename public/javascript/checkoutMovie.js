var btn = document.getElementById("checkOut");

//API call to update Movie & Rental for Checkout
btn.onclick = function() {
  
    var checkoutStatus = "taken";



    //UPDATE Rental
    const response = await fetch('/api/rentals', {
        method: 'POST',
        body: JSON.stringify({
          user_id,
          movie_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {

        //UPDATE Movie
        const response = await fetch('/api/movies', {
            method: 'PUT',
            body: JSON.stringify({
              checkoutStatus
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (response.ok) {
              document.location.reload();
          } else {
            alert(response.statusText);
          }
      } else {
        alert(response.statusText);
      }



}

