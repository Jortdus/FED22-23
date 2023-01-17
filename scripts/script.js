let lightButton = document.querySelector("header ul li");
let darkButton = document.querySelector("header ul li:nth-of-type(2)");
let contrastButton = document.querySelector("header ul li:nth-of-type(3)");

lightButton.addEventListener('click', function handleClick() {
    console.log('lightmode clicked');
    document.documentElement.dataset.colorMode = "";
});

darkButton.addEventListener('click', function handleClick() {
    console.log('darkmode clicked');
    document.documentElement.dataset.colorMode = "dark-mode";
});

contrastButton.addEventListener('click', function handleClick() {
    console.log('contrastmode clicked');
    document.documentElement.dataset.colorMode = "contrast-mode";
});

