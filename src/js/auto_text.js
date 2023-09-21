
const text = document.querySelector(".sec-text");
const textLoader= () => {
    setTimeout(() => {
        text.textContent = "Full-Stack Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Front-end Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Back-end Developer";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 16000);
}

textLoader();
setInterval(textLoader, 20000);
