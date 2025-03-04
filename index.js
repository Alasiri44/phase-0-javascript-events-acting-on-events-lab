const dodger = document.getElementById('dodger');


function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace('px','');
    const left = parseInt(leftNumber, 10);

    if(left > 0){
        dodger.style.left = `${left - 3}px`;
    }
};

function moveDodgerRight(){
    const number = dodger.style.left.replace('px','');
    const myNumber = parseInt(number, 10);

   
        dodger.style.left = `${myNumber + 3}px`;
    
};

function moveDodgerUp(){
    const number = dodger.style.bottom.replace('px','');
    const myNumber = parseInt(number, 10);

   if(myNumber > 0){
        dodger.style.bottom = `${myNumber + 3}px`;
   }
    
};

function moveDodgerDown(){
    const number = dodger.style.bottom.replace('px','');
    const myNumber = parseInt(number, 10);

    if(myNumber > 0){
        dodger.style.bottom = `${myNumber - 3}px`;
    }    
};


document.addEventListener('keydown', function(e) {
   switch(e.key){
   case 'ArrowLeft':
        moveDodgerLeft();
        break;

    case 'ArrowRight':
        moveDodgerRight();
        break;

    case 'ArrowUp':
        moveDodgerUp();
        break;

    case 'ArrowDown':
        moveDodgerDown();
        break;

    default:
        console.log('Nothing reallly happens');
   }
});