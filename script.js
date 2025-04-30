const ratingBtn = document.querySelectorAll('.rating1');
const submitBtn = document.getElementById('submit');
const ratingContainer = document.getElementById('container');
const thankYouCard = document.getElementById('thank-you');
const selectedRating = document.getElementById('thank-you-note');


let starRating = null;

ratingBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        ratingBtn.forEach(btn=>btn.classList.remove('active'));

        button.classList.add('active');
        starRating = button.getAttribute('data-value');
    });
});

submitBtn.addEventListener("click",()=>{
    if(starRating){
        ratingContainer.style.display = 'none';
        selectedRating.textContent= `You selected ${starRating} star out of 5!`;
        thankYouCard.classList.remove('hidden');
    } else{
        alert('Please select a rating before submitting!')
    }
})