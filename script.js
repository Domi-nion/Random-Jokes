const jokeContainer = document.querySelector("#jokeContainer p");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getJokes = () =>{
   fetch(url)
      .then(response => response.json())
      .then(data => {
         jokeContainer.innerHTML = `${data.joke}`
      })
}
btn.addEventListener('click', getJokes)

getJokes()