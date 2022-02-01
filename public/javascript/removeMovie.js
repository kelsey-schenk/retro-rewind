var btns = document.querySelectorAll('.removeMovie');

async function removeMovieFormHandler(event) {
  var id = this.dataset.id;

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

btns.forEach(function (btn) {
  btn.addEventListener('click', removeMovieFormHandler);
});