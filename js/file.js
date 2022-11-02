const containerBuzzEl = document.getElementById( "container-buzz" );

console.log( containerBuzzEl );

for ( let i = 0; i <= 100; i++ ) {

    console.log(i);
    containerBuzzEl.innerHTML += `<div class="square-container"> ${i} </div>`;
    console.log(containerBuzzEl);

    //     TENTATIVO1=> FAILED
   
    // if ( i % 3 === 0 ) {

    //     console.log( "Fizz" );

    //  } else if( i % 5 === 0 ) {
        
    //      console.log("Buzz");

    //  } 
    
    //  if ( ( i % 3 === 0 ) && ( i % 5 === 0 ) ){

    //      console.log("FizzBuzz");

    //  }

    //  TENTATIVO2 => FAILED

    // if ( ( i % 3 === 0 ) || ( i % 5 === 0 ) )  {

    //     if ( i % 3 === 0 ) {

    //         console.log( "Fizz" );

    //     } else if ( i % 5 === 0 ) {

    //         console.log( "Buzz" );
    //     }

    // } else if ( ( i % 3 === 0 ) && ( i % 5 === 0 ) ) {
        
    //     console.log( "FizzBuzz" );
   
    // }

    //  TENTATIVO3: FAILED
    // if ( i % 3 === 0 ) {

    //     console.log( "Fizz" );

    //  } else if( i % 5 === 0 ) {
        
    //     console.log( "Buzz" );

    //  } else if ( i % 15 === 0 ) {

    //     console.log( "FizzBuzz" )

    //  }

    //  TENTATIVO4: FAILED
    if ( ( i % 3 === 0 ) || ( i % 5 === 0 ) )  {
        if ( i % 3 === 0 ) {
            console.log( "Fizz" );   
        } else if ( i % 5 === 0 ) {
            console.log( "Buzz" );
        }
    } else if (( i % 15 === 0 )) {
        console.log( "FizzBuzz" )
    }
}
