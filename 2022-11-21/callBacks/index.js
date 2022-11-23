let words = document.querySelectorAll(".word");

const animateAll = (animate) => {

setTimeout(() => {

animate(words[0]);

setTimeout(() => {

animate(words[1]);

setTimeout(() => {

animate(words[2]);

}, 1000)

}, 1000)

}, 1000)

}

const animate = (word) => {

word.classList.add("animate");

}

animateAll(animate);