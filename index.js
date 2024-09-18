const ratingButtons=document.querySelectorAll(".rating-buttons button");
const ratingValue= document.getElementById("rating-value");

const mainContainer= document.querySelector(".main-container");
const messageContainer= document.querySelector(".message-container");
const submitButton= document.getElementById("submit-button");


ratingButtons.forEach(button =>{
    button.addEventListener('click', function (){

        ratingButtons.forEach(button=> button.classList.remove('active'));
        button.classList.add('active');
        ratingValue.innerHTML=button.innerHTML;

    });
});
submitButton.addEventListener('click', function (){

    mainContainer.style.display= 'none';
    messageContainer.style.display= 'flex';

    submitButton.classList.add('active');

});

