import { formData } from "./data.js"

function isGeorgian(char) {
    var code = char.charCodeAt(0);
    return (code >= 0x10A0 && code <= 0x10FF);
}
const redOrGreenIcon = document.querySelectorAll('.absolute')
const inputFname = document.getElementById('fname-inp');
export const validateFname = ()=>{
    for (var i = 0; i < formData.name.length; i++) {
        redOrGreenIcon[0].classList.add('dispNone')
        redOrGreenIcon[1].classList.add('dispNone')
    if (isGeorgian(formData.name[i])&&formData.name.length>=2) {
         inputFname.style.border='1px solid #98E37E'
        redOrGreenIcon[1].classList.remove('dispNone')
        return true
    }else{
        inputFname.style.border='1px solid #EF5050'
        redOrGreenIcon[0].classList.remove('dispNone')
        return false
      }
    }
}
const inputLname = document.getElementById('lname-inp');
export const validateLname = ()=>{
    for (var i = 0; i < formData.surname.length; i++) {
        redOrGreenIcon[2].classList.add('dispNone')
        redOrGreenIcon[3].classList.add('dispNone')
      if (isGeorgian(formData.surname[i])&&formData.surname.length>=2) {
        inputLname.style.border='1px solid #98E37E'
        redOrGreenIcon[3].classList.remove('dispNone')
        return true
      }else{
        inputLname.style.border='1px solid #EF5050'
        redOrGreenIcon[2].classList.remove('dispNone')
        return false
      }
    }
}
const mail = document.getElementById('eMail')
export const validateEmail = ()=>{
    if(mail.value.slice(-12) === "@redberry.ge"&&mail.value.length>12){
        mail.style.border='1px solid #98E37E'
        redOrGreenIcon[4].classList.add('dispNone')
        redOrGreenIcon[5].classList.remove('dispNone')
        return true
    }
    else{
        mail.style.border='1px solid #EF5050'
        redOrGreenIcon[5].classList.add('dispNone')
        redOrGreenIcon[4].classList.remove('dispNone')
        return false
    }
}
const phone = document.getElementById('number')
export const validateNumber = ()=>{
    if(phone.value.slice(0,4) === '+995'&& phone.value.split(' ').join('').length==13){
        phone.style.border='1px solid #98E37E'
        redOrGreenIcon[6].classList.add('dispNone')
        redOrGreenIcon[7].classList.remove('dispNone')
        return true
    }else{
        phone.style.border='1px solid #EF5050'
        redOrGreenIcon[7].classList.add('dispNone')
        redOrGreenIcon[6].classList.remove('dispNone')
        return false
    }
}