var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerHTML = count;
    }
}, 1);

//As Soon as 4 sec is completed it will say followers on instagram

setTimeout(() => {
    followers.innerText = "Followers on instagram!";
}, 4000)