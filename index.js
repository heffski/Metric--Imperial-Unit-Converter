const mainInput = document.querySelector('#main');
// var userInputs = document.querySelectorAll('.out');

let userInputs = document.querySelectorAll(".out");

for (let i = 0; i < userInputs.length; i++) {
    userInputs[i].innerHTML = mainInput.value;
}

mainInput.addEventListener('change', userFills);

function userFills() {
    userInputs.innerHTML = mainInput.value
};

// function userFills() {
//     userInputs.innerHTML = mainInput.value
// };


// const nodeList = document.querySelectorAll(".out");
// for (let i = 0; i < nodeList.length; i++) {
//     nodeList[i].innerHTML = mainInput.value;
// }

// function userFills() {
//     nodeList.innerText = mainInput.value
// };

// console.log(nodeList)
