const dodger = document.getElementById('dodger');
const game = document.querySelector('#game');




function moveDodger(){
    document.addEventListener('keydown', function(e){
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
                console.log('There is no such thing');
                
        };
    });
}


function moveDodgerUp(){
    const bottomMovement = dodger.style.bottom.replace('px','');
    const bottom = parseInt(bottomMovement, 10);

   if(bottom < game.clientHeight - dodger.clientHeight){
    dodger.style.bottom = `${bottom + 1}px`;
   }
    
}

function moveDodgerDown(){
    const bottomMovement = dodger.style.bottom.replace('px','');
    const bottom = parseInt(bottomMovement, 10);

    if(bottom > 0){
    dodger.style.bottom = `${bottom - 1}px`;
    }
}


function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace('px','');
    const left = parseInt(leftNumber, 10);

    if(left > 0){
    dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const leftNumber = dodger.style.left.replace('px','');
    const left = parseInt(leftNumber, 10);

    if(left < 360){
    dodger.style.left = `${left + 1}px`;
    } 
}

moveDodger();