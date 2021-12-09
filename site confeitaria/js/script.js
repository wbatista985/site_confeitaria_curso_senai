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


/*<section class="cards">
<div class="card" id="bolo-trufado.jpg" >
<div class="container">
    <img src="./imagens/bolo-trufado.jpg" alt="bolo-trufado">
</div>
<div class="details">
    <h3>Las Vegas</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
</div>
</div>
<div class="card" id="bolo-branco.png" >
<div class="container">
    <img src="./imagens/bolo-branco.png" alt="bolo-branco">
</div>
<div class="details">
    <h3>New York</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
</div>
</div>
<div class="card" id="bolo-brigadeiro.jpg">
<div class="container">
    <img src="./imagens/bolo-brigadeiro.jpg" alt="bolo-brigadeiro">
</div>
<div class="details">
    <h3>Singapore</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
</div>
</div>
<div class="card" id="bolo-trufado.jpg">
<div class="container">
    <img src="./imagens/bolo-trufado.jpg" alt="bolo-trufado">
</div>
<div class="details">
    <h3>Las Vegas</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
</div>
</div>
<div class="card" id="bolo-trufado.jpg">
<div class="container">
    <img src="./imagens/bolo-branco.png" alt="bolo-branco">
</div>
<div class="details">
    <h3>New York</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
</div>
</div>
<div class="card" id="bolo-trufado.jpg">
<div class="container">
    <img src="./imagens/bolo-brigadeiro.jpg" alt="bolo-brigadeiro">
</div>
<div class="details">
    <h3>Singapore</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
</div>
</div>
</section> */