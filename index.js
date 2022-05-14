const mainInput = document.querySelector('#main');
// var userInputs = document.querySelectorAll('.out');
const mF = document.getElementById('m-f');
const fM = document.getElementById('f-m');
const lG = document.getElementById('l-g');
const gL = document.getElementById('g-l');
const kP = document.getElementById('k-p');
const pK = document.getElementById('p-k');

let userInputs = document.querySelectorAll(".out");

function userFills() {
   for (let i = 0; i < userInputs.length; i++) {
    userInputs[i].innerHTML = mainInput.value;
}
};

function conversions() {
    let mfv = mainInput.value * 3.28084;
    mF.innerHTML = mfv.toFixed(3);
    let fmv = mainInput.value * 0.3048;
    fM.innerHTML = fmv.toFixed(3);
    let lgv = mainInput.value * 0.264172;
    lG.innerHTML = lgv.toFixed(3);
    let glv = mainInput.value * 3.78541;
    gL.innerHTML = glv.toFixed(3);
    let kpv = mainInput.value * 2.20462;
    kP.innerHTML = kpv.toFixed(3);
    let pkv = mainInput.value * 0.453592;
    pK.innerHTML = pkv.toFixed(3);
};






// const meterToFeet = mainInput *  3.28084
// const feetToMeter = mainInput *  0.3048
// const literToGallon = mainInput *  0.264172
// const gallonToLiter = mainInput *  1.20095
// const kiloToPound = mainInput *  2.20462
// const poundToKilo = mainInput *  0.453592