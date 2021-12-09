//modal do video
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

//clicando no card da  player no video de acordo com o Id do video no card
for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}
// remove video e fecha
document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})
 

