let lightButton = document.querySelector("header ul li");
let darkButton = document.querySelector("header ul li:nth-of-type(2)");
let contrastButton = document.querySelector("header ul li:nth-of-type(3)");

let lightButtonElement = document.querySelector("header ul li button")
let darkButtonElement = document.querySelector("header ul li:nth-of-type(2) button")
let contrastButtonElement = document.querySelector("header ul li:nth-of-type(3) button")

console.log(window.localStorage.getItem('themeColor'))
document.documentElement.dataset.colorMode = window.localStorage.getItem('themeColor')

if (localStorage.getItem('themeColor')) {
    if (localStorage.getItem('themeColor') == '') {
        lightButtonElement.style.cssText = "background-color: #1d575e; color:white; border:none;"
    } else if (localStorage.getItem('themeColor') == 'dark-mode') {
        darkButtonElement.style.cssText = "background-color: #1d575e; color:white; border:none;"
    } else if (localStorage.getItem('themeColor') == 'contrast-mode') {
        contrastButtonElement.style.cssText = "background-color: black; color:white; border:1px solid #f3db05;"
    }
}

lightButton.addEventListener('click', function handleClick() {
    document.documentElement.dataset.colorMode = "";
    window.localStorage.setItem('themeColor', "");
    console.log(window.localStorage.getItem('themeColor'))

    // Styling
    lightButtonElement.style.cssText = "background-color: #1d575e; color:white; border:none;"
    darkButtonElement.style.cssText = "background-color: white; color: #1d575e; border:1px solid #1d575e;";
    contrastButtonElement.style.cssText = "background-color: white; color: #1d575e; border:1px solid #1d575e;"
});

darkButton.addEventListener('click', function handleClick() {
    window.localStorage.setItem('themeColor', "dark-mode");
    document.documentElement.dataset.colorMode = "dark-mode";
    console.log(window.localStorage.getItem('themeColor'))

    // Styling
    lightButtonElement.style.cssText = "background-color: white; color: #1d575e; border:none;"
    darkButtonElement.style.cssText = "background-color: #1d575e; color:white; border:none;"
    contrastButtonElement.style.cssText = "background-color: white; color: #1d575e; border:none;"
});

contrastButton.addEventListener('click', function handleClick() {
    window.localStorage.setItem('themeColor', "contrast-mode");
    document.documentElement.dataset.colorMode = "contrast-mode";
    console.log(window.localStorage.getItem('themeColor'))

    // Styling
    lightButtonElement.style.cssText = "background-color: white; color: black; border:none;"
    darkButtonElement.style.cssText = "background-color: white; color: black; border:none;"
    contrastButtonElement.style.cssText = "background-color: black; color:white; border:1px solid #f3db05;"
});