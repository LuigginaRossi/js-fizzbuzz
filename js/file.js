const containerBuzzEl = document.getElementById("container-buzz");

console.log( containerBuzzEl )

for (let i = 0; i <= 100 ; i++) {
    containerBuzzEl.innerHTML += `<div class="square-container"> ${ i + 1 } </div>`;

    console.log(containerBuzzEl)
}