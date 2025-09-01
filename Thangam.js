//Typing effect
const textArray = ["Web Developer",
    "creative coder","UI/UX Designer"];
let index = 0;
let char Index = 0;
const typedText =
document.getElementById("typed-text");
const cursor =
document.querySelector(".cursor");

function type() {
    if(charIndex<textArray[index].length) {
        typedText.textContent +=textArray[index].charAt(charIndex);charIndex++;
        setTimeout(type, 100);
    }
    else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0){
        typedText.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    }
    else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(type, 500);    
});

//Model logic
function openModel(title, body) {

    document.getElementById("model").classList.remove("hidden");
    document.getElementById("model-title").textContent = title;
    document.getElementById("model-body").textContent = body;
}

document.getElementById("model-close").onclick = () => {

    document.getElementById("model").classList.add("hidden");
};

//Dark mode toggle
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList,toggle("dark-mode");
};