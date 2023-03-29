// johannes.js

const firstname = "Johannes"
const  surname = "Potgieter"
const role = "Intern"

console.log (role)

export const displayJ= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = displayJ

