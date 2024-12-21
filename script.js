var input = document.getElementById('input')
var btn = document.getElementById('btn')
var palind = document.getElementById('palind')
let reverseWord = document.getElementById('reverseWord');
const body = document.body;

const isPalindrome = (word) => {
    const reverse = word.split('').reverse().join('').toLowerCase();
    if (word.toLowerCase() === reverse) {
        return true
    }
    else {
        return false 
    }
}

btn.addEventListener('click', () => {
    const word = input.value;
    if (isPalindrome(word)) {
        palind.textContent = "is palindrome"
    }
    else {
        palind.textContent = "is not palindrome"
    }
    const reverse = word.split('').reverse().join('');
    reverseWord.textContent = `reverse version is:  "${reverse}"`
})

const container = document.querySelector('.container');

const sun = document.getElementById('sun');
 
const res = document.querySelector('.res')

sun.addEventListener('click', () => {
    if(body.style.background === 'rgb(255, 255, 255)') {
    body.style.cssText = 'background: #000; color: #fff';
    res.style.cssText = 'color: #fff; border: 2px solid #fff';
    sun.innerHTML = '<img src="moon_stars_night_midnight_sky_icon_194278.png" alt="" height="45" width="45">'
    }
    else {
    body.style.cssText = 'background: #fff';
    sun.innerHTML = '<img src="sun_sunny_summer_icon-icons.com_62700.png">'
    res.style.cssText = 'border: 2px solid; color: #000; padding: 2rem 4rem;'
    }
})



// const randomColor = (number) => {
//     return Math.floor(Math.random() * (number + 1));
 
// }


// sun.addEventListener('click', () => {

//         body.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;

// })