import { formData } from "./data.js"
import { newExperience } from "./createHtml.js";

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
        console.log(formData);
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
        mainDiv.style.backgroundColor='red'
        mainDiv.style.height='1263px'
        rightBlock.style.border='0.8px solid #000000';
        popUp.style.display='inline-block'
    })
    xButton.addEventListener('click',()=>{
        popUp.style.display='none'
    })
    const more = document.getElementById('more')
    more.addEventListener('click',()=>{
    document.getElementById('addMoreExp').innerHTML = newExperience
    // document.getElementById('page2').style.height='1707px'
    })
}