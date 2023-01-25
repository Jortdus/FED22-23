let lightButton = document.querySelector("header ul li");
let darkButton = document.querySelector("header ul li:nth-of-type(2)");
let contrastButton = document.querySelector("header ul li:nth-of-type(3)");

let lightButtonElement = document.querySelector("header ul li button")
let darkButtonElement = document.querySelector("header ul li:nth-of-type(2) button")
let contrastButtonElement = document.querySelector("header ul li:nth-of-type(3) button")

if(document.documentElement.dataset.colorMode == "") {
    lightButtonElement.style.cssText = "background-color: #1d575e; color:white; border:none;"
}

lightButton.addEventListener('click', function handleClick() {
    console.log('lightmode clicked');
    lightButtonElement.style.cssText = "background-color: #1d575e; color:white; border:none;"
    darkButtonElement.style.cssText = "background-color: white; color: #1d575e; border:1px solid #1d575e;";
    contrastButtonElement.style.cssText = "background-color: white; color: #1d575e; border:1px solid #1d575e;;"
    document.documentElement.dataset.colorMode = "";
    

});

darkButton.addEventListener('click', function handleClick() {
    console.log('darkmode clicked');
    document.documentElement.dataset.colorMode = "dark-mode";
    lightButtonElement.style.cssText = "background-color: white; color: #1d575e; border:none;"
    darkButtonElement.style.cssText = "background-color: #1d575e; color:white; border:none;"
    contrastButtonElement.style.cssText = "background-color: white; color: #1d575e; border:none;"
});

contrastButton.addEventListener('click', function handleClick() {
    console.log('contrastmode clicked');
    document.documentElement.dataset.colorMode = "contrast-mode";
    lightButtonElement.style.cssText = "background-color: white; color: black; border:none;"
    darkButtonElement.style.cssText = "background-color: white; color: black; border:none;"
    contrastButtonElement.style.cssText = "background-color: black; color:white; border:1px solid #f3db05;"
});

