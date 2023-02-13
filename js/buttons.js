import { formData,removeEmptyValues} from "./data.js"
import { newExperience ,newExperienceRight, newEducation ,newEducationRight } from "./createHtml.js";
import { validateFname,validateLname,validateEmail,validateNumber,
         validateTwoSimbols,validateBlank,
         dynamicValidateTwoSymbols,dynamicValidateBlank} from "./validations.js";
import { fetchGet,fetchPost } from "./fetch.js";
         
         // INPUTS
         const redOrGreenIcon = document.querySelectorAll('.absolute')
         const inputFname = document.getElementById('fname-inp');
         const inputLname = document.getElementById('lname-inp');
         const mail = document.getElementById('eMail')
         const phone = document.getElementById('number')
         const photo_input = document.querySelector('#photo-input')
         const position = document.getElementById('position')
         const employer = document.getElementById('employer')
         const startDate = document.getElementById('startDate-inp')
         const dueDate = document.getElementById('dueDate-inp')
         const description = document.getElementById('experience-desc')
         const institute = document.getElementById('institute')
         const degree = document.getElementById('degree')
         const educFinish = document.getElementById('educFinish')
         const educDescr = document.getElementById('education-desc')
        //  -------------------------------------------------------------------------------------
         const nextButton1 = document.getElementById('nextPage1')
         const nextButton2 = document.getElementById('nextPage2')
         const nextButton3 = document.getElementById('nextPage3')
         const prevButton1 = document.getElementById('previous1')
         const prevButton2 = document.getElementById('previous2')
         const xButton = document.getElementById('X')
         const p1 = document.getElementById('page1')
         const p2 = document.getElementById('page2')
         const p3 = document.getElementById('page3')
         const rightBlock = document.getElementById('rightBlock')
         const popUp = document.getElementById('popUp')
         const photo = document.getElementById('addPhoto')
