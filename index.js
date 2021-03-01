let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e) {
    console.log(e.key);

    if (e.key == "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key == "ArrowRight") {
        moveDodgerRight();
    }
    
});

function moveDodgerLeft() {
    let numbers = dodger.style.left.replace("px", "");
    let left = parseInt(numbers, 10);
    if (left > 0) {
        console.log('dodger.style.left = ' + dodger.style.left);
        dodger.style.left = `${left - 10}px`;
    }
} 


function moveDodgerRight() {
    let numbers = dodger.style.left.replace("px", "");
    let left = parseInt(numbers, 10);
    if (left > 0) {
        console.log('dodger.style.left = ' + dodger.style.left);
        dodger.style.left = `${left + 10}px`;
    }
} 