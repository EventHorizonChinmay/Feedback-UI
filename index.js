const ratingEls = document.querySelectorAll('.rating');
const btnEl =document.getElementById("btn");
const containerEl =document.getElementById("container");
const returnBtnEl = document.getElementById('returnBtn')
let selectedRating = '';
ratingEls.forEach((ratingEls)=>{
    ratingEls.addEventListener("click", (event)=> {
        console.log(event.target.innerText || 
            event.target.parentNode.innerText)
        removeActive();
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active")
        selectedRating = event.target.innerText || event.target.parentNode.innerText
        
    })
});

function removeActive(){
    ratingEls.forEach((ratingEls)=>{
        ratingEls.classList.remove("active")
    })

}
function refreshPage(){
    window.location.reload();
}
btnEl.addEventListener('click', ()=>{
    if( selectedRating !== ""){
        containerEl.innerHTML = `
        <strong> Thanks! </strong>
        <br> <br>
        <strong> Feedback : ${selectedRating}</strong>
        <p> We will use your feedback to improve ourselves </p>
        <button class='btn' id='returnBtn' onClick = "refreshPage()"> Give another feedback </button>`

    }
})
