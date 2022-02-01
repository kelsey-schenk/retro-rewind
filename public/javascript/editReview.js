
// Variables
var modal = document.getElementById("review-modal");
var btns = document.querySelectorAll('.editReview');
const review_title = document.querySelector('#review-title');
const review_text = document.querySelector('#review-description');
const score = document.querySelector('#score-selection');
var id = 0;

//-----------------------------------
// Modal Logic
//-----------------------------------
// Close Modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//-----------------------------------
// Add Review Logic
//-----------------------------------
async function updateReviewFormHandler(event) {
    event.preventDefault();

    const new_title = review_title.value;
    const new_text = review_text.value;
 
    const new_score = document.querySelector('#score-selection').value.split(' ')[
        document.querySelector('#score-selection').value.split(' ').length - 2
        ];

    
    console.log(new_score)    

    const response = await fetch(`/api/reviews/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        new_title,
        new_text,
        new_score
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

}


async function editReviewFormHandler(event) {
    id = this.dataset.id;
    modal.style.display = "block";

    review_title.value = this.dataset.title;
    review_text.value = this.dataset.text;
    score.value = this.dataset.score + " Star";

}

document.querySelector('.review-form').addEventListener('submit', updateReviewFormHandler);

btns.forEach(function (btn) {
    btn.addEventListener('click', editReviewFormHandler);
});
