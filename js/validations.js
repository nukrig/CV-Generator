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
        redOrGreenIcon[4].classList.remove('dispNone')
        redOrGreenIcon[5].classList.add('dispNone')
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
        redOrGreenIcon[6].classList.remove('dispNone')
        redOrGreenIcon[7].classList.add('dispNone')
        return false
    }
}
export const validateTwoSimbols = (input,x,y)=>{
    if(input.value&&input.value.length>=2){
        input.style.border='1px solid #98E37E'
        redOrGreenIcon[x].classList.add('dispNone')
        redOrGreenIcon[y].classList.remove('dispNone')
        return true
    }else{
        input.style.border='1px solid #EF5050'
        redOrGreenIcon[x].classList.remove('dispNone')
        redOrGreenIcon[y].classList.add('dispNone')
        return false
    }
}
export const dynamicValidateTwoSymbols = (input,x,y)=>{
    if(input.value&&input.value.length>=2){
        input.style.border='1px solid #98E37E'
        x.classList.add('dispNone')
        y.classList.remove('dispNone')
        return true
    }else{
        input.style.border='1px solid #EF5050'
        x.classList.remove('dispNone')
        y.classList.add('dispNone')
        return false
    }
}
export const dynamicValidateBlank = (input,x,y)=>{
    if(input.value){
        input.style.border='1px solid #98E37E'
        x.classList.add('dispNone')
        y.classList.remove('dispNone')
        return true
    }else{
        input.style.border='1px solid #EF5050'
        x.classList.remove('dispNone')
        y.classList.add('dispNone')
        return false
    }
}
export const validateBlank = (input,x,y)=>{
    if(input.value){
        input.style.border='1px solid #98E37E'
        redOrGreenIcon[x].classList.add('dispNone')
        redOrGreenIcon[y].classList.remove('dispNone')
        return true
    }else{
        input.style.border='1px solid #EF5050'
        redOrGreenIcon[x].classList.remove('dispNone')
        redOrGreenIcon[y].classList.add('dispNone')
        return false
    }
}