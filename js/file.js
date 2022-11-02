const containerBuzzEl = document.getElementById( "container-buzz" );


for ( let i = 1; i <= 100; i++ ) {

    console.log(i);

    containerBuzzEl.innerHTML += `<div class="square-container"> ${i} </div>`;

    

   

    //   TENTATIVO3: FAILED
     if ( i % 15 === 0 ) {

         console.log( "FizzBuzz" );
         containerBuzzEl.innerHTML += `<div class="square-container"> FizzBuzz </div>`;
          

      } else if( i % 5 === 0 ) {
      
         console.log( "Buzz" );
         containerBuzzEl.innerHTML += `<div class="square-container"> Buzz </div>`;
         

      } else if ( i % 3 === 0 ) {

         console.log( "Fizz" );

         containerBuzzEl.innerHTML += `<div class="square-container"> Fizz </div>`;

      }

}
