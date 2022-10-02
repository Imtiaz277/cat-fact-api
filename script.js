// Lottie Animation
let animation = bodymovin.loadAnimation({
    container: document.getElementById("animContainer"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "https://assets7.lottiefiles.com/packages/lf20_g8jizdgx.json"
});

const catBtn = document.querySelector("#catBtn");
const catTxt = document.querySelector("#catTxt");

async function getCatFact(){
    try{
        let data = await fetch("https://catfact.ninja/fact");
        data = await data.json();
        catTxt.innerText = data.fact;
    }
    catch(e){
        catTxt.innerText = "Uh oh, something went wrong :( \n Please try again later.";
    }
}

catBtn.addEventListener("click", function(){
    getCatFact();
});