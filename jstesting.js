const url = "https://official-joke-api.appspot.com/random_joke";

document.addEventListener("click", (e) => {
  if (!e.target.matches("#button")) return;
  console.log('click')
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderJoke(data));
});

function renderJoke(data) {
  const setup = document.getElementById("setup");
  console.log(setup);
  const punchline = document.getElementById("punchline");
  console.log(punchline);
  setup.innerHTML = data.setup;
  punchline.innerHTML = data.punchline;
}

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}