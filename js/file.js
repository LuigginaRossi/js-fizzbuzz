const containerBuzzEl = document.getElementById( "container-buzz" );

console.log( containerBuzzEl );

for ( let i = 0; i <= 100; i++ ) {

    console.log(i);
    containerBuzzEl.innerHTML += `<div class="square-container"> ${i} </div>`;
    console.log(containerBuzzEl);

    // if ( i % 3 === 0 ) {

    //     

    // } else if( i % 5 === 0 ) {
        
    //     console.log("Buzz");

    // } 
    
    // if ( ( i % 3 === 0 ) && ( i % 5 === 0 ) ){

    //     console.log("FizzBuzz");

    // }

    if ( ( i % 3 === 0 ) || ( i % 5 === 0 ) )  {

        if ( i % 3 === 0 ) {

            console.log( "Fizz" );

        } else if ( i % 5 === 0 ) {

            console.log( "Buzz" );
        }

    } else if ( ( i % 3 === 0 ) && ( i % 5 === 0 ) ) {
        
        console.log( "FizzBuzz" );
   
    }
}

