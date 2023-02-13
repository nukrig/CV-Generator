import { formData } from "./data.js"
function isGeorgian(input) {
    const georgianRegex = /^[\u10D0-\u10F0\s]+$/;
    return georgianRegex.test(input);
  }
const redOrGreenIcon = document.querySelectorAll('.absolute')
const inputFname = document.getElementById('fname-inp');
export const validateFname = ()=>{
        redOrGreenIcon[0].classList.add('dispNone')
        redOrGreenIcon[1].classList.add('dispNone')
        if (isGeorgian(formData.name)&&formData.name.length>=2) {
            inputFname.style.border='1px solid #98E37E'
            redOrGreenIcon[1].classList.remove('dispNone')
            event.target.parentElement.children[0].style.color='#000000'
            return true
        }else{
            inputFname.style.border='1px solid #EF5050'
            redOrGreenIcon[0].classList.remove('dispNone')
            event.target.parentElement.children[0].style.color='#E52F2F'
            return false
    }
    }
const inputLname = document.getElementById('lname-inp');
export const validateLname = ()=>{
        redOrGreenIcon[2].classList.add('dispNone')
        redOrGreenIcon[3].classList.add('dispNone')
      if (isGeorgian(formData.surname)&&formData.surname.length>=2) {
        inputLname.style.border='1px solid #98E37E'
        redOrGreenIcon[3].classList.remove('dispNone')
        event.target.parentElement.children[0].style.color='#000000'
        return true
      }else{
        inputLname.style.border='1px solid #EF5050'
        redOrGreenIcon[2].classList.remove('dispNone')
        event.target.parentElement.children[0].style.color='#E52F2F'
        return false
    }
}
const mail = document.getElementById('eMail')
export const validateEmail = ()=>{
    if(mail.value.slice(-12) === "@redberry.ge"&&mail.value.length>12){
        mail.style.border='1px solid #98E37E'
        redOrGreenIcon[4].classList.add('dispNone')
        redOrGreenIcon[5].classList.remove('dispNone')
        event.target.parentElement.children[0].style.color='#000000'
        return true
    }
    else{
        mail.style.border='1px solid #EF5050'
        redOrGreenIcon[4].classList.remove('dispNone')
        redOrGreenIcon[5].classList.add('dispNone')
        event.target.parentElement.children[0].style.color='#E52F2F'
        return false
    }
}
const phone = document.getElementById('number')
export const validateNumber = ()=>{
    const regex = /^\s*\+\s*\d+(?:\s*\d+)*\s*$/.test(phone.value)
    if(regex && phone.value.split("+").length === 2 && phone.value.split(' ').join('').length==13){
        phone.style.border='1px solid #98E37E'
        redOrGreenIcon[6].classList.add('dispNone')
        redOrGreenIcon[7].classList.remove('dispNone')
        event.target.parentElement.children[0].style.color='#000000'
        return true
    }else{
        phone.style.border='1px solid #EF5050'
        redOrGreenIcon[6].classList.remove('dispNone')
        redOrGreenIcon[7].classList.add('dispNone')
        event.target.parentElement.children[0].style.color='#E52F2F'
        return false
    }
}
export const validateTwoSimbols = (input,x,y)=>{
    if(input.value&&input.value.length>=2){
        input.style.border='1px solid #98E37E'
        redOrGreenIcon[x].classList.add('dispNone')
        redOrGreenIcon[y].classList.remove('dispNone')
        input.parentElement.children[0].style.color='#000000'
        return true
    }else{
        input.style.border='1px solid #EF5050'
        redOrGreenIcon[x].classList.remove('dispNone')
        redOrGreenIcon[y].classList.add('dispNone')
        input.parentElement.children[0].style.color='#E52F2F'
        return false
    }
}
export const dynamicValidateTwoSymbols = (input,x,y)=>{
    if(input.value&&input.value.length>=2){
        input.style.border='1px solid #98E37E'
        x.classList.add('dispNone')
        y.classList.remove('dispNone')
        event.target.parentElement.children[0].style.color='#000000'
        return true
    }else{
        input.style.border='1px solid #EF5050'
        x.classList.remove('dispNone')
        y.classList.add('dispNone')
        event.target.parentElement.children[0].style.color='#E52F2F'
        return false
    }
}
export const dynamicValidateBlank = (input,x,y)=>{
    if(input.value){
        input.style.border='1px solid #98E37E'
        x.classList.add('dispNone')
        y.classList.remove('dispNone')
        event.target.parentElement.children[0].style.color='#000000'
        return true
    }else{
        input.style.border='1px solid #EF5050'
        x.classList.remove('dispNone')
        y.classList.add('dispNone')
        event.target.parentElement.children[0].style.color='#E52F2F'
        return false
    }
}
export const validateBlank = (input,x,y)=>{
    if(input.value){
        input.style.border='1px solid #98E37E'
        redOrGreenIcon[x].classList.add('dispNone')
        redOrGreenIcon[y].classList.remove('dispNone')
        event.target.parentElement.children[0].style.color='#000000'
        return true
    }else{
        input.style.border='1px solid #EF5050'
        redOrGreenIcon[x].classList.remove('dispNone')
        redOrGreenIcon[y].classList.add('dispNone')
        event.target.parentElement.children[0].style.color='#E52F2F'
        return false
    }
}