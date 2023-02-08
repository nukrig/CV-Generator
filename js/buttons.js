import { formData } from "./data.js"
import { newExperience , newEducation } from "./createHtml.js";
import { fetchExport } from "./fetch.js";

export const pageButtonsExport = ()=>{
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
    const logo12 = document.querySelector('.logo-12')
    const mainDiv = document.querySelector('.mainDiv')
    const popUp = document.getElementById('popUp')
    nextButton1.addEventListener('click',()=>{
        p1.style.display='none'
        p2.style.display='block'
    })
    nextButton2.addEventListener('click',()=>{
        p2.style.display='none'
        p3.style.display='block'
    })
    prevButton1.addEventListener('click',()=>{
        p2.style.display='none'
        p1.style.display='block'
    })
    prevButton2.addEventListener('click',()=>{
        p3.style.display='none'
        p2.style.display='block'
    })
    nextButton3.addEventListener('click',()=>{
        p3.style.display='none'
        rightBlock.style.marginLeft='549px'
        rightBlock.style.marginTop='54px'
        logo12.style.left='627px'
        mainDiv.style.height='1263px'
        rightBlock.style.border='0.8px solid #000000';
        popUp.style.display='inline-block'
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
    // const addPosition = document.getElementById('addPosition')
    const more = document.getElementById('more')
    let index = 0
    more.addEventListener('click',()=>{
        index++
        const addMoreExp = document.getElementById('addMoreExp')
        const ulExp= document.createElement('ul')
        const liExp = document.createElement('li')
        liExp.innerHTML = newExperience(index)
        ulExp.appendChild(liExp)
        addMoreExp.appendChild(ulExp)
        formData.experiences.push({...expObj})
        for (let i=0;i<index;i++) {
            document.getElementById(`position${i+1}`).addEventListener('input',(event)=>{
                formData.experiences[i+1].position=event.target.value
                console.log(formData);
                // addPosition.textContent=formData.experiences[i+1].position+','
            })
            document.getElementById(`employer${i+1}`).addEventListener('input',(event)=>{
                formData.experiences[i+1].employer=event.target.value
                console.log(formData);
                // addPosition.textContent=formData.experiences[i+1].employer+','
            })
            document.getElementById(`startDate-inp${i+1}`).addEventListener('input',(event)=>{
                formData.experiences[i+1].start_date=event.target.value
                console.log(formData);
                // addPosition.textContent=formData.experiences[i+1].start_date+','
            })
            document.getElementById(`dueDate-inp${i+1}`).addEventListener('input',(event)=>{
                formData.experiences[i+1].due_date=event.target.value
                console.log(formData);
                // addPosition.textContent=formData.experiences[i+1].due_date+','
            })
            document.getElementById(`experience-desc${i+1}`).addEventListener('input',(event)=>{
                formData.experiences[i+1].description=event.target.value
                console.log(formData);
                // addPosition.textContent=formData.experiences[i+1].description+','
            })
        }
    })
    // ADD MORE EDUCATION BUTTON...
    let educObj={
        "institute": "",
        "degree": "",
        "due_date": "",
        "description": ""
}
// const addPosition = document.getElementById('addPosition')
const more2 = document.getElementById('more2')
let index1 = 0
more2.addEventListener('click',()=>{
    index1++
    const addMoreEduc = document.getElementById('addMoreEduc')
    const ulEduc= document.createElement('ul')
    const liEduc = document.createElement('li')
    liEduc.innerHTML = newEducation(index1)
    ulEduc.appendChild(liEduc)
    addMoreEduc.appendChild(ulEduc)
    formData.educations.push({...educObj})
    console.log(formData);
    for (let i=0;i<index1;i++) {
        document.getElementById(`institute${i+1}`).addEventListener('input',(event)=>{
            formData.educations[i+1].institute=event.target.value
            console.log(formData);
            // addPosition.textContent=formData.educations[i+1].institute+','
        })
        document.getElementById(`degree${i+1}`).addEventListener('input',(event)=>{
            formData.educations[i+1].degree=event.target.value
            console.log(formData);
            // addPosition.textContent=formData.educations[i+1].degree+','
        })
        document.getElementById(`educFinish${i+1}`).addEventListener('input',(event)=>{
            formData.educations[i+1].due_date=event.target.value
            console.log(formData);
            // addPosition.textContent=formData.educations[i+1].due_date','
        })
        document.getElementById(`education-desc${i+1}`).addEventListener('input',(event)=>{
            formData.educations[i+1].description=event.target.value
            console.log(formData);
            // addPosition.textContent=formData.educations[i+1].description
        })
    }
})
}