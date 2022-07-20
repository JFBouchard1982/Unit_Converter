/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const m2fEl = document.getElementById("m2f")
const f2mEl = document.getElementById("f2m")
const l2gEl = document.getElementById("l2g")
const g2lEl = document.getElementById("g2l")
const k2pEl = document.getElementById("k2p")
const p2kEl = document.getElementById("p2k")
const myArray = []



convertBtn.addEventListener("click", function() {
    // 1-store the inputvalue into localStorage.
    myArray.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myArray", JSON.stringify(myArray))

    renderValues()
})



function renderValues() {
    
    let valuesFromLocalStorage = JSON.parse(localStorage.getItem("myArray"))
    // 1-replace the unit value in each element with our stored input value.
    // 2-multiply the unit value with the proper convert value.
    // 3-display result in all element.
        for (let i = 0; i < myArray.length; i++) {

    }
    let lastValue = valuesFromLocalStorage.slice(-1);
    let m2fValue = lastValue * 3.281;
    let f2mValue = lastValue / 3.281;
    let l2gValue = lastValue * 0.264;
    let g2lValue = lastValue / 0.264;
    let k2pValue = lastValue * 2.204;
    let p2kValue = lastValue / 2.204;
        m2fEl.innerHTML = `${lastValue} meters = ${m2fValue.toFixed(3)} feet`
        f2mEl.innerHTML = `${lastValue} feet = ${f2mValue.toFixed(3)} meters`
        l2gEl.innerHTML = `${lastValue} liters = ${l2gValue.toFixed(3)} gallons`
        g2lEl.innerHTML = `${lastValue} gallons = ${g2lValue.toFixed(3)} liters`
        k2pEl.innerHTML = `${lastValue} kilos = ${k2pValue.toFixed(3)} pounds`
        p2kEl.innerHTML = `${lastValue} pounds = ${p2kValue.toFixed(3)} kilos`
}
window.onload=function(){
   var theme = localStorage.getItem('data-theme');
   if(theme=='light'){
     document.documentElement.setAttribute('data-theme', 'light');
   }else if(theme==''){
     document.documentElement.setAttribute('data-theme', 'light');
   }else if(theme=='dark'){
     document.documentElement.setAttribute('data-theme' , 'dark');
     document.getElementById("checkbox").checked = true;
   }
 }
 function toggle(a){
   if(a.checkbox.checked==true){
     document.documentElement.classList.add('transition');
     document.documentElement.setAttribute('data-theme', 'dark');
     localStorage.setItem('data-theme','dark');
   }
   else if(a.checkbox.checked==false){
     document.documentElement.classList.add('transition');
     document.documentElement.setAttribute('data-theme', 'light');
     localStorage.setItem('data-theme','light');
   }
 };