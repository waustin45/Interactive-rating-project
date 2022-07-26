
let rating = {};
function hitreview() {
    const allbutton = document.querySelectorAll('.ratingbutton');
    allbutton.forEach((ratingbutton, i) => {
            ratingbutton.onclick = function ratingclick() {
                rating = i + 1;
                
            allbutton.forEach((ratingbutton, j) => {
                if (rating >= j +1) {ratingbutton.innerHTML = 'hsl(217, 12%, 63%)'} else {ratingbutton.innerHTML = 'hsl(217, 12%, 63%)'}
            })
                console.log(rating);
                
            }})

        

       
};
hitreview();
function submitreview() {
    const finalrating = rating;
    
    console.log(finalrating);
    document.querySelector(".review-output").innerHTML = 
    `
    <div class="review-container">
    <div class="review-image"><img src="/illustrationthankyou.svg alt="iamge"></div>
   <div class="yourrating"> You selected ${finalrating} out of 5 </div>

  <div class="thankyou">Thank you!</div>

  <div class="appreciate">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</div>
    </div>
    `
    
};