export const pageButtonsExport = ()=>{
    nextButton1.addEventListener('click',()=>{
        if (!inputFname.value) {
            inputFname.style.border='1px solid #EF5050'
            redOrGreenIcon[0].classList.remove('dispNone')
            inputFname.parentElement.children[0].style.color='#E52F2F'
        }
        if (!inputLname.value) {
            inputLname.style.border='1px solid #EF5050'
            redOrGreenIcon[2].classList.remove('dispNone')
            inputLname.parentElement.children[0].style.color='#E52F2F'
        }
        const photoValidation = document.querySelectorAll('.picValid')
        if (!photo_input.value) {
            photoValidation[0].classList.remove('dispNone')
        }
        if (!mail.value) {
            mail.style.border='1px solid #EF5050'
            redOrGreenIcon[4].classList.remove('dispNone')
            mail.parentElement.children[0].style.color='#E52F2F'
        }
        if (!phone.value) {
            phone.style.border='1px solid #EF5050'
            redOrGreenIcon[6].classList.remove('dispNone')
            phone.parentElement.children[0].style.color='#E52F2F'
        }
        if(validateFname()&&validateLname()&&validateEmail()&&validateNumber()&&photo_input.value){
            document.getElementById('moreInCvExp').style.display='block'
            document.querySelector('.ExperienceHeader').style.display='block'
            document.getElementById('expLine').style.display='block'
            p1.style.display='none'
            p2.style.display='block'
        }
    })
    nextButton2.addEventListener('click',()=>{
        
        if (!position.value) {
            position.style.border='1px solid #98E37E'
            redOrGreenIcon[8].classList.add('dispNone')
            position.parentElement.children[0].style.color='#E52F2F'
        }
        if (!employer.value) {
            employer.style.border='1px solid #EF5050'
            redOrGreenIcon[10].classList.remove('dispNone')
            employer.parentElement.children[0].style.color='#E52F2F'
        }
        if (!startDate.value) {
            startDate.style.border='1px solid #EF5050'
            redOrGreenIcon[12].classList.remove('dispNone')
            startDate.parentElement.children[0].style.color='#E52F2F'
        }
        if (!dueDate.value) {
            dueDate.style.border='1px solid #EF5050'
            redOrGreenIcon[14].classList.remove('dispNone')
            dueDate.parentElement.children[0].style.color='#E52F2F'
        }
        if (!description.value) {
            description.style.border='1px solid #EF5050'
            redOrGreenIcon[16].classList.remove('dispNone')
            description.parentElement.children[0].style.color='#E52F2F'
        }
        if(validateTwoSimbols(position,8,9)&&validateTwoSimbols(employer,10,11)&&
        validateBlank(startDate,12,13)&&validateBlank(dueDate,14,15)&&validateBlank(description,16,17)){
            document.getElementById('moreInCvEduc').style.display='block'
            document.querySelector('.EducationHeader').style.display='block'
            p2.style.display='none'
            p3.style.display='block'
        }
    })
    prevButton1.addEventListener('click',()=>{
        p2.style.display='none'
        p1.style.display='block'
    })
    prevButton2.addEventListener('click',()=>{
        prevButton1.style.color='#FFFFFF'
        p3.style.display='none'
        p2.style.display='block'
    })
    nextButton3.addEventListener('click',()=>{
        if (!institute.value) {
            institute.style.border='1px solid #98E37E'
            redOrGreenIcon[18].classList.add('dispNone')
            institute.parentElement.children[0].style.color='#E52F2F'
        }
        if (!educFinish.value) {
            educFinish.style.border='1px solid #EF5050'
            redOrGreenIcon[20].classList.remove('dispNone')
            educFinish.parentElement.children[0].style.color='#E52F2F'
        }
        if (!educDescr.value) {
            educDescr.style.border='1px solid #EF5050'
            redOrGreenIcon[22].classList.remove('dispNone')
            educDescr.parentElement.children[0].style.color='#E52F2F'
        }
        if(validateTwoSimbols(institute,18,19)&&validateBlank(degree,20,21)&&
        validateBlank(educFinish,20,21)&&validateBlank(educDescr,22,23)){
            p3.style.display='none'
            rightBlock.style.marginLeft='549px'
            rightBlock.style.marginTop='54px'
            rightBlock.style.marginBottom='129px'
            photo.style.left='1050px'
            photo.style.top='102px'
            rightBlock.style.border='0.8px solid #000000';
            popUp.style.display='inline-block'
            removeEmptyValues(formData)
            fetchPost()
        }
    })
    xButton.addEventListener('click',()=>{
        popUp.style.display='none'
    })
    // ADD MORE EXPERIENCE BUTTON...
    let expObj={
            "position": "",
            "employer": "",
            "start_date": "",
            "due_date": "",
            "description": ""
    }
    const more = document.getElementById('more')
    const expRight = document.getElementById('moreInCvExp')
    const addMoreExp = document.getElementById('addMoreExp')
    let index = 0
    more.addEventListener('click',()=>{
        if(validateTwoSimbols(position,8,9)&&validateTwoSimbols(employer,10,11)&&
        validateBlank(startDate,12,13)&&validateBlank(dueDate,14,15)&&validateBlank(description,16,17)){
            document.getElementById('moreInCvExp').style.display='block'
            document.querySelector('.ExperienceHeader').style.display='block'
            document.getElementById('expLine').style.display='block'
            nextButton2.style.marginBottom='65px'
            index++
            const newDiv=document.createElement('div')
            newDiv.innerHTML=newExperienceRight(index)
            newDiv.style.display='none'
            expRight.appendChild(newDiv)
            const ulExp= document.createElement('ul')
            const liExp = document.createElement('li')
            liExp.innerHTML = newExperience(index)
            ulExp.appendChild(liExp)
            addMoreExp.appendChild(ulExp)
            formData.experiences.push({...expObj})
            for (let i=0;i<index;i++) {
                document.getElementById(`position${i+1}`).addEventListener('input',(event)=>{
                    if (document.getElementById(`position${i+1}`).value) {
                        newDiv.style.display='block'
                    }
                    let allChildren = event.target.parentElement.children
                    dynamicValidateTwoSymbols(event.target,allChildren[3],allChildren[4])
                    formData.experiences[i+1].position=event.target.value
                    document.getElementById(`addPosition${i+1}`).textContent=formData.experiences[i+1].position
                })
                document.getElementById(`employer${i+1}`).addEventListener('input',(event)=>{
                    if (document.getElementById(`employer${i+1}`).value) {
                        newDiv.style.display='block'
                    }
                    let allChildren = event.target.parentElement.children
                    dynamicValidateTwoSymbols(event.target,allChildren[3],allChildren[4])
                    formData.experiences[i+1].employer=event.target.value
                    document.getElementById(`addEmployer${i+1}`).textContent=formData.experiences[i+1].employer
                })
                document.getElementById(`startDate-inp${i+1}`).addEventListener('input',(event)=>{
                    if (document.getElementById(`startDate-inp${i+1}`).value) {
                        newDiv.style.display='block'
                    }
                    let allChildren = event.target.parentElement.children
                    dynamicValidateBlank(event.target,allChildren[3],allChildren[4])
                    formData.experiences[i+1].start_date=event.target.value
                    document.getElementById(`addStart${i+1}`).textContent=formData.experiences[i+1].start_date + ' - '
                })
                document.getElementById(`dueDate-inp${i+1}`).addEventListener('input',(event)=>{
                    if (document.getElementById(`dueDate-inp${i+1}`).value) {
                        newDiv.style.display='block'
                    }
                    let allChildren = event.target.parentElement.children
                    dynamicValidateBlank(event.target,allChildren[3],allChildren[4])
                    formData.experiences[i+1].due_date=event.target.value
                    document.getElementById(`addDue${i+1}`).textContent=formData.experiences[i+1].due_date
                })
                document.getElementById(`experience-desc${i+1}`).addEventListener('input',(event)=>{
                    if (document.getElementById(`experience-desc${i+1}`).value) {
                        newDiv.style.display='block'
                    }
                    let allChildren = event.target.parentElement.children
                    dynamicValidateBlank(event.target,allChildren[2],allChildren[3])
                    formData.experiences[i+1].description=event.target.value
                    document.getElementById(`addDescription${i+1}`).textContent=formData.experiences[i+1].description
                })
            }
        }
        
    })
    // ADD MORE EDUCATION BUTTON...
    let educObj={
        "institute": "",
        "degree": "",
        "due_date": "",
        "description": ""
}
const more2 = document.getElementById('more2')
const educRight = document.getElementById('moreInCvEduc')
const addMoreEduc = document.getElementById('addMoreEduc')
let index1 = 0
more2.addEventListener('click',()=>{
    if(validateTwoSimbols(institute,18,19)&&validateBlank(degree,20,21)&&
        validateBlank(educFinish,20,21)&&validateBlank(educDescr,22,23)){
        nextButton3.style.marginBottom='65px'
        index1++
        const newDiv2=document.createElement('div')
        newDiv2.innerHTML=newEducationRight(index1)
        educRight.appendChild(newDiv2)
        const ulEduc= document.createElement('ul')
        const liEduc = document.createElement('li')
        liEduc.innerHTML = newEducation(index1)
        ulEduc.appendChild(liEduc)
        addMoreEduc.appendChild(ulEduc)
        formData.educations.push({...educObj})
        for (let i=0;i<index1;i++) {
            document.getElementById(`institute${i+1}`).addEventListener('input',(event)=>{
                let allChildren = event.target.parentElement.children
                dynamicValidateTwoSymbols(event.target,allChildren[3],allChildren[4])
                formData.educations[i+1].institute=event.target.value
                document.getElementById(`addInstitute${i+1}`).textContent=formData.educations[i+1].institute+','
            })
            fetchGet(i+1)
            document.getElementById(`degree${i+1}`).addEventListener('input',(event)=>{
                formData.educations[i+1].degree=event.target.value
                document.getElementById(`addDegree${i+1}`).textContent=formData.educations[i+1].degree
            })
            document.getElementById(`educFinish${i+1}`).addEventListener('input',(event)=>{
                let allChildren = event.target.parentElement.children
                dynamicValidateBlank(event.target,allChildren[3],allChildren[4])
                formData.educations[i+1].due_date=event.target.value
                document.getElementById(`addDue2${i+1}`).textContent=formData.educations[i+1].due_date
            })
            document.getElementById(`education-desc${i+1}`).addEventListener('input',(event)=>{
                let allChildren = event.target.parentElement.children
                dynamicValidateBlank(event.target,allChildren[2],allChildren[3])
                formData.educations[i+1].description=event.target.value
                document.getElementById(`addDescription2${i+1}`).textContent=formData.educations[i+1].description
            })
            
        }
        }
    })
}