fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    .then((res) => res.json())
    .then((res) => console.log(res.joke))

const jokeBtn = document.getElementById("joke");
const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener('click', ()=>{
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    .then((res) => res.json())
    .then((res) => jokeText.innerText= `${res.joke}`)
});

