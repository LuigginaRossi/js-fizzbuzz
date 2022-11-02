const containerBuzzEl = document.getElementById( "container-buzz" );

console.log( containerBuzzEl );

for ( let i = 0; i <= 100; i++ ) {
    console.log(i);
    containerBuzzEl.innerHTML = `<div class="square-container"> ${i} </div>`;
    console.log(containerBuzzEl);
}