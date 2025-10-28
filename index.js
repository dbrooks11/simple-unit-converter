/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.querySelector("#number_input-el")
let convertBtn = document.querySelector("#convert-btn")
let themeBtn = document.querySelector("#theme-btn")
let length = document.querySelector("#length-span")
let volume = document.querySelector("#volume-span")
let mass = document.querySelector("#mass-span")

//containers for theme toggle
let allUnitContainer = document.querySelector(".conversions")
let unitContainer = document.querySelectorAll(".unit")
let unitText = document.querySelectorAll(".units")

function convertLength(num){
    let num_value = parseFloat(num.value)
    let meter_to_feet = (num_value * 3.281).toFixed(3)
    let feet_to_meter = (num_value * 0.3048).toFixed(3)
    return {meter_to_feet, feet_to_meter}
}

function convertVolume(num){
    let num_value = parseFloat(num.value)
    liters_to_gallons = (num_value * 0.264).toFixed(3)
    gallons_to_liters = (num_value * 3.78541).toFixed(3)
    return {liters_to_gallons, gallons_to_liters}
}

function convertMass(num){
    let num_value = parseFloat(num.value)
    kilos_to_pounds = (num_value * 2.204).toFixed(3)
    pounds_to_kilos = (num_value * 0.453592).toFixed(3)
    return {kilos_to_pounds, pounds_to_kilos}
}

function renderUnits(unitDict1, unitDict2, unitDict3, num){
    length.textContent = `${num.value} meters = ${unitDict1['meter_to_feet']} feet | ${num.value} feet = ${unitDict1['feet_to_meter']} meters`
    volume.textContent = `${num.value} liters = ${unitDict2['liters_to_gallons']} gallons | ${num.value} gallons = ${unitDict2['gallons_to_liters']} liters`
    mass.textContent = `${num.value} kilos = ${unitDict3['kilos_to_pounds']} pounds | ${num.value} pounds = ${unitDict3['pounds_to_kilos']} kilos`
}

convertBtn.onclick = () => {
    let convert_length = convertLength(input)
    let convert_volume = convertVolume(input)
    let convert_mass = convertMass(input)

    renderUnits(convert_length, convert_volume, convert_mass, input)
}

//false == Light Mode, true == Dark Mode
let themeToggle = false
themeBtn.onclick = () => {
    if (!themeToggle){
        allUnitContainer.style.backgroundColor = "#1F2937"
        unitContainer.forEach(div => div.style.backgroundColor = "#273549")
        unitText.forEach(span => span.style.color = "white")
        themeToggle = true
    }
    else if(themeToggle){
        allUnitContainer.style.backgroundColor = "#F4F4F4"
        unitContainer.forEach(div => div.style.backgroundColor = "#FFFFFF")
        unitText.forEach(span => span.style.color = "black")
        themeToggle = false
    }
}

