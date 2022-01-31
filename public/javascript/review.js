//-----------------------------------
// Modal Logic
//-----------------------------------
// Variables
var modal = document.getElementById("review-modal");
var btn = document.getElementById("addReview");

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
// Add Review Logic
//-----------------------------------
async function addReviewFormHandler(event) {
  event.preventDefault();

const score = document.querySelector('#score-selection').value.trim();
const review_title = document.querySelector('#review-title').value.trim();
const review_text = document.querySelector('#review-description').value.trim();
const movie_id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

console.log(score);
console.log(review_title);
console.log(review_text);

if (title)  {
    if (review_description) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({
              movie_id,
              score,
              review_title,
              review_text,
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


/*
if (email && password) {
  const response = await fetch('/api/users/login', {
    method: 'post',
    body: JSON.stringify({
      email,
      password
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
//}
*/


document.querySelector('.review-form').addEventListener('submit', addReviewFormHandler);