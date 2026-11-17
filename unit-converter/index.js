const inputEl = document.getElementById("input-num")

const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


convertBtn.addEventListener("click", function() {
    if (inputEl.value > 0) {
        renderConversions(inputEl)
    }  
})


resetBtn.addEventListener("click", function(){
    inputEl.value = ""
    lengthEl.innerHTML = ""
    volumeEl.innerHTML = ""
    massEl.innerHTML = ""
})


function renderConversions(input) {
    const metersToFeet = input.value * 3.28084
    const FeetToMeters = input.value / 3.28084

    lengthEl.innerHTML = `
        ${inputEl.value} meters = ${metersToFeet.toFixed(3)} feet | ${inputEl.value} feet = ${FeetToMeters.toFixed(3)} meters
    `
    const litersToGallons = input.value * 0.264172
    const gallonsToLiters = input.value / 0.264172

    volumeEl.innerHTML = `
        ${inputEl.value} liters = ${litersToGallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallonsToLiters.toFixed(3)} liters
    `

    const kilogramsToPounds = input.value * 2.20462
    const poundsToKilograms = input.value / 2.20462
    massEl.innerHTML = `
        ${inputEl.value} kilograms = ${kilogramsToPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundsToKilograms.toFixed(3)} kilograms
    `
}
