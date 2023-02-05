import { formData } from "./data.js";

const addFname = document.getElementById('addFname');
const inputFname = document.getElementById('fname-inp');
inputFname.addEventListener('input',()=>{
    addFname.textContent = inputFname.value
    formData.name=inputFname.value
    localStorage.setItem('data',JSON.stringify(formData))
})
const addLname = document.getElementById('addLname');
const inputLname = document.getElementById('lname-inp');
inputLname.addEventListener('input',()=>{
    addLname.textContent = inputLname.value
    formData.surname=inputLname.value
    localStorage.setItem('data',JSON.stringify(formData))
})
const addMail = document.getElementById('addMail')
const mail = document.getElementById('eMail')
mail.addEventListener('input',()=>{
    addMail.textContent = mail.value
    formData.email=mail.value
    localStorage.setItem('data',JSON.stringify(formData))
})
const addPhone = document.getElementById('addPhone')
const phone = document.getElementById('number')
phone.addEventListener('input',()=>{
    addPhone.textContent = phone.value
    formData.phone_number=phone.value
    localStorage.setItem('data',JSON.stringify(formData))
})
const aboutMe = document.getElementById('aboutMe')
const about = document.getElementById('personal-about')
about.addEventListener('input',()=>{
    aboutMe.textContent = about.value
    formData.experiences=about.value
    localStorage.setItem('data',JSON.stringify(formData))
})
    let lsdata = localStorage.getItem('data')
    console.log(lsdata);
    console.log(lsdata.name);
    console.log(inputFname);
    console.log(formData);

// function previewFile(event) {
//     console.log(event);
//     const addImg = document.createElement('img')
//     addImg.setAttribute('src',event.targ)
// ფოტოს ასატვირთ ინფუთში უნდა მივუთითო  onchange="previewFile(event)" 
// }
// window.previewFile = previewFile
