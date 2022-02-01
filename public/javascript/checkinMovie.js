var btns = document.querySelectorAll('.returnMovie');

async function returnMovieFormHandler(event) {
    var id = this.dataset.id;
    var movie_id = this.dataset.movie;
    var status = "available";

    //Remove Rental
    const response = await fetch(`/api/rentals/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        //Update Movie to Available
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
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    } else {
        alert(response.statusText);
    }

}

btns.forEach(function (btn) {
    btn.addEventListener('click', returnMovieFormHandler);
});